import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Purchase } from '../services/purchase';
import { PurchaseItem } from '../services/PurchaseItem';
import { Supplier } from '../services/supplier';
import { ToastserviceService } from '../services/toastservice.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-editpurchase',
  templateUrl: './editpurchase.page.html',
  styleUrls: ['./editpurchase.page.scss'],
})
export class EditpurchasePage implements OnInit {

  constructor(private dbService : DbService,private toastService : ToastserviceService,public navCtrl:NavController,
    private route : ActivatedRoute,private validationService  :ValidationService) { }
  private supplierList : any;
  private deafultProducts : Inventory[];
  private products : Inventory[];
  private selectedProducts : Inventory[];
  private purchase : Purchase;
  private showTable=false;
  
  ngOnInit() {
    this.resetPurchase();
  }

  resetPurchase(){
    this.purchase={id: null,poNumber:null,purchaseDate:new Date(),deliveryDate:new Date(),purchaseItems:[],supplier:null}
  }
  
  ionViewWillEnter(){
    this.showTable=false;
    
    this.dbService.getAllInventories().then(data=>{
      this.products=data;
    }).then(data=>{
      this.dbService.getAllSuppliers().then(data=>{
        this.supplierList=data;
      }).then(data=>{

    this.route.queryParams.subscribe(params=>{
      this.purchase=params['purchase'];
      console.log("purchase selected"+this.purchase.supplier.id);
      this.deafultProducts=[];
      for(let pitem of this.purchase.purchaseItems){
        let inv : Inventory={id:null,code:"",name:"",nameInArabic:"",description:"",quantity:null,unitPrice:null,purchasePrice:null}
        inv=pitem.item;
        this.deafultProducts.push(inv);
      }
      this.showTable=true;
    })
      })
    })
    

  }

  compareSupplier(e1: Supplier, e2: Supplier): boolean {
    return e1 && e2 ? e1.id == e2.id : e1 == e2;
  }

  productSelected(evt){
    this.selectedProducts=evt.value;
    let  tempList : PurchaseItem [];
    tempList=[];
    for(let inv of this.selectedProducts){
      var index = this.purchase.purchaseItems.findIndex(i => i.item.id == inv.id);
      let p : PurchaseItem=this.purchase.purchaseItems[index];
      let pItem : PurchaseItem={item:{id:null,code:"",name:"",nameInArabic:"",description:"",quantity:null,purchasePrice:null,unitPrice:null},orderQuantity:null,deliverQuantity:null,price:null}; 
      pItem.item=inv;
      if(p!=null && p!=undefined){
        pItem.deliverQuantity=p.deliverQuantity
        pItem.orderQuantity=p.orderQuantity;
        pItem.price=p.price;
        
      }
      tempList.push(pItem);
      }
    
      this.purchase.purchaseItems=tempList;
      this.showTable=true;
    
  }

  numericOnly(evt){
    return this.validationService.numericOnly(evt);
  }
  editPurchase(){
    this.dbService.updatePurchase(this.purchase).then(data=>{
      this.dbService.updateStock(this.purchase.purchaseItems).then(data=>{
        this.toastService.presentToast("Purchase updated successfully");
        return this.showPurchase();
      });
      
      
    } ).catch(reason=>{
      this.toastService.presentToast("Failed to save update "+reason);
    })
  }
  showPurchase(){
    this.navCtrl.navigateRoot('purchase');
  }
}
