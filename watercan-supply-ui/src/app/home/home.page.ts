import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SignUpPage } from '../sign-up/sign-up.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public nav:NavController){
    
  }

  loadSignUp(){
   this.nav.navigateForward("/SignUp");
  }
}
