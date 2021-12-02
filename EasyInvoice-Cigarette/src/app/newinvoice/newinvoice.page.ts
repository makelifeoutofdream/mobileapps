import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { threadId } from 'worker_threads';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Invoice } from '../services/invoice';
import { InvoiceItem } from '../services/invoiceitem';
import { PrintService } from '../services/print.service';
import { Profile } from '../services/profile';
import { ToastserviceService } from '../services/toastservice.service';
import { ValidationService } from '../validation.service';
import {sprintf} from "sprintf-js";
import * as iconv from 'iconv-lite';
import { IncomingMessage } from 'http';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.page.html',
  styleUrls: ['./newinvoice.page.scss']
})
export class NewinvoicePage implements OnInit {

  private invoice : Invoice;
  private product : InvoiceItem;
  private customerList:Customer[];
  private products:InvoiceItem[];
  private productsBackup:InvoiceItem[];
  private selectedProducts:InvoiceItem[];
  private profile : Profile;
  private applyVat : boolean;
  private showTable=false;
  private inventoryList: Inventory[];
  time:string;

  

  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController,
    public printService : PrintService,private validationService :ValidationService,public datepipe: DatePipe) { 
      
    }

  ngOnInit() {
    this.invoice={id:null, invoiceNumber : "",invoiceDate: new Date() ,invoiceDateString : "",amountPaid:null,balanceAmount:null,
    customer :  {id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
    buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
    pobox:"",postalCode:"",phoneNumber:"",mobile:"",email:"",vatNumber:"",crNumber:"",creditLimit:null,balance:null},
    invoiceItems : [],
  total:null,tax:null} 
}


ionViewWillEnter(){
  this.showTable=false;
  this.applyVat=true;
  this.dbService.getProfile().then(data=>{
    this.profile=data;
  });
  this.resetInvoiceForm();
}


