import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Expense } from '../services/expense';
import { ToastserviceService } from '../services/toastservice.service';

@Component({
  selector: 'app-newexpense',
  templateUrl: './newexpense.page.html',
  styleUrls: ['./newexpense.page.scss'],
})
export class NewexpensePage implements OnInit {

  private expense : Expense;
  constructor(private dbService : DbService,private toastService :ToastserviceService, public navCtrl:NavController,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.resetExpense();
  }

  resetExpense(){
    this.expense={id : null,category : null,date: null,amount:null}
  }

  ionViewWillEnter(){
    this.route.queryParams.subscribe(params=>{
      this.expense=params['expense'];
    })
    if(this.expense==null || this.expense==undefined){
      this.resetExpense();
    }
    
  }
  showExpense(){
    this.navCtrl.navigateRoot('expense');
  }
  addNewExpense(){
    if(this.expense.id!=null && this.expense.id!=undefined){
      this.dbService.UpdateExpense(this.expense).then(data=>{
        this.toastService.presentToast('Expense updated successfully');
        this.navCtrl.navigateRoot('expense');
      }).catch(err=>{
        this.toastService.presentToast('Failed to update expense'+err);
      })
    }else{
      this.dbService.createExpense(this.expense).then(data=>{
        this.toastService.presentToast("Expense addedd successfully");
        this.navCtrl.navigateRoot('expense');
      }).catch(err=>{
        this.toastService.presentToast('Failed to add expense'+err);
      })
    }
    
  }


  
}