import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { stat } from 'fs';
import { start } from 'repl';
import { DataService } from '../data.service';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Invoice } from '../services/invoice';
import { ToastserviceService } from '../services/toastservice.service';

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
  constructor(public dbService : DbService,public toastService : ToastserviceService,
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
    
  }

  
  filterInvoices(){
    var start=new Date(this.startDate);
    var end=new Date(this.endDate);
    if(this.startDate!=null && this.startDate!=undefined){
      
      start=new Date(start.getFullYear(),start.getMonth(),start.getDate());
    }
    if(this.endDate!=null && this.endDate!=undefined){
      end=new Date(end.getFullYear(),end.getMonth(),end.getDate())
    }
    
    
    if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && (this.startDate==null || this.startDate==undefined) && (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=>inv.customer.id==this.selectedCustomer.id);
    }else if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && this.startDate!=null && this.startDate!=undefined && (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=>inv.customer.id==this.selectedCustomer.id && new Date(inv.invoiceDate)>=start);
    }else if(this.selectedCustomer!=null && this.selectedCustomer!=undefined && this.startDate!=null && this.startDate!=undefined &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=>inv.customer.id==this.selectedCustomer.id && new Date(inv.invoiceDate)>=start && new Date(inv.invoiceDate)<=end);
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && this.startDate!=null && this.startDate!=undefined &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=> new Date(inv.invoiceDate)>=start && new Date(inv.invoiceDate)<=end);
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && this.startDate!=null && this.startDate!=undefined &&  (this.endDate==null || this.endDate==undefined)){
      this.filterInvoiceList= this.invoiceList.filter(inv=> new Date(inv.invoiceDate)>=start);
    }else if((this.selectedCustomer==null || this.selectedCustomer==undefined) && (this.startDate==null || this.startDate==undefined) &&  this.endDate!=null && this.endDate!=undefined){
      this.filterInvoiceList= this.invoiceList.filter(inv=> new Date(inv.invoiceDate)<=end );
    }else{
      this.filterInvoiceList=this.invoiceList;
    }

    
  }

  download(){
    let invoiceDataList=new Array();
    for(let inv of this.invoiceList){
      for(let itm of inv.invoiceItems){
        let invoiceData ={InvoiceNumber : inv.invoiceNumber,InvoiceDate:inv.invoiceDate,Customer:inv.customer.name,Item:itm.name,UnitPrice:itm.unitPrice,Quantity:itm.quantity,Tax:inv.tax,Total:inv.total};
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

}
