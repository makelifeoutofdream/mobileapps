import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { ToastserviceService } from '../services/toastservice.service';


@Component({
  selector: 'app-newinventory',
  templateUrl: './newinventory.page.html',
  styleUrls: ['./newinventory.page.scss'],
})
export class NewinventoryPage implements OnInit {
  private inventory : Inventory;
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController) { }

  ngOnInit() {
    this.inventory={name : "",description:"",quantity:null,unitPrice:null};
  }

  async addNewInventory():Promise<any>{
    this.dbService.createOrUpdateInventory(this.inventory).then(data=>{
      console.log("Item added successfully");
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.inventory={name : "",description:"",quantity:null,unitPrice:null};
      this.navCtrl.navigateRoot('inventory');
    });
  }
}
