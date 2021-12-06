import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { stat } from 'fs';
import { start } from 'repl';
import { filter } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Invoice } from '../services/invoice';
import { ToastserviceService } from '../services/toastservice.service';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { Profile } from '../services/profile';
import {sprintf} from "sprintf-js";
import { PrintService } from '../services/print.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  selectedCustomer : Customer;
  startDate : Date;
  endDate :Date;
  invoiceList : Invoice [] ;
  filterInvoiceList : Invoice [];
  customerList : Customer [];
  header : string [];
  private profile : Profile;
  constructor(public dbService : DbService,public toastService : ToastserviceService,private printService : PrintService,
    public navCtrl:NavController,private dataService : DataService) { }

  ngOnInit() {
    this.customerList=[];
  }

  addNewInvoice(){
    
    this.navCtrl.navigateForward('newinvoice');
  }

  getAllInvoices(){
    this.dbService.getAllInvoices().then(data=>{
      this.invoiceList=data ;
      this.filterInvoices();
    }).catch(reason=>{
      this.toastService.presentToast("Failed to fetch invoices");
      console.log(reason);
    })
  }
  getAllCustomers(){
    this.dbService.getAllCustomers().then(data=>this.customerList=data);
  }
  ionViewWillEnter(){
    this.header=[];
    this.header.push('Inv No');
    this.header.push('Customer');
    this.header.push('Total');
    this.startDate=null;
    this.endDate=null;
    this.getAllInvoices();
    this.getAllCustomers();
    this.dbService.getProfile().then(data=>{
      this.profile=data;
    });
    
  }

  
  filterInvoices(){
    var start=new Date(this.startDate);
    
    var end=new Date(this.endDate);
    
    if(this.startDate!=null && this.startDate!=undefined){
      
      start=new Date(start.getFullYear(),start.getMonth(),start.getDate());
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
    }
    if(this.endDate!=null && this.endDate!=undefined){
      end=new Date(end.getFullYear(),end.getMonth(),end.getDate())
      end.setHours(23);
      end.setMinutes(23);
      end.setSeconds(23);
    }
    
    if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && (this.startDate==null || this.startDate==undefined) && (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=>inv.customer.id==this.selectedCustomer.id);
    }else if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && this.startDate!=null && this.startDate!=undefined && (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=>inv.customer.id==this.selectedCustomer.id && new Date(inv.invoiceDate)>=start);
    }else if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && this.startDate!=null && this.startDate!=undefined &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=>{
        var date=new Date(inv.invoiceDate);
        date.setHours(1);
        date.setMinutes(1);
        date.setSeconds(1);
       return  inv.customer.id==this.selectedCustomer.id && date.getTime()>=start.getTime() && date.getTime()<=end.getTime();
      });
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && this.startDate!=null && this.startDate!=undefined &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=>{
        var date=new Date(inv.invoiceDate);
        date.setHours(1);
        date.setMinutes(1);
        date.setSeconds(1);
        console.log('date '+date.getTime());
        console.log('start '+start.getTime());
        console.log('end '+end.getTime());
        return date.getTime()>=start.getTime() && date.getTime()<=end.getTime();
      } )
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && this.startDate!=null && this.startDate!=undefined &&  (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=> new Date(inv.invoiceDate)>=start);
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && (this.startDate==null || this.startDate==undefined) &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=> new Date(inv.invoiceDate)<=end );
    }else{
      this.filterInvoiceList=this.invoiceList;
    }

    
  }

  totalTax(invoices: any[]): number{
    if(this.filterInvoiceList!=null && this.filterInvoiceList!=undefined && this.filterInvoiceList.length){
      return this.filterInvoiceList.map(itm=>itm.tax).reduce((acc, nxt) => acc + nxt);
    }
  }

  sum(invoices: any[]): number {
    if(this.filterInvoiceList!=null && this.filterInvoiceList!=undefined && this.filterInvoiceList.length){
      return this.filterInvoiceList.map(itm=>itm.total).reduce((acc, nxt) => acc + nxt);
    }
    
 }
  download(){
    let invoiceDataList=new Array();
    for(let inv of this.invoiceList){
      for(let itm of inv.invoiceItems){
        let invoiceData ={InvoiceNumber : inv.invoiceNumber,InvoiceDate:inv.invoiceDate,Customer:inv.customer.name,Item:itm.name,UnitPrice:itm.unitPrice,Quantity:itm.quantity,Cost:itm.purchaseUnitPrice,TotalCost:itm.purchaseUnitPrice*itm.quantity,Tax:inv.tax,GP:(itm.quantity*itm.unitPrice) -(itm.purchaseUnitPrice*itm.quantity),TotalWithVAT:inv.total};
        invoiceDataList.push(invoiceData);
      }
      
    } 
     // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');
     this.dataService.exportToExcel(invoiceDataList,'invoices.xlsx');
     
    
  }

  viewInvoice(invoice : Invoice){
    let navigationExtras : NavigationExtras ={
      queryParams : {invoice : invoice}
};
console.log("selected invoice"+invoice.invoiceNumber);
this.navCtrl.navigateRoot('viewinvoice',navigationExtras);    
}


getFormatedContent(){
  const encoder = new EscPosEncoder();
  
  let grossTax=this.totalTax(this.filterInvoiceList);
  let total=this.sum(this.filterInvoiceList);
  let grossTotal=total-grossTax;
  var today=new Date();
  let datetime:string =today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
  let result=encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().
  raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : '+ this.profile.vatNumber+','+'CR # : '+this.profile.crNumber).
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).
  align('left').line('Print Generated At :'+datetime).
  align('left').line('Date Range : '+this.startDate + 'To '+this.endDate).
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).
  align('left').line('Gross Total(Excl.VAT) '+sprintf('%11.2f',grossTotal)).
  align('left').line('Total VAT('+this.profile.vat+') '+sprintf('%11.2f',grossTax)).
  align('left').line('Total '+sprintf('%11.2f',total)).
  align('left').bold(true).line('---------------------------------------------------------------').bold(true).encode();

return result;
}

printBill(){
  try{
  this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,this.getFormatedContent());
  
 }catch(reason){
    this.toastService.presentToast("Print Failed"+reason)
  }
  
}


}
