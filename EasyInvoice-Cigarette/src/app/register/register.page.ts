import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { User } from '../services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newUser : User={
    id : null,
    first_name : '',
    email : '',
    mobile_number : '',
    user_password : '',
    user_confirm_password : ''
      
  };
  private dbService : DbService;
  constructor(dbService : DbService,public navCtrl:NavController) { 
    this.dbService=dbService;
  }
    
  ngOnInit() {
  }

  registerNewUser(){
    console.log(JSON.stringify(this.newUser));
    this.dbService.signup(this.newUser);
    this.navCtrl.navigateRoot('login');
  }
}
