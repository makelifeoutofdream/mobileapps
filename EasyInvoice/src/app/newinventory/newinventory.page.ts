import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public navCtrl:NavController,private route : ActivatedRoute) { }

  ngOnInit() {
    this.inventory={id:null,code:"",name : "",nameInArabic:"",description:"",quantity:null,unitPrice:null,purchasePrice:null};
  }

  async addNewInventory():Promise<any>{
    this.dbService.createOrUpdateInventory(this.inventory).then(data=>{
      if(this.inventory.id==null || this.inventory.id==undefined){
        console.log("Item added successfully");
      }else{
        console.log("Item updated successfully");
      }
      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.inventory={id:null,code:"",name : "",nameInArabic:"",description:"",quantity:null,unitPrice:null,purchasePrice:null};
      this.navCtrl.navigateRoot('inventory');
    });
  }

  showInventory(){
    this.navCtrl.navigateRoot('inventory');
  
  }

  ionViewWillEnter(){
    
    this.route.queryParams.subscribe(params=>{
      if(params['inventory']==null || params['inventory']==undefined){
        this.inventory={id : null,code:"",name:"",nameInArabic:"",description:"",quantity:null,unitPrice:null,purchasePrice:null};
        this.dbService.incrementInventoryCode().then(data=>{
          this.dbService.getInventoryCode().then(data=>{
            if(data==null || data==undefined){
              data=1;
            }
            this.inventory.code=this.dbService.codeConstant+this.dbService.inventoyCodeConstant+data;
          }) ;
        })
               
      }else{
        this.inventory=params['inventory'];
      }
      
    })
    console.log('selected inventory'+this.inventory.name);
  }
}
