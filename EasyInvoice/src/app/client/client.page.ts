import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
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
    public tostService : ToastserviceService,public alertController: AlertController,private dataService : DataService) { }

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
     
        if(this.customer.itemList.find(it=>it.id==inv.id)==null || this.customer.itemList.find(it=>it.id==inv.id)==null){
          this.customer.itemList.push(inv);
        }else{
          var index = this.customer.itemList.findIndex(i => i.id == inv.id);
          this.customer.itemList[index].name=inv.name;
          this.customer.itemList[index].description=inv.description;
          this.customer.itemList[index].purchasePrice=inv.purchasePrice;
        }
    }
    return this.customer;
  }
  async editCustomer(name){
    this.customer=await this.populateCustomerItems(name);
    let navigationExtras : NavigationExtras ={
          queryParams : {customer : this.customer}
    };
    console.log("selected customer"+this.customer);
  this.navCtrl.navigateRoot('editclient',navigationExtras);    
  }
deleteCustomer(cus : Customer){
  
    this.dbService.deleteCustomer(cus).then(data=>{
      this.tostService.presentToast('Customer removed successfully');
      this.dbService.getAllCustomers().then(data=>{
        this.customers=data;
      })
  });

}
async presentDeleteAlertConfirm(cus : Customer) {
  const alert = await this.alertController.create({
   // cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: '<strong>Are you sure to delete this customer?</strong>!!!',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.deleteCustomer(cus);
        }
      }
    ]
  });

  await alert.present();
}

download(){
  let customerDataList=new Array();
  for(let inv of this.customers){
   
      let cusData ={Name : inv.name,ContactPerson:inv.contactPersonName,Mobile:inv.mobile,Balance:inv.balance};
      customerDataList.push(cusData);
    
    
  } 
   // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');
   this.dataService.exportToExcel(customerDataList,'customers.xlsx');
   
  
}

}


