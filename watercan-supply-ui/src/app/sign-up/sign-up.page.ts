import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User'
import { ToastController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SignupService } from '../signup.service';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

interface UserData{
  obj : Object
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})


export class SignUpPage implements OnInit {

  
  constructor(private formBuilder:FormBuilder,
    private service:SignupService,private messageService:MessageService,
    private menu:MenuController) { 
    this.signupForm=this.formBuilder.group({
      name : ['',[Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    });
  }

  

  

  user : User;
  signupForm : FormGroup;
  ngOnInit() {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.clear();
  }

  submit(){
    console.log("submit called"+this.user.name);
    if(this.user.password===this.user.confirmPassword==false){
      this.messageService.errorToast("Password should match with confirm password");
      return ;
    }
    this.service.saveUser(this.user).subscribe(
      data=>this.messageService.successToast("Success!"),
      err=>this.messageService.handleError(err));
  }

  clear(){
    this.user={
      id : "",
      name : "",
      mobileNumber : "",
      password : "",
      confirmPassword : "",
      address : []
    }
  }

}
