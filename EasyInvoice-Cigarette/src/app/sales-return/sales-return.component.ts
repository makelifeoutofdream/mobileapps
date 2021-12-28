import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { PrintPreviewComponent } from '../newinvoice/print-preview/print-preview.component';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Profile } from '../services/profile';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss'],
})
export class SalesReturnComponent implements OnInit {

   invoiceNo: FormControl = new FormControl();
   invoiceSummary: any;
   checked: any[] =  [];
   customerList: Customer[];
   profile: Profile;


  constructor(private dbService: DbService, public tostService:ToastserviceService, public navCtrl:NavController,
    public modalController: ModalController) { }

  ngOnInit() {
    this.dbService.getAllCustomers().then((data) => this.customerList = data);
    this.dbService.getProfile().then((data) => {
      this.profile = data;
    });
  }

  getInvoiceByID() {
      this.dbService.getInvoiceByID(this.invoiceNo.value).then((invoice) => {
          this.invoiceSummary = invoice;
          this.dbService.incrementCreditNumber().then(data=>{
            if(data == null || data == undefined){
              data = 1;
            }
            this.invoiceSummary.invoiceNumber = this.dbService.codeConstant + this.dbService.creditCode + data;
            this.invoiceSummary.invoiceDate = new Date();
          });
      }).catch((error)  => {
          alert("Invoice not found!!");
      });
  }

  calculateBalAmount(item) {
    item.balanceAmount +=  (item.quantity * item.purchasePrice);
  }


  submitBill() {
    this.dbService.createCredit(this.invoiceSummary).then((data) => {
      this.dbService.getAllInventories().then((stocks) => {
        let stockList = stocks;
        for(let itm of this.invoiceSummary.invoiceItems){
          var index = stockList.findIndex(i => i.id == itm.id);
          stockList[index].quantity=stockList[index].quantity + itm.quantity;
        }
        this.dbService.saveAllInventories(stockList).then(res=>{
          this.invoiceSummary.customer.balance=this.invoiceSummary.balanceAmount;
          this.dbService.UpdateCustomer(this.invoiceSummary.customer);
          this.tostService.presentToast("Bill submitted successfully");
          
        })
      });
    }).catch(reason=>{
      this.tostService.presentToast("Failed to submit bill");
      console.log(reason);
    })
  }

  printBill() {
      this.printPreview();
  }

  async printPreview() {
    this.invoiceSummary.orderItems = this.invoiceSummary.invoiceItems;
    let modal = await this.modalController.create({
      component:PrintPreviewComponent,
      componentProps:  {
        profile: this.profile,
        invoice: this.invoiceSummary,
        products : this.invoiceSummary ? this.invoiceSummary.invoiceItems : []
      }
    });
    modal.onDidDismiss().then(()  => {
        // this.navCtrl.navigateRoot('invoice');
        this.invoiceNo.setValue(null);
        this.invoiceNo.updateValueAndValidity();
        this.invoiceSummary = null;
    });
   
    modal.present();
  }
  

}
