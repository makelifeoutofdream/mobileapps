import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../model/Address';
import { State } from '../model/State';
import { City } from '../model/City';
import { LocationService } from '../location.service';
import { MessageService } from '../message.service';

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
  selectedState : State;
  constructor(private formBuilder: FormBuilder,private locationService:LocationService,
  private messageService : MessageService) { 
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


  populateCities(){
    
    this.cityList=this.selectedState.cityList;
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
    this.selectedState={
      name : "",
      cityList : []
    }
  }
}
