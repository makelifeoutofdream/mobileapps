import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { ToastserviceService } from '../services/toastservice.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../services/customer';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.page.html',
  styleUrls: ['./editclient.page.scss'],
})
export class EditclientPage implements OnInit {
  customer : Customer ;
  cusList : Customer[];
  constructor(public dbService : DbService,public toastService : ToastserviceService,
    public navCtrl:NavController , private route : ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
    this.route.queryParams.subscribe(params=>{
      this.customer=params['customer'];
    })
    console.log('selected customer'+this.customer);
    
    
    


  }

  updateClient(){
    
    this.dbService.UpdateCustomer(this.customer).then(data=>this.toastService.presentToast("Customer updated successfully"))
    .catch(reason=>{
      this.toastService.presentToast("Customer update failed");
      console.log(reason);
    })
  }

}
