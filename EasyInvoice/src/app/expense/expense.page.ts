import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

  constructor(public app:AppComponent,public navCtrl:NavController) { }

  ngOnInit() {
  }

  addNewExpense(){
    this.app.showTabs=true;
    this.navCtrl.navigateRoot('newexpense');
  }
}
