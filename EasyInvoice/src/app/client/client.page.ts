import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  private customers : Customer[];
  private customer : Customer;
  private inventoryList : Inventory [];
  constructor(public navCtrl:NavController,public dbService:DbService,
    public tostService : ToastserviceService) { }

  ngOnInit() {
    console.log("init called");
    this.customers=[];
  }

  addNewClient(){
    
    this.navCtrl.navigateRoot('newclient');
  }

  ionViewWillEnter(){
    this.dbService.getAllCustomers().then(data=>{
      this.customers=data;
    }).catch(reason=>{
      console.log(reason);
      this.tostService.presentToast("Failed to fetch the customers"); 
    })
  }

  async getSelectedCustomer(name) : Promise<Customer>{
    return this.customers.find(cus=>cus.name==name);
  }
  async populateCustomerItems (name): Promise<Customer>{
    this.customer=await this.getSelectedCustomer(name);
    this.inventoryList=await this.dbService.getAllInventories();
    if(this.customer.itemList==null || this.customer.itemList==undefined){
      this.customer.itemList=new Array();
    }
    this.customer=await this.setItemsToCustomer();
    return this.customer;
  }

  async setItemsToCustomer() : Promise<Customer>{
    for(let inv of this.inventoryList){
     
        if(this.customer.itemList.find(it=>it.name==inv.name)==null || this.customer.itemList.find(it=>it.name==inv.name)==null){
          this.customer.itemList.push(inv);
        }
    }
    return this.customer;
  }
  async editCustomer(name){
    this.customer=await this.populateCustomerItems(name);
    let navigationExtras : NavigationExtras ={
          queryParams : {customer : this.customer}
    };
  this.navCtrl.navigateRoot('editclient',navigationExtras);    
  }
}