async filterProducts(evt) {
  this.product={id: null, name: "",nameInArabic:"",unitPrice : null,billingUnitPrice:null,quantity:null,balanceQuantity:null,displayBalanceQuantity:null,selected:null,purchaseUnitPrice:null};
  this.products=this.productsBackup;
  const searchTerm = evt.srcElement.value;

  if (!searchTerm) {
    return;
  }

  this.products = this.products.filter(currentProduct => {
    if (currentProduct.name && searchTerm) {
      return (currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
  });
}

productSelected(evt){
  this.selectedProducts=evt.value;
  this.invoice.invoiceItems=this.selectedProducts;  
  if(this.invoice.invoiceItems!=null && this.invoice.invoiceItems!=undefined && this.invoice.invoiceItems.length>0)
  this.showTable=true;
  else
  this.showTable=false;
 
}

resetInvoiceForm(){
  this.productsBackup=new Array();
  this.products=new Array();
  this.dbService.getAllInventories().then(data=>{
    this.inventoryList=data;
  });
  this.invoice={id:null, invoiceNumber : "",invoiceDate: new Date() ,invoiceDateString : "",amountPaid:null,balanceAmount:null,
  customer :  {id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
  buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
  pobox:"",postalCode:"",phoneNumber:"",mobile:"",email:"",vatNumber:"",crNumber:"",creditLimit:null,balance:null},
  invoiceItems : [],
total:null,tax:null} ;
  this.dbService.incrementInvoiceNumber().then(data=>{
    if(data==null || data==undefined){
      data=1;
    }
    this.invoice.invoiceNumber=this.dbService.codeConstant+this.dbService.invoiceCodeConstant+ data;
  });

  
  this.invoice.invoiceItems=new Array();
  this.selectedProducts=new Array();
  //this.dbService.getInvoiceNumber().then(data=>{
    //this.invoice.invoiceNumber=data;
  //});
  this.dbService.getAllCustomers().then(data=>this.customerList=data);
}
  
populateCustomerProducts(){
  if(this.invoice.customer!=null && this.invoice.customer!=undefined && this.invoice.customer.itemList!=null && this.invoice.customer.itemList!=undefined){
    console.log("populateCustomerProducts");
    let inventory ;
    
    for(let inv of this.invoice.customer.itemList){
      var index = this.inventoryList.findIndex(i => i.id == inv.id);
      if(index!=null && index!=undefined && index>=0){
        inventory={id: inv.id, name : inv.name,nameInArabic: inv.nameInArabic, unitPrice : inv.unitPrice,billingUnitPrice:null,quantity:null,InvoiceItem:[],purchasePrice:inv.purchasePrice,balanceQuantity:this.inventoryList[index].quantity};
        this.products.push(inventory);
        this.productsBackup.push(inventory);
        //this.invoice.invoiceItems.push(inventory);
      }
      
    }

    if(this.products!=null && this.products!=undefined && this.products.length>0)
  this.showTable=true;
  else
  this.showTable=false;
  }
  
}

calculateInvoiceTotal(item){
  this.invoice.total=0;
  this.invoice.tax=0;
  if(undefined==this.invoice.total || null==this.invoice.total){
    this.invoice.total=0;
  }
  for(let itm of this.products){
    if(itm.quantity!=null && itm.quantity!=undefined && itm.quantity>0){
      this.invoice.total=this.invoice.total+ (itm.unitPrice*itm.quantity);
    }
    
  }
  //apply vat
  if(this.applyVat){
    if(this.profile!=null && this.profile!=undefined && this.profile.vat!=null && this.profile.vat!=undefined){
      this.invoice.tax=(this.profile.vat*this.invoice.total)/100;
      this.invoice.total=this.invoice.total+this.invoice.tax;
    }
  
  }
  if(this.invoice.customer.balance==null || this.invoice.customer.balance==undefined){
    this.invoice.customer.balance=0;
  }
  
  this.invoice.balanceAmount=( this.invoice.customer.balance+this.invoice.total)-this.invoice.amountPaid;
  this.invoice.balanceAmount=Math.round((this.invoice.balanceAmount+ Number.EPSILON) * 100) / 100;
  this.invoice.total=Math.round((this.invoice.total+ Number.EPSILON) * 100) / 100;
  

  if(item!=null && item!=undefined){
    var index = this.products.findIndex(i => i.id == item.id);
  if(index!=null && index!=undefined && index>=0)
    this.products[index].displayBalanceQuantity=this.products[index].balanceQuantity-item.quantity;
  
  }
  
  
}

submitBill(){
  
  this.invoice.invoiceItems=this.products.filter(a=>a.quantity!=null && a.quantity!=undefined && a.quantity>0);
  this.dbService.createOrUpdateInvoice(this.invoice).then(data=>{
    this.dbService.getAllInventories().then(stocks=>{
      let stockList=stocks;
      for(let itm of this.invoice.invoiceItems){
        var index = stockList.findIndex(i => i.id == itm.id);
        stockList[index].quantity=stockList[index].quantity-itm.quantity;
      }
      this.dbService.saveAllInventories(stockList).then(res=>{
        if(this.invoice.balanceAmount>=this.invoice.amountPaid){
          var index = this.customerList.findIndex(i => i.id == this.invoice.customer.id);
        this.invoice.customer.balance=this.invoice.balanceAmount;
        this.dbService.UpdateCustomer(this.invoice.customer);
        }
        this.tostService.presentToast("Bill submitted successfully");
        
        //this.navCtrl.navigateRoot('invoice');
      })
    });
  }).catch(reason=>{
    this.tostService.presentToast("Failed to submit bill");
    console.log(reason);
  })
}

generateQRCodeContent(){
  let datetime:string =this.invoice.invoiceDate.getDate()+'-'+this.invoice.invoiceDate.getMonth()+'-'+this.invoice.invoiceDate.getFullYear()+' '+this.invoice.invoiceDate.getHours()+':'+this.invoice.invoiceDate.getMinutes()+':'+this.invoice.invoiceDate.getSeconds();
  let data="Customer : "+this.invoice.customer.name+"  Address : "+this.invoice.customer.city+","+this.invoice.customer.district+" Date"+
  datetime+" Invoice No : "+this.invoice.invoiceNumber+" Total "+this.invoice.total;
  return data;
}

getFormatedContent(){
  const encoder = new EscPosEncoder();
  let result="";
  let datetime:string =this.invoice.invoiceDate.getDate()+'-'+this.invoice.invoiceDate.getMonth()+'-'+this.invoice.invoiceDate.getFullYear()+' '+this.invoice.invoiceDate.getHours()+':'+this.invoice.invoiceDate.getMinutes()+':'+this.invoice.invoiceDate.getSeconds();
  let billDetails=encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().
  raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : '+ this.profile.vatNumber+','+'CR # : '+this.profile.crNumber).
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).
  raw([0x1B, 0x21, 0x20]).align('center').bold(true).line('VAT INVOICE').bold(true).
  raw([0x1B, 0x21, 0x03]).align('left').text(this.invoice.invoiceNumber+'            '+ datetime).newline().
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).
  align('left').bold(true).line('Bill To').
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).
  align('left').line(this.invoice.customer.name).
  align('left').line(this.invoice.customer.street+','+this.invoice.customer.city+','+this.invoice.customer.district).
  align('left').line('VAT #: '+this.invoice.customer.vatNumber+'  CR#: '+this.invoice.customer.crNumber).
  align('left').line('Mob: '+this.invoice.customer.mobile).
  align('left').bold(true).line('---------------------------------------------------------------').
  align('left').line(sprintf('%s %-25.22s %6s %7s %16s','#', 'Item', 'Qty','Rate', 'Amount')).bold(true).
  align('left').bold(true).line('---------------------------------------------------------------');
  let counter:number=1;
  let totalQuantity=0;
  let itemDetails="";
  for(let itm of this.invoice.invoiceItems){
    totalQuantity+=itm.quantity;
    let temp=encoder.initialize().
    align('left').line(sprintf('%d %-13.13s %9.0f %8.2f %11.2f ',counter, itm.name, itm.quantity,itm.unitPrice, itm.unitPrice*itm.quantity));
    itemDetails+=temp;
    counter=counter+1;
  }

  let footer=encoder.initialize(). align('left').bold(true).line('------------------------------------------------').bold(true).
  raw([0x1B, 0x21, 0x08]).align('left').line('Qty : '+totalQuantity).
  align('right').line('Total Invoice Value(Excl. VAT) : '+  sprintf('%6.2f ',(this.invoice.total-this.invoice.tax))) .
  align('right').line('VAT Payable in SAR('+this.profile.vat+'%) : '+sprintf('%6.2f ',this.invoice.tax)).
  align('right').line('Gross Amount in SAR : '+sprintf('%6.2f ',this.invoice.total)).
  align('left').bold(true).line('------------------------------------------------').bold(true).
  align('right').line('Previous Balance : '+ sprintf('%6.2f',(this.invoice.balanceAmount+this.invoice.amountPaid))).
  align('right').line('Paid Amount : '+sprintf('%6.2f',this.invoice.amountPaid)).
  raw([0x1B, 0x21, 0x20]).align('left').line('Balance Amount: '+sprintf('%6.2f',this.invoice.balanceAmount)).
  raw([0x1B, 0x21, 0x08]).align('left').bold(true).line('------------------------------------------------').bold(true);
  
  let qrcode= encoder.initialize().raw([0x1B, 0x21, 0x03]).align('center').qrcode(this.generateQRCodeContent(),1,4,'h').newline().
  align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline(); ;
 // result+=billDetails+itemDetails;
  result=encoder.initialize().encode();
  //line(billDetails).line(itemDetails).encode();
  //sprintf('%d %-20.20s %9.2f %3.0f %11.2f ',counter, itm.name, itm.unitPrice, itm.quantity, itm.unitPrice*itm.quantity);

