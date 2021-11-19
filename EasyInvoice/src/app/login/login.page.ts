import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClientPage } from '../client/client.page';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { User } from '../services/user';
import { DbService } from '../services/db.service';
import { ToastserviceService } from '../services/toastservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName : any="";
  password : any="";
  loginUser : User;  
  formLogin : FormGroup;
  error : boolean =false;
  errorMessage : string ;
  constructor(public app:AppComponent,public navCtrl:NavController,public dbServise:DbService,
    formBuilder : FormBuilder,public tostService:ToastserviceService) {
      this.formLogin=new FormGroup({
        password : new FormControl('',Validators.compose([Validators.required])),
        email : new FormControl('',Validators.compose([Validators.required])) 
      })
   }

  ngOnInit() {
    this.app.showTabs=false;
  }

  get errorControl() {
    return this.formLogin.controls;
  }
  login(){
    if(!this.formLogin.valid){
      
      return ;  
    }
    
    this.dbServise.fetchUserByUserNameAndPassword(this.userName,this.password).then(data=>{
      if(data!=null){
        this.loginUser=data;
        this.app.showTabs=true;
        this.navCtrl.navigateRoot('inventory');
      }else{
        this.tostService.presentToast("Incorrect username or password");
      }
    }).catch(err=>{
        console.log(err);
        this.tostService.presentToast("Incorrect username or password");
    });
    
    
  }

  fetchUserByPormise(userName : any,password : any){
    return this.dbServise.fetchUserByUserNameAndPassword(userName,password).then
  }


}
