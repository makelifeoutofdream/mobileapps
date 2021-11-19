import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Purchase } from '../services/purchase';
import { PurchaseItem } from '../services/PurchaseItem';
import { ToastserviceService } from '../services/toastservice.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-newpurchase',
  templateUrl: './newpurchase.page.html',
  styleUrls: ['./newpurchase.page.scss'],
})
export class NewpurchasePage implements OnInit {
  private supplierList : any;
  private product : Inventory;
  private products : Inventory[];
  private selectedProducts : Inventory[];
  private purchase : Purchase;
  private showTable=false;
  constructor(private dbService:DbService,public navCtrl:NavController, public tostService:ToastserviceService,private validationService :ValidationService )  { }

  ngOnInit() {
    this.resetPurchase();
   
  }
resetPurchase(){
  this.purchase={id: null,poNumber:null,purchaseDate:new Date(),deliveryDate:new Date(),purchaseItems:[]}
}
  ionViewWillEnter(){
    this.showTable=false;
    this.resetPurchase();
    this.dbService.incrementPurchaseCode().then(data=>{
      this.dbService.getPurchaseCode().then(data=>{
        console.log("purchase no"+data);
        if(data==null || data==undefined){
          data=1;
        }
        this.purchase.poNumber=this.dbService.codeConstant+this.dbService.purchaseCodeConstant+ data;
      })
    })
    
    this.dbService.getAllInventories().then(data=>{
      this.products=data;
    })
    this.dbService.getAllSuppliers().then(data=>{
      this.supplierList=data;
    })

    
  }


  populateSupplier(){
    this.dbService.getAllSuppliers().then(data=>{
      this.supplierList=data;
    })
  }

  productSelected(evt){
    this.selectedProducts=evt.value;
    
    for(let inv of this.selectedProducts){
      let pItem : PurchaseItem={item:{id:null,code:"",name:"",nameInArabic:"",description:"",quantity:null,purchasePrice:null,unitPrice:null},orderQuantity:null,deliverQuantity:null,price:null}; 
      pItem.item=inv;
      this.purchase.purchaseItems.push(pItem);
      this.showTable=true;
    }
  }

  async addNewPurchase() :Promise<any>{
    
    this.dbService.createPurchase(this.purchase).then(data=>{
      this.dbService.incrementPurchaseCode();
      this.dbService.updateStock(this.purchase.purchaseItems).then(data=>{
        this.tostService.presentToast("Purchase added successfully");      
      })
      
    }).catch(reason=>{
      console.log(reason);
    }).finally(()=>{
      this.resetPurchase();
      this.navCtrl.navigateRoot('purchase');
    });
  } 

  numericOnly(evt){
    return this.validationService.numericOnly(evt);
  }

  showPurchase(){
    this.navCtrl.navigateRoot('purchase');
  }
}