return result;
}

printBill(){
  const encoder = new EscPosEncoder();
  try{
    var esc = '\x1B';
    var newLine = '\x0A';
    var centerAllign = '\x1B' + '\x61'+ '\x31';
    var double_strike_on= '\x1b'+'\x47'+'\x05'
    var left_align='\x1B' + '\x61' + '\x30';
    var  right_align= '\x1B' + '\x61' + '\x32';
    var  bold_on='\x1B' + '\x45' + '\x0D';
    let data=esc+'@';
    data+=centerAllign;
    data+=esc + '!' + '\x25';
   // data+=bold_on;
    data+=this.profile.companyName;
    data+=newLine;
    //data+=centerAllign;
    //data+=esc + '!' + '\x01';
    //data+=this.profile.companyNameInArabic
    //data+=newLine;
    data+=centerAllign;
    data+=esc + '!' + '\x01';
    data+=this.profile.addressLine1;
    data+=newLine;
    //data+=centerAllign;
    //data+=esc + '!' + '\x01';
    //data+=this.profile.addressLine1InArabic;
    //data+=newLine;
    data+=centerAllign;
    data+=esc + '!' + '\x01';
    data+=this.profile.addressLine2;
    data+=newLine;
    //data+=centerAllign;
    //data+=esc + '!' + '\x01';
    //data+=this.profile.addressLine2InArabic;
    //data+=newLine;
    data+=centerAllign;
    data+=esc + '!' + '\x01';
    data+=this.profile.vatNumber;
    data+=newLine;
    data+=centerAllign;
    data+=esc + '!' + '\x01';
    data+=this.profile.crNumber;
    data+=newLine;
    data+=esc+'-'+'\x01';
    data+=newLine;
    data+=centerAllign;
    data+=double_strike_on;
    data+=esc + '!' + '\x01';
    data+="TAX INVOICE";
    data+=esc + '!' + '\x01';
    data+=newLine;
    data+=centerAllign;
    data+="---------------------"
    data+=newLine;
    data+=left_align;
    data+=esc + '!' + '\x01';
    data+="Bill To         ";
    //data+=right_align;
    //data+="فاتورة الى";
    data+=newLine;
    data+=left_align;
    data+=esc + '!' + '\x01';
    data+=this.invoice.customer.name;//+right_align+this.invoice.customer.nameInArabic;
    data+=newLine;
    data+=left_align;
    data+=this.invoice.customer.street+','+this.invoice.customer.city ;//+right_align+this.invoice.customer.streetInArabic+','+this.invoice.customer.cityInArabic;
    data+=newLine;
    data+=left_align;
    data+=this.invoice.customer.mobile;
    data+=newLine;
    data+=left_align;
    data+='VAT # : '+this.invoice.customer.vatNumber;
    //data+=right_align+'CR # : '+this.invoice.customer.crNumber;
    data+=newLine;
    data+=left_align+'CR # : '+this.invoice.customer.crNumber;
    data+=newLine;
    data+=left_align;
    data+=this.getDateFormated(this.invoice.invoiceDate);
    //data+=right_align;
    data+=left_align;
    data+=this.invoice.invoiceNumber;
    data+=newLine;
    data+=left_align;
    data+='Sales Person : '+       "  Ph : ";
    data+=newLine;
    data+=double_strike_on;
    data+=left_align;
    data+=esc  + '\x01';
    data+=sprintf('%s %-24.25s %13s %7s %12s ','#', 'Items', 'Price','Qty', 'Amount');
   // data+=newLine;
    //data+='#  '+'كمية    سعر   كمية                    العناصر';
    //data+=double_strike_on;
    data+=newLine;
    let counter:number=1;
    for(let itm of this.invoice.invoiceItems){
      data+=esc + '!' + '\x00';
     // data+=counter+'  '+itm.name+'          '+itm.unitPrice+'   '+itm.quantity+'    '+itm.unitPrice*itm.quantity;
     data+=sprintf('%d %-20.20s %9.2f %3.0f %11.2f ',counter, itm.name, itm.unitPrice, itm.quantity, itm.unitPrice*itm.quantity);
     data+=newLine;
      //data+=right_align+itm.nameInArabic;
      //data+=newLine;
      counter=counter+1;
    }
    data+=double_strike_on;
    data+=right_align+'Vat Applied     :'+this.invoice.tax;
    data+=newLine;
    data+=right_align+'Total(Incl VAT) :'+this.invoice.total;
    data+=newLine;
    data+=centerAllign+'THANKS';
    data+=newLine;
    data+=newLine;
    data+=newLine;
    data+=newLine;
    data+=newLine;
    data="Ajay";  
  // data=data+'\x1B' + '\x74' + '\x37' +"اسم";
  /*let result = encoder
    .codepage('win1256')
    .text('اسم')
    .codepage('cp936')
    .text('简体中文')
    .encode();*/
   // this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result);
   /*let result = encoder
   .codepage('windows1251')
   .text('Iñtërnâtiônàlizætiøn')
   .codepage('cp936')
   .text('简体中文')
   .encode()*/
    let buf = iconv.encode("اسم", 'cp864');
    let result=this.getFormatedContent();
   this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result);
   //let d1=iconv.encode("اسم", 'cp864');
   //this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,d1);

   
  // this.printService.printData(this.profile.selectedPrinter,result);
  return this.navCtrl.navigateRoot('invoice');
 }catch(reason){
    this.tostService.presentToast("Print Failed"+reason)
  }
  
}

numericOnly(evt){
  return this.validationService.numericOnly(evt);
}
showInvoice(){
  this.navCtrl.navigateForward("invoice");
}

getDateFormated(todayDate) : string{
  return (todayDate.getFullYear() + '-' + ((todayDate.getMonth() + 1)) + '-' + todayDate.getDate() );
}

getTimeFormated(todayDate) : string{
  return ( ' ' +todayDate.getHours() + ':' + todayDate.getMinutes()+ ':' + todayDate.getSeconds());
}
}
