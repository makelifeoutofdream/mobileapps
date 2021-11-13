import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Supplier } from '../services/supplier';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.page.html',
  styleUrls: ['./supplier.page.scss'],
})
export class SupplierPage implements OnInit {
  private suppliers : Supplier[];
  private supplier : Supplier;
  private personalDetails: boolean ;
  private address : boolean ;
  private contactDetails : boolean;
  private payment : boolean;
  constructor(private dbService : DbService,private toastService : ToastserviceService,public navCtrl:NavController) { }

  ngOnInit() {
    this.resetSupplier();
    this.suppliers=[];
  }

  resetSupplier(){
    this.supplier= {id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
    buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
    pobox:"",postalCode:"",phoneNumber:"",mobileNumber:"",email:"",vatNumber:"",crNumber:"",balanceAmount:null};
  }

  ionViewWillEnter(){

    this.personalDetails=false;
    this.address=false;;
    this.contactDetails=false;
    this.payment=false;
    this.dbService.getSupplierCode().then(data=>{
      this.supplier.code=data;
    })
    this.dbService.getAllSuppliers().then(data=>{
      this.suppliers=data;
      
    }).catch(reason=>{
      console.log(reason);
      this.toastService.presentToast("Failed to fetch the suppliers"); 
    })
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

  addNewSupplier(){
    
    this.navCtrl.navigateRoot('newsupplier');
  }

  async editSupplier(name){
    this.supplier=this.suppliers.find(sup=>sup.name==name);

    let navigationExtras : NavigationExtras ={
          queryParams : {supplier : this.supplier}
    };
    console.log("selected supplier"+this.supplier);
  this.navCtrl.navigateRoot('editsupplier',navigationExtras);    
  }

}
