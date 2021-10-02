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
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.page.html',
  styleUrls: ['./newinvoice.page.scss'],
})
export class NewinvoicePage implements OnInit {
  private invoice : Invoice;
  private customerList:Customer[];
  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController,
    public printService : PrintService) { }

  ngOnInit() {
    this.invoice={invoiceNumber : "",invoiceDate: new Date() ,
    customer : {contactPersonName : "",location  : "",name : "",vat:null,itemList : null},invoiceItems : [],
  total:null,tax:null} 
}


ionViewWillEnter(){
  this.resetInvoiceForm();
}

resetInvoiceForm(){

  let inventory ;
  this.invoice=new Invoice();
  this.invoice.invoiceDate=new Date();
  this.invoice.invoiceItems=new Array();
  this.dbService.getInvoiceNumber().then(data=>{
    this.invoice.invoiceNumber=data;
  });
  this.dbService.getAllInventories().then(data=>{
    for(let inv of data){
      inventory={name : inv.name,unitPrice : inv.unitPrice,billingUnitPrice:null,quantity:null,InvoiceItem:[]};
      this.invoice.invoiceItems.push(inventory);
    }
    this.dbService.getAllCustomers().then(data=>this.customerList=data);
  }).catch(reason=>{
    console.log(reason);
    this.tostService.presentToast("Failed to fetch the inventory items"); 
  })
}
  
calculateInvoiceTotal(){
  this.invoice.total=0;
  let selectedItems : InvoiceItem[]=this.invoice.invoiceItems.filter(l=>l.selected);
  if(undefined==this.invoice.total || null==this.invoice.total){
    this.invoice.total=0;
  }
  for(let itm of selectedItems){
    this.invoice.total=this.invoice.total+ (itm.unitPrice*itm.quantity);
  }
  //apply vat
  this.invoice.tax=(this.invoice.customer.vat*this.invoice.total)/100;
  this.invoice.total=this.invoice.total+this.invoice.tax;
  
}

submitBill(){
  this.dbService.createOrUpdateInvoice(this.invoice).then(data=>{
    this.tostService.presentToast("Bill submitted successfully");
    this.dbService.incrementInvoiceNumber().then(data=>{
      this.invoice.invoiceNumber=data;
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
}
