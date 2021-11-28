import { AbstractType, Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { InvoiceItem } from '../services/invoiceitem';
import { Purchase } from '../services/purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {

  private purchaseList : Purchase[];
  private purchase : Purchase;
  constructor(private dbService:DbService,public navCtrl:NavController) { }

  ngOnInit() {
    this.dbService.getAllPurchases().then(data=>{
      this.purchaseList=data;
    });
  }

  ionViewWillEnter(){
    this.dbService.getAllPurchases().then(data=>{
      this.purchaseList=data;
    });
   
  }

  addNewPurchase(){
    this.navCtrl.navigateRoot('newpurchase');
  }
 
  async editPurchase(id){
    this.purchase=this.purchaseList.find(pur=>pur.id==id);

    let navigationExtras : NavigationExtras ={
          queryParams : {purchase : this.purchase}
    };
  console.log("purchase clicked "+this.purchase.poNumber);
  this.navCtrl.navigateRoot('editpurchase',navigationExtras);    
  }
}
