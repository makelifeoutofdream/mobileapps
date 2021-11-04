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
  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController,
    public printService : PrintService,private validationService :ValidationService) { }

  ngOnInit() {
    this.invoice={id:null, invoiceNumber : "",invoiceDate: new Date() ,invoiceDateString : "",
    customer : {id: null, contactPersonName : "",location  : "",name : "",vat:null,itemList : null},invoiceItems : [],
  total:null,tax:null} 
}


ionViewWillEnter(){
  this.applyVat=true;
  this.dbService.getProfile().then(data=>{
    this.profile=data;
  });
  this.resetInvoiceForm();
}


async filterProducts(evt) {
  this.product={id: null, name: "",unitPrice : null,billingUnitPrice:null,quantity:null,selected:null,purchaseUnitPrice:null};
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
}

resetInvoiceForm(){
  this.productsBackup=new Array();
  this.products=new Array();
  
  this.invoice=new Invoice();
  this.dbService.incrementInvoiceNumber().then(data=>{
    this.invoice.invoiceNumber=data;
  });

  this.invoice.invoiceDate=new Date();
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
      inventory={id: inv.id, name : inv.name,unitPrice : inv.unitPrice,billingUnitPrice:null,quantity:null,InvoiceItem:[],purchasePrice:inv.purchasePrice};
        this.products.push(inventory);
        this.productsBackup.push(inventory);
    }
  }
  
}

calculateInvoiceTotal(evt){
  this.invoice.total=0;
  if(undefined==this.invoice.total || null==this.invoice.total){
    this.invoice.total=0;
  }
  for(let itm of this.invoice.invoiceItems){
    this.invoice.total=this.invoice.total+ (itm.unitPrice*itm.quantity);
  }
  //apply vat
  if(this.applyVat){
    if(this.profile!=null && this.profile!=undefined && this.profile.vat!=null && this.profile.vat!=undefined){
      this.invoice.tax=(this.profile.vat*this.invoice.total)/100;
      this.invoice.total=this.invoice.total+this.invoice.tax;
    }
  
  }
  
  
}

submitBill(){
  this.invoice.invoiceDate.setHours(0,0,0,0);
  this.dbService.createOrUpdateInvoice(this.invoice).then(data=>{
    this.dbService.getAllInventories().then(stocks=>{
      let stockList=stocks;
      for(let itm of this.invoice.invoiceItems){
        var index = stockList.findIndex(i => i.id == itm.id);
        stockList[index].quantity=stockList[index].quantity-itm.quantity;
      }
      this.dbService.saveAllInventories(stockList).then(res=>{
        this.tostService.presentToast("Bill submitted successfully");
        this.navCtrl.navigateRoot('invoice');
      })
    });
  }).catch(reason=>{
    this.tostService.presentToast("Failed to submit bill");
    console.log(reason);
  })
}

printBill(){
  let data='---------------------RECEIPT-----------------------\n\n\nDate :'+this.invoice.invoiceDate+'\nInvoice Number :'+this.invoice.invoiceNumber+'\nCustomer:'+this.invoice.customer+'/n/n';
  for(let itm of this.invoice.invoiceItems){
    data=data+'Item Name :'+itm.name+'  Price :'+itm.unitPrice+'  Quantity :'+itm.quantity;
  }
  data=data+'-----------------------------------------------------------------------';
  data=data+'\n Vat Applied :'+this.invoice.customer.vat;
  data=data+'\n Total :'+this.invoice.total;
  this.printService.sendToBluetoothPrinter(this.printService.selectedPrinter,data);
}

numericOnly(evt){
  return this.validationService.numericOnly(evt);
}
}
