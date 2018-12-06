import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../model/Address';
import { State } from '../model/State';
import { City } from '../model/City';
import { LocationService } from '../location.service';
import { MessageService } from '../message.service';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  addressForm : FormGroup;
  address : Address;
  stateList : State [] ;
  cityList : City [] ;
  public sState : any;
  constructor(private formBuilder: FormBuilder,private locationService:LocationService,
  private messageService : MessageService,private addressService : AddressService,private router: Router) { 
    this.addressForm=this.formBuilder.group({
      address1 : ['',[Validators.required]],
      address2 : [''],
      street : ['',[Validators.required]],
      pincode : ['',[Validators.required]],
      city : ['',[Validators.required]],
      state : ['',[Validators.required]],
    });

    this.locationService.fetchStates('IN').subscribe(data=>{
      this.stateList=data
    },err=>this.messageService.handleError(err));

  }

  ngOnInit() {
    this.clear ();
  }

  // populateCities((this.selectedState)=>{

  // }); 
  populateCities (sState){
    if(sState!=null && sState!=undefined){
      this.address.state=sState.name;
      if(sState.cityList!=null && sState.cityList!=undefined){
        this.cityList=sState.cityList;
        console.log("cities"+this.cityList[0].name);
      }  
    }
    
    
  }

  clear (){
    this.address={
      address1 : "",
      address2 : "",
      city : "",
      district : "",
      pincode : "",
      state : "",
      street : "",
      userId : 0
    };
  }


  submit(){
    console.log("save address called");
    this.addressService.saveAddress(localStorage.getItem('userId'),this.address).subscribe(
      data=>{this.messageService.successToast("Address updated successfully");
      this.router.navigate(['/home']);

    },err=>this.messageService.handleError(err)
    );
  }
}
