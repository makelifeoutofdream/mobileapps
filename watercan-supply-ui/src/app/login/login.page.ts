import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User';
import { ToastController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SignupService } from '../signup.service';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public toastController:ToastController,private formBuilder:FormBuilder,
    private service:SignupService,private messageService:MessageService,private router: Router,
  private menu:MenuController) {
   
    this.loginForm=this.formBuilder.group({
      mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password : ['',Validators.required]
      });
  }
 
  user :User;
  userResponse :User;
  loginForm : FormGroup;

  ngOnInit() {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
      this.user={
      id : "",  
      name : "",
      mobileNumber : "",
      password : "",
      confirmPassword : "",
      address : []
    }

  }

  getUsers() {
    
      this.service.getUsers(this.user.mobileNumber,this.user.password).subscribe(data=>{
        this.userResponse=data;
        console.log(this.userResponse);
        if(this.userResponse!=null&&this.userResponse.mobileNumber==this.user.mobileNumber){
          localStorage.setItem('userId',this.userResponse.id);
          if(this.userResponse.address!=null && this.userResponse.address!=undefined && this.userResponse.address.length>0)
          this.router.navigate(['/home']);
          else
          this.router.navigate(['/address'])
        }else{
          this.messageService.errorToast("INVALID MOBILENUMBER OR PASSWORD!");
        }
      });
      
    }



  submit(){
    this.getUsers();
    }
  }



