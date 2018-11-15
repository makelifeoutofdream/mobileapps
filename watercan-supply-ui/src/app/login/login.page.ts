import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SignupService } from '../signup.service';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public toastController:ToastController,private formBuilder:FormBuilder,
    private service:SignupService,private messageService:MessageService) { 
    this.loginForm=this.formBuilder.group({
      name : ['',[Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      password : ['',Validators.required]
      });
  }
  users :any =[];
  user :User;
  loginForm : FormGroup;

  ngOnInit() {
    this.getUsers();
    this.user={
      name : "",
      mobileNumber : "",
      password : "",
      confirmPassword : ""
    }

  }

  getUsers() {
    this.users =[];
      this.service.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }



  submit(){
    console.log(this.users)
    console.log(this.user)
    }
  }



