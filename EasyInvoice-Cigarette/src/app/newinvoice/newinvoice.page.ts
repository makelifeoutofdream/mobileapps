import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image'
import { Buffer } from 'buffer';
import { PrintPreviewComponent } from './print-preview/print-preview.component';
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
    public printService : PrintService,private validationService :ValidationService,public datepipe: DatePipe,public modalController: ModalController,) { 
      
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
  this.products=[];
  this.productsBackup=[];
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
       
          var index = this.customerList.findIndex(i => i.id == this.invoice.customer.id);
        this.invoice.customer.balance=this.invoice.balanceAmount;
        this.dbService.UpdateCustomer(this.invoice.customer);
        
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

  var sellerName=this.getTLVForValue("1",this.profile.companyName);
  var vatNumber=this.getTLVForValue("2",this.profile.vatNumber);
  var timestamp=this.getTLVForValue("3",""+this.invoice.invoiceDate);
  let amt : number =(this.invoice.total-this.invoice.tax);
  var amount=this.getTLVForValue("4",""+amt);
  var vatAmount=this.getTLVForValue("5",""+this.invoice.tax);
  var tagsBufArray=[sellerName,vatNumber,timestamp,amount,vatAmount];
  var qrCodeBuf=Buffer.concat(tagsBufArray);
  var qrCodeBase64=qrCodeBuf.toString('base64');
  return qrCodeBase64;
}

getTLVForValue(tagNum,tagValue){
  var tagBuf=Buffer.from([tagNum]);
  var tagValueLenBuf=Buffer.from([tagValue.length]);
  var tagValueBuf=Buffer.from(tagValue);
  var buffsArray=[tagBuf,tagValueLenBuf,tagValueBuf];
  return Buffer.concat(buffsArray);
}

getFormatedContent(){
  const encoder = new EscPosEncoder();
    let result="";
  let datetime:string =this.invoice.invoiceDate.getDate()+'-'+this.invoice.invoiceDate.getMonth()+'-'+this.invoice.invoiceDate.getFullYear()+' '+this.invoice.invoiceDate.getHours()+':'+this.invoice.invoiceDate.getMinutes()+':'+this.invoice.invoiceDate.getSeconds();
  let billDetails=
  encoder.initialize()
  .bold(true).
  raw([0x1B, 0x21, 0x20]).align('center')
  .line(this.profile.companyName).bold(true).newline().
  
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

async printPreview() {
  let modal = await this.modalController.create({
    component:PrintPreviewComponent,
    componentProps:  {
      profile: this.profile,
      invoice: this.invoice,
      products : this.products
    }
  });
  modal.present();
}

printBill(){
  
//   try{
//   let result=this.getFormatedContent(); 
//    this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result);
  
//   return this.navCtrl.navigateRoot('invoice');
//  }catch(reason){
//     this.tostService.presentToast("Print Failed"+reason)
//   }
//this.getImage();
this.printPreview();

}

async getImage(): Promise<any>{
  var node = document.getElementById("content");
  var img = new Image();
html2canvas(node, {
  allowTaint: true,
  useCORS: true,
  logging: false,
}).then(canvas => {
  var imgData = canvas.toDataURL("image/png");
  let encoder = new EscPosEncoder();
  let result = encoder.initialize();
  let img = new Image();
  img.src = imgData; 
   img.onload  = (e) =>  {
    var ht = Math.ceil(node.offsetHeight / 8) * 8;
    ht = ht + 120;
    result
      .align('left')
      .image(img,520,ht,'threshold',128);
    this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
    console.log('print called');
}
  })
  .catch(function (error) {
    console.error("oops, something went wrong!", error);
  });
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
