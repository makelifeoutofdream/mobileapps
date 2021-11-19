import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.page.html',
  styleUrls: ['./newclient.page.scss'],
})
export class NewclientPage implements OnInit {
  private customer : Customer ;
  private inventoryList : Inventory[];
  private personalDetails: boolean ;
  private address : boolean ;
  private contactDetails : boolean;
  private payment : boolean;
  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController) { }

  ngOnInit() {
   this.resetCustomer();
    //this.setCustomerCode();
   
  }
  setCustomerCode(){
    this.dbService.incrementCustomerCode().then(data=>{
      this.dbService.getCustomerCode().then(data=>{
        if(data==null || data==undefined){
          data=1;
        }
        this.customer.code=this.dbService.codeConstant+this.dbService.customerCodeConstant+ data;
      })
    })
    
  }
  ionViewWillEnter(){
    this.personalDetails=false;
    this.address=false;;
    this.contactDetails=false;
    this.payment=false;
    this.setCustomerCode();
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
    })
  }

  resetCustomer(){
    this.customer={id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
      buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
      pobox:"",postalCode:"",phoneNumber:"",mobile:"",email:"",vatNumber:"",crNumber:"",creditLimit:null,balance:null};
  }

  async addNewClient() :Promise<any>{
    this.customer.itemList=this.inventoryList;
    this.dbService.createCustomer(this.customer).then(data=>{
    //  this.dbService.incrementCustomerCode();
      this.tostService.presentToast("Customer added successfully");      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.resetCustomer();
      this.navCtrl.navigateRoot('client');
    });
  } 

  showClient(){
    this.navCtrl.navigateRoot('client');
  }
  expandItem(item){
    if('PERSONAL'==item){
      this.personalDetails=!this.personalDetails;
    }else if('ADDRESS'==item){
      this.address=!this.address;
    }else if('CONTACT'==item){
      this.contactDetails=!this.contactDetails;
    }else if('PAYMENT'==item){
      this.payment=!this.payment;
    }
  }
}
