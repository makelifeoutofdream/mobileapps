import { Component, OnInit } from '@angular/core';
import { User } from  '../model/User'
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(public toastController:ToastController) { 

  }

  async errorToast(message:string){
    const toast=await this.toastController.create({
      message : message,
      duration : 2000
    });
    toast.present();
  }

  user : User;
  ngOnInit() {
    this.user={
      name : "",
      mobileNo : "",
      password : "",
      confirmPassword : ""
    }

  }

  submit(){
    if(this.user.password===this.user.confirmPassword==false){
      this.errorToast("Password should match with confirm password");
    }
  }

}
