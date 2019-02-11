import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../model/Order';
import { Agency } from '../model/Agency';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orderForm : FormGroup
  order : Order
  brandList : any []
  quantityList : number []
  agencyList : Agency []
  constructor(private formBuilder: FormBuilder) { 

    this.orderForm=this.formBuilder.group({
      brand : ['',[Validators.required]],
      quantity : ['',[Validators.required]],
      type_of_can : ['',[Validators.required]],
      amount : ['',[Validators.required]],
      agency : ['',[Validators.required]]
    });
   
    this.initializeOrder();
  }


  initializeOrder(){
    this.quantityList=[20,10,5]
    this.brandList=[
      "Aquafina",
      "Bisleri",
      "Sakro",
      "Team",
      "Trinita",
      "Aqua Naturals"
    ]
    this.order={
      "orderId" : null,
      "quantity" : 0,
      "agency_id" : null,
      "brand" : this.brandList[0],
      "type_of_can" : null,
      "amount" : 0,
      "status" : true
    }
    this.agencyList=[
{
  "name" : null,
  "id" : null
}

    ]
  }

  ngOnInit() {
  }

}
