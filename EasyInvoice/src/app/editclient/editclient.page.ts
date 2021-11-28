import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { ToastserviceService } from '../services/toastservice.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../services/customer';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.page.html',
  styleUrls: ['./editclient.page.scss'],
})
export class EditclientPage implements OnInit {
  customer : Customer ;
  cusList : Customer[];
  private personalDetails: boolean ;
  private address : boolean ;
  private contactDetails : boolean;
  private payment : boolean;
  private items : boolean;
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController , private route : ActivatedRoute) { }

  ngOnInit() {
    this.customer={id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
    buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
    pobox:"",postalCode:"",phoneNumber:"",mobile:"",email:"",vatNumber:"",crNumber:"",creditLimit:null,balance:null};
  }
  ionViewWillEnter(){
    this.personalDetails=false;
    this.address=false;
    this.contactDetails=false;
    this.payment=false;
    this.items=false;
    this.route.queryParams.subscribe(params=>{
      this.customer=params['customer'];
    })
    this.customer.balance=Math.round((this.customer.balance + Number.EPSILON) * 100) / 100;
    console.log('selected customer'+this.customer.name);
  }

  updateClient(){
    
    this.dbService.UpdateCustomer(this.customer).then(res=>
      {
        this.toastService.presentToast("Customer updated successfully");
        this.navCtrl.navigateRoot('client');
  })
    .catch(reason=>{
      this.toastService.presentToast("Customer update failed");
      console.log(reason);
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
    }else if('ITEMS'==item){
      this.items=!this.items
    }
  }
  showClient(){
    this.navCtrl.navigateForward('client');
  }
}
