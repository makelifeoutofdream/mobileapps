import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User'
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  
  constructor(public toastController:ToastController,private formBuilder:FormBuilder) { 
    //  this.signupForm=this.formBuilder.group({
    //    name : ['',[Validators.required,Validators.pattern("^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$")]],
    //    mobileNo : ['',[Validators.required,Validators.pattern(" /^\d+$/"),Validators.maxLength(10),Validators.minLength(10)]],
    //    password : ['',Validators.required],
    //    confirmPassword : ['',Validators.required]
    //  });

    this.signupForm=this.formBuilder.group({
      name : ['',[Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      mobileNo : ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    });
  }

  

  async errorToast(message:string){
    const toast=await this.toastController.create({
      message : message,
      duration : 2000
    });
    toast.present();
  }

  user : User;
  signupForm : FormGroup;
  ngOnInit() {
    this.user={
      name : "",
      mobileNo : "",
      password : "",
      confirmPassword : ""
    }

    //  this.signupForm=new FormGroup({
    //     name : new FormControl(this.user.name,
    //      [Validators.required,Validators.pattern("^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$")]),
    //     mobileNo : new FormControl(this.user.mobileNo,
    //        [Validators.required,Validators.pattern(" /^\d+$/"),Validators.maxLength(10),Validators.minLength(10)]),
    //     password : new FormControl(this.user.password,
    //      Validators.required),
    //      confirmPassword : new FormControl(this.user.confirmPassword,
    //        Validators.required)
    //  });

  }

  submit(){
    console.log("submit called"+this.user.name);
    if(this.user.password===this.user.confirmPassword==false){
      this.errorToast("Password should match with confirm password");
    }
  }

}
