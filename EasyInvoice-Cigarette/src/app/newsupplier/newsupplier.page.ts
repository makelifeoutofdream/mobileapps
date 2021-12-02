import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Supplier } from '../services/supplier';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-newsupplier',
  templateUrl: './newsupplier.page.html',
  styleUrls: ['./newsupplier.page.scss'],
})
export class NewsupplierPage implements OnInit {

  private personalDetails: boolean ;
  private address : boolean ;
  private contactDetails : boolean;
  private payment : boolean;
  private supplier : Supplier;
  private inventoryList : Inventory[];
  constructor(private dbService : DbService,private toastService : ToastserviceService,public navCtrl:NavController) { }

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
    this.dbService.incrementSupplierCode().then(data=>{
      this.dbService.getSupplierCode().then(data=>{
        if(data==null || data==undefined){
          data=1;
        }
        this.supplier.code=this.dbService.codeConstant+this.dbService.supplierCodeConstant+ data;
      })
    })
    
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
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

  async addNewSupplier() :Promise<any>{
    this.supplier.itemList=this.inventoryList;
    this.dbService.createSupplier(this.supplier).then(data=>{
      this.dbService.incrementSupplierCode();
      this.toastService.presentToast("Supplier added successfully");      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.resetSupplier();
      this.navCtrl.navigateRoot('supplier');
    });
  } 

  showSupplier(){
    this.navCtrl.navigateRoot('supplier');
  }

}
