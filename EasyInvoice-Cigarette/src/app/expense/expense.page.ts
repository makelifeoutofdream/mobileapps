import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Expense } from '../services/expense';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  private expenseList : Expense[];
  private expense : Expense;
  constructor(private dbService : DbService,private toastService :ToastserviceService, public navCtrl:NavController) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.getAllExpenses();
  }

  getAllExpenses(){
      this.dbService.getAllExpenses().then(data=>{
        this.expenseList=data;
      });
  }


  addNewExpense(){
    this.navCtrl.navigateRoot('newexpense');
  }

  async editExpense(id){
    this.expense=this.expenseList.filter(a=>a.id==id)[0];
    let navigationExtras : NavigationExtras ={
          queryParams : {expense : this.expense}
    };
    console.log("selected expense"+JSON.stringify(this.expense) );
  this.navCtrl.navigateRoot('newexpense',navigationExtras);    
  }

}
