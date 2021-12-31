import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
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
  isSubmitted: any =false;

  

  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController,
    public printService : PrintService,private validationService :ValidationService,
    public datepipe: DatePipe,public modalController: ModalController,public alertController: AlertController) { 
      
    }

    ngOnInit() {
      this.invoice = this.getInvoiceData(); 
    }

  getInvoiceData() {
    return {
      id:null, 
      invoiceNumber : "",
      invoiceDate: new Date() ,
      invoiceDateString : "",
      amountPaid:0,
      balanceAmount:0,
      customer :  {  
        id:null,
        code:null,
        name : "" ,
        itemList : null,
        nameInArabic : "",
        contactPersonName: "",
        contactPersonNameInArabic:"",
        buildingNumber:"",
        street:"",
        streetInArabic:"",
        city:"",
        cityInArabic:"",
        district:"",
        districtInArabic:"",
        country:"",
        countryInArabic:"",
        pobox:"",
        postalCode:"",
        phoneNumber:"",
        mobile:"",
        email:"",
        vatNumber:"",
        crNumber:"",
        creditLimit:0,
        balance:0
      },
    invoiceItems : [],
    total:null,
    tax:null,
    isNewInvoice: false
  } 
}


  ionViewWillEnter(){
    this.showTable = false;
    this.applyVat = true;
    this.dbService.getProfile().then(data=>{
      this.profile = data;
    });
    this.resetInvoiceForm();
  }


  async filterProducts(evt) {
    this.product = {
      id: null, 
      name: "",
      nameInArabic:"",
      unitPrice : null,
      billingUnitPrice:null,
      quantity:null,
      balanceQuantity:null,
      displayBalanceQuantity:null,
      selected:null,
      purchaseUnitPrice:null
    };
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
    if (this.invoice.invoiceItems!=null && this.invoice.invoiceItems!=undefined && this.invoice.invoiceItems.length>0) {
      this.showTable=true;
    } else {
      this.showTable=false;
    }
  }

  resetInvoiceForm(){
    this.productsBackup=new Array();
    this.products=new Array();
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
    });
    this.invoice = this.getInvoiceData();
    this.invoice.invoiceItems=new Array();
    this.selectedProducts=new Array();
    //this.dbService.getInvoiceNumber().then(data=>{
      //this.invoice.invoiceNumber=data;
    //});
    this.dbService.getAllCustomers().then(data=>this.customerList=data);
    this.dbService.incrementInvoiceNumber().then(data=>{
      if(data==null || data==undefined){
        data=1;
      }
      this.invoice.invoiceNumber=this.dbService.codeConstant+this.dbService.invoiceCodeConstant+ data;  
    });  
  }
  
  populateCustomerProducts(){
    this.products=[];
    this.productsBackup=[];
    if(this.invoice.customer!=null && this.invoice.customer!=undefined && this.invoice.customer.itemList!=null && this.invoice.customer.itemList!=undefined){
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
      if(this.products!=null && this.products!=undefined && this.products.length>0) {
        this.showTable=true;
       } else {
          this.showTable=false;
       }
      // if (this.customerList)
    }
    console.log(this.invoice);
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
       this.isSubmitted = true;
        
        //this.navCtrl.navigateRoot('invoice');
      })
    });
  }).catch(reason=>{
    this.tostService.presentToast("Failed to submit bill");
    console.log(reason);
  })
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
      modal.onDidDismiss().then(()  => {
          this.navCtrl.navigateRoot('invoice');
      });
    
      modal.present();
    }

    async doSubmitBill() {
      const alert = await this.alertController.create({
        cssClass: 'confirm-dialog',
        header: 'Submit Invoice',
        message: 'Invoice cannot be modified once submitted. Do you wish to submit the invoice?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              alert.dismiss();
            }
          }, {
            text: 'Submit',
            handler: () => {
              this.submitBill();
            }
          }
        ]
      });
      await alert.present();
    }

    printBill(){
      this.printPreview();
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
