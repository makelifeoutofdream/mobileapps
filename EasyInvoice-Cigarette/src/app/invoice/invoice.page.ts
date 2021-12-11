import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { DbService } from '../services/db.service';
import { Invoice } from '../services/invoice';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  invoiceList : Invoice [] ;
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController,private dataService : DataService,public alertController: AlertController) { }

  ngOnInit() {
  }

  addNewInvoice(){
    
    this.navCtrl.navigateRoot('newinvoice');
  }

  getAllInvoices(){
    this.dbService.getAllInvoices().then(data=>{
      this.invoiceList=data ;
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      this.invoiceList= this.invoiceList.filter(a=> new Date(a.invoiceDate)>=today);
    }).catch(reason=>{
      this.toastService.presentToast("Failed to fetch invoices");
      console.log(reason);
    })
  }
  ionViewWillEnter(){
    this.getAllInvoices();
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

 


  
}
