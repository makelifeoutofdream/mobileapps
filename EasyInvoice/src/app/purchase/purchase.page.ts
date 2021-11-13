import { AbstractType, Component, OnInit } from '@angular/core';
import { InvoiceItem } from '../services/invoiceitem';
import { Purchase } from '../services/purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  private purchase : Purchase;
  private supplierList : any;
  private product : InvoiceItem;
  private products : InvoiceItem[];
  constructor() { }

  ngOnInit() {
    this.purchase={id:null,poNumber:null,deliveryDate:null,purchaseDate:null,purchaseItems:[]}
  }

  ionViewWillEnter(){
    this.purchase={id:null,poNumber:null,deliveryDate:null,purchaseDate:null,purchaseItems:[]}
  }
  populateSupplier(){

  }

  productSelected(evt){

  }
}
