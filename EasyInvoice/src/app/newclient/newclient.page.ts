import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.page.html',
  styleUrls: ['./newclient.page.scss'],
})
export class NewclientPage implements OnInit {
  private customer : Customer ;
  constructor(public dbService:DbService,public tostService:ToastserviceService,public navCtrl:NavController) { }

  ngOnInit() {
    this.customer={name : "" ,location : "",contactPersonName : "",vat : null,itemList:null};
  }

  async addNewClient() :Promise<any>{
    this.dbService.createCustomer(this.customer).then(data=>{
      this.tostService.presentToast("Customer added successfully");      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.customer={name : "" ,location : "",contactPersonName : "",vat : null,itemList : null};
      this.navCtrl.navigateRoot('client');
    });
  } 
}
