import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Router, NavigationEnd } from '@angular/router';
import { Address } from '../model/Address';
import { AddressListService } from '../address-list.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {

  constructor(public toastController:ToastController,private formBuilder:FormBuilder,
    private messageService:MessageService,private router: Router,private service:AddressListService) {
      this.getAddressList();
     }
    addressPageForm : FormGroup;
    user :User;
    addressList :Address [];
    

  ngOnInit() {
  }

  getAddressList() {
    
    this.service.getAddressList(localStorage.getItem('userId')).subscribe(data=>{
      this.addressList=data;
      console.log(this.addressList);
      
    },err=>this.messageService.handleError(err));
    
  }

}
