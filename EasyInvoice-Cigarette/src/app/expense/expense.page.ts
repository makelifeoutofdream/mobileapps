import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
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
  private startDate  : Date;
  private endDate  : Date;
  private filterExpenses  : Expense[];
  private totalExpense : number;
  constructor(private dbService : DbService,private toastService :ToastserviceService, public navCtrl:NavController,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.startDate =new Date();
    this.endDate=new Date();
   
  }

  async getAllExpenses():Promise<any>{
      this.dbService.getAllExpenses().then(data=>{
        this.expenseList=data;
      });
  }

 async getTotalExpense():Promise<any>{
  if (this.filterExpenses != null && this.filterExpenses != undefined && this.filterExpenses.length) {
    return this.filterExpenses.map(itm => itm.amount).reduce((acc, nxt) => acc + nxt);
  }
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

  async filterExpense(): Promise<any> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 300000,
    });
    
    await loading.present();
    this.getAllExpenses().then(data=>{
      this.applyFilter().then(data=>{
        this.getTotalExpense().then(data=>{
          this.totalExpense=data;
          loading.dismiss();
          console.log('Loading dismissed!');
        });
      });
    });
      
  }
  async applyFilter(): Promise<any>{
    var start = new Date(this.startDate);

    var end = new Date(this.endDate);

    if (this.startDate != null && this.startDate != undefined) {

      start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
    }
    if (this.endDate != null && this.endDate != undefined) {
      end = new Date(end.getFullYear(), end.getMonth(), end.getDate())
      end.setHours(23);
      end.setMinutes(23);
      end.setSeconds(23);
    }

    if (this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
      this.filterExpenses = this.expenseList?.filter(inv =>  new Date(inv.date) >= start);
    } else if (this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
      this.filterExpenses = this.expenseList?.filter(inv => {
        var date = new Date(inv.date);
        date.setHours(1);
        date.setMinutes(1);
        date.setSeconds(1);
        return  date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
      });
    } else if ((this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
      this.filterExpenses = this.expenseList?.filter(inv => new Date(inv.date) <= end);
    } 
    return this.filterExpenses;
  }
}
