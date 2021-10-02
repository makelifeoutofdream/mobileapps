import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    public navCtrl:NavController,private dataService : DataService) { }

  ngOnInit() {
  }

  addNewInvoice(){
    
    this.navCtrl.navigateRoot('newinvoice');
  }

  getAllInvoices(){
    this.dbService.getAllInvoices().then(data=>{
      this.invoiceList=data ;
    }).catch(reason=>{
      this.toastService.presentToast("Failed to fetch invoices");
      console.log(reason);
    })
  }
  ionViewWillEnter(){
    this.getAllInvoices();
  }

  download(){
    this.prepareDataForDownload().then(data=>{
      this.dataService.exportToExcel(data,'Invoices');
    })
  }

  async prepareDataForDownload() : Promise<any>{
      let downloadList =new Array();
    
    for(let inv of this.invoiceList){
        for(let item of inv.invoiceItems){
          let invoiceDownload : any={
            Date : Date,Invoice_Number : String,Item_Name : String,
            Unit_Price : Number,Quantity : Number,Customer : String,
            Tax : Number,Total : Number
          };
          invoiceDownload.Date=inv.invoiceDate;
          invoiceDownload.Invoice_Number=inv.invoiceNumber;
          invoiceDownload.Item_Name=item.name;
          invoiceDownload.Unit_Price=item.unitPrice;
          invoiceDownload.Quantity=item.quantity;
          invoiceDownload.Customer=inv.customer.name;
          invoiceDownload.Tax=inv.tax;
          invoiceDownload.Total=inv.total;
          downloadList.push(invoiceDownload);
        }
      

    }
    return downloadList;
  }
  
}
