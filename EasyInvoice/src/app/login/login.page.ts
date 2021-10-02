import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClientPage } from '../client/client.page';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { User } from '../services/user';
import { DbService } from '../services/db.service';
import { ToastserviceService } from '../services/toastservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName : any;
  password : any;
  loginUser : User;  
  constructor(public app:AppComponent,public navCtrl:NavController,public dbServise:DbService,public tostService:ToastserviceService) {
    
   }

  ngOnInit() {
    this.app.showTabs=false;
  }

  login(){
    this.dbServise.fetchUserByUserNameAndPassword(this.userName,this.password).then(data=>{
      if(data!=null){
        this.loginUser=data;
        this.app.showTabs=true;
        this.navCtrl.navigateRoot('client');
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
