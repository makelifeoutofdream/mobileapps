import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Supplier } from '../services/supplier';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-editsupplier',
  templateUrl: './editsupplier.page.html',
  styleUrls: ['./editsupplier.page.scss'],
})
export class EditsupplierPage implements OnInit {

  private personalDetails: boolean ;
  private address : boolean ;
  private contactDetails : boolean;
  private payment : boolean;
  private supplier : Supplier;
  private inventoryList : Inventory[];
  constructor(private dbService : DbService,private toastService : ToastserviceService,public navCtrl:NavController,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.resetSupplier();
    this.personalDetails=false;
    this.address=false;;
    this.contactDetails=false;
    this.payment=false;
    this.dbService.getSupplierCode().then(data=>{
      this.supplier.code=data;
    })
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
    })
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
    this.route.queryParams.subscribe(params=>{
      this.supplier=params['supplier'];
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

  async saveSupplier() :Promise<any>{
    this.supplier.itemList=this.inventoryList;
    this.dbService.UpdateSupplier(this.supplier).then(data=>{
      this.toastService.presentToast("Supplier added successfully");      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.resetSupplier();
      this.navCtrl.navigateRoot('supplier');
    });
  } 


}
