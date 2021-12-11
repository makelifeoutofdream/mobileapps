import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Customer } from '../services/customer';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Profile } from '../services/profile';
import { ToastserviceService } from '../services/toastservice.service';
import { StockprintComponent } from './stockprint/stockprint.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  private inventories : Inventory [];
  private profile : Profile;
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController,public alertController: AlertController,public modalController: ModalController) { }

  ngOnInit() {
  }

  addNewInventory(){
    
    this.navCtrl.navigateRoot('newinventory');
  }

  async getAllInventories() : Promise<any>{
    this.dbService.getAllInventories().then(data=>{
      this.inventories=data;
    }).catch(reason=>{
      console.log(reason);
    })
  }

  ionViewWillEnter(){
    this.dbService.getProfile().then(data=>{
      this.profile=data;
    });
    this.getAllInventories();
  }

  editInventory(inv){
    let navigationExtras : NavigationExtras ={
      queryParams : {inventory : inv}
    };
  console.log("selected inventory"+inv);
  this.navCtrl.navigateRoot('newinventory',navigationExtras);    
  }

  deleteInventory(inv){
    this.dbService.deleteInventory(inv).then(data=>{
      this.toastService.presentToast('Inventory removed successfully');
      this.getAllInventories().then(data=>{
        this.updateInventoryToCustomers();
      })
  });
}

updateInventoryToCustomers(){
    this.dbService.getAllInventories().then(invList=>{

      this.dbService.getAllCustomers().then(data=>{
        let cusList : Customer=data;
        for(let cus of data){
          cus.itemList=invList;
          this.dbService.UpdateCustomer(cus);
        }
      })
    })
    
  }

  async presentDeleteAlertConfirm(inv : Inventory) {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure to delete this inventory?</strong>!!!',
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
            this.deleteInventory(inv);
          }
        }
      ]
    });
  
    await alert.present();
  }

print() {
  this.printPreview();
} 
async printPreview() {
  let modal = await this.modalController.create({
    component:StockprintComponent,
    componentProps:  {
      profile: this.profile,
      stockList: this.inventories
    }
  });
  modal.present();
}


}
