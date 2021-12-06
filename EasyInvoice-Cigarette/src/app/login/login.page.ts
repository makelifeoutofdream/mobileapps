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
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Sim } from '@ionic-native/sim/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phoneNo : string ;
  userName : any="";
  password : any="";
  loginUser : User;  
  formLogin : FormGroup;
  error : boolean =false;
  errorMessage : string ;
  private whiteListedMACs : string []=['919074292305','0564863010','0508812145','919074247482','0560545887']
  constructor(public app:AppComponent,public navCtrl:NavController,public dbServise:DbService,
    formBuilder : FormBuilder,public tostService:ToastserviceService,
    private uniqueDeviceID: UniqueDeviceID,
    private uid: Uid,
    private androidPermissions: AndroidPermissions,private sim: Sim) {
      this.formLogin=new FormGroup({
        password : new FormControl('',Validators.compose([Validators.required])),
        email : new FormControl('',Validators.compose([Validators.required])) 
      })
      this.getPermission();
      this.sim.requestReadPermission().then(
        () => console.log('Permission granted'),
        () => console.log('Permission denied')
      );

      this.sim.getSimInfo().then(
        (info) => {
          console.log('Sim info: ', info),
        //  alert('sim info'+JSON.stringify(info) );
          this.phoneNo=info.phoneNumber
        },
        (err) => console.log('Unable to get sim info: ', err)
      );
   }

  ngOnInit() {
    this.app.showTabs=false;
  }

  getPermission(){
    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
      if(res.hasPermission){
        
      }else{
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
          alert("Persmission Granted Please Restart App!");
        }).catch(error => {
          alert("Error! "+error);
        });
      }
    }).catch(error => {
      alert("Error! "+error);
    });
  }

  get errorControl() {
    return this.formLogin.controls;
  }
  login(){
    if(!this.formLogin.valid){
      
      return ;  
    }
    
    this.dbServise.fetchUserByUserNameAndPassword(this.userName,this.password).then(data=>{
     // if(this.whiteListedMACs.includes(this.phoneNo)){

        if(data!=null && data!=undefined){
          this.loginUser=data;
          this.app.showTabs=true;
          this.navCtrl.navigateRoot('dashboard');
        }else{
          this.tostService.presentToast("Incorrect username or password");
        }
      /*}else{
        this.tostService.presentToast("Configuration Error");
     }*/

    }).catch(err=>{
        console.log(err);
        this.tostService.presentToast("Incorrect username or password");
    });
    
    
  }

  fetchUserByPormise(userName : any,password : any){
    return this.dbServise.fetchUserByUserNameAndPassword(userName,password).then
  }


}
