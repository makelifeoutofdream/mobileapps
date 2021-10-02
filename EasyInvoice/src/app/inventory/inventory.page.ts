import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  private inventories : Inventory [];
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController) { }

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
    this.getAllInventories();
  }
}
