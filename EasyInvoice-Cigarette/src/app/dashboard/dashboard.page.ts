import { JsonpClientBackend } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Invoice } from '../services/invoice';
import { InvoiceItem } from '../services/invoiceitem';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("barCanvas") barCanvas: ElementRef;

  private doughnutChart: Chart;
  private barChart: Chart;
  private barLabels;
  private barData;
  private barColors;
  private barHoverColors;
  private donutLabels;
  private donutdata; 
  private donutColors;
  private donutHoverColors;
  private inventoryList : Inventory[];
  private invoiceList : Invoice[];
  private startDate  : Date;
  private endDate : Date;
  private todayCost : number;
  private monthCost : number ;
  private todayRevenue : number;
  private monthRevenue : number;
  private todayProfit : number ;
  private monthProfit : number ;
  private filterInvoiceList : Invoice [];
  constructor(private dbService:DbService, public loadingController: LoadingController) {Chart.register(...registerables); }
  ngOnInit(){    
    this.inventoryList=[];
    this.invoiceList=[];
  }

  async loadDashboard(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 300000,
    });
    await loading.present();
    if(this.doughnutChart!=null && this.doughnutChart!=undefined)
    this.doughnutChart.destroy();
    if(this.barChart!=null && this.barChart!=undefined)
    this.barChart.destroy();
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
      this.getDonutdata().then(resp=>{
        console.log(JSON.stringify(this.donutColors))
        this.showDashboard().then(data=>{
          this.applyFilter().then(data=>{
            loading.dismiss();
          })
        })
      })
    })

    
  }
  ionViewWillEnter(){
    this.getAllInvoices();
    this.loadDashboard();
   
  }

  
  async filterTodayInvoices() : Promise<any>{
    this.getAllInvoices().then(data=>{
      
      let res : Invoice [] =this.invoiceList;
      this.startDate=new Date();
      this.endDate=new Date();
      this.endDate=new Date(this.endDate.getFullYear(),this.endDate.getMonth(),this.endDate.getDate())
        this.endDate.setHours(23);
        this.endDate.setMinutes(23);
        this.endDate.setSeconds(23);
        this.startDate=new Date(this.startDate.getFullYear(),this.startDate.getMonth(),this.startDate.getDate())
        this.startDate.setHours(0);
        this.startDate.setMinutes(0);
        this.startDate.setSeconds(0);
        this.filterInvoiceList= res.filter(inv=>{
          var date=new Date(inv.invoiceDate);
          date.setHours(1);
          date.setMinutes(1);
          date.setSeconds(1);
          return date.getTime()>=this.startDate.getTime() && date.getTime()<=this.endDate.getTime();
        })
          }).catch(err=>console.log(err));
    
  }
  async filterMonthlyInvoices() : Promise<any>{
    this.getAllInvoices().then(data=>{
      let res : Invoice [] =this.invoiceList;
      this.startDate=new Date();
      this.startDate.setDate(this.startDate.getDate()-30);
      this.endDate=new Date();
     
      this.endDate=new Date(this.endDate.getFullYear(),this.endDate.getMonth(),this.endDate.getDate())
        this.endDate.setHours(23);
        this.endDate.setMinutes(23);
        this.endDate.setSeconds(23);
        this.startDate=new Date(this.startDate.getFullYear(),this.startDate.getMonth(),this.startDate.getDate())
        this.startDate.setHours(0);
        this.startDate.setMinutes(0);
        this.startDate.setSeconds(0);
        this.filterInvoiceList= res?.filter(inv=>{
          var date=new Date(inv.invoiceDate);
          date.setHours(1);
          date.setMinutes(1);
          date.setSeconds(1);
          return date.getTime()>=this.startDate.getTime() && date.getTime()<=this.endDate.getTime();
        })
          });
    
  }
  
  // async getBarData() : Promise<any>{
  //     this.filterInvoices().then(data=>{
  //       let invoices : Invoice []=data;
  //       let revenue = new Array();
  //       let profit = new Array();
  //       for(let inv of invoices){
  //         revenue.push(inv.total);
  //         for(let itm of inv.invoiceItems){
  //           itm.;
  //         }
  //       }
  //     })
  // }
  async getDonutdata() : Promise<any>{
    this.donutColors=[];
    this.donutHoverColors=[];
    this.donutLabels=this.inventoryList.map(a=>a.name);
    this.donutdata=this.inventoryList.map(a=>a.quantity);
    for(let i of this.inventoryList){
        this.donutColors.push(this.random_rgba());
        this.donutHoverColors.push(this.random_rgba());
    }
  }
  

  async showDashboard() : Promise<any>{
    console.log('called');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: this.donutLabels,
        datasets: [
          {
            label: "Quantity",
            data: this.donutdata,
            backgroundColor : this.donutColors,
            // backgroundColor: [
            //   "rgba(255, 99, 132, 0.2)",
            //   "rgba(54, 162, 235, 0.2)",
            //   "rgba(255, 206, 86, 0.2)",
            //   "rgba(75, 192, 192, 0.2)",
            //   "rgba(153, 102, 255, 0.2)",
            //   "rgba(255, 159, 64, 0.2)"
            // ],
            hoverBackgroundColor: this.donutHoverColors
          }
        ]
      }
      
    });


    // this.barChart = new Chart(this.barCanvas.nativeElement, {
    //   type: "bar",
    //   data: {
    //     labels: this.barLabels,
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         borderColor: [
    //           "rgba(255,99,132,1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)"
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   }
    // });
  }

random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
async getAllInvoices() :Promise<any>{
  this.dbService.getAllInvoices().then(data => {
    this.invoiceList = data;
    return this.invoiceList;
  }).catch(reason => {
   
    console.log(reason);
  })
}


async applyFilter(): Promise<any>{

  this.filterTodayInvoices().then(data=>{
    
    this.totalCost().then(data=>{
      this.todayCost=data;
      this.totalRevenue().then(data=>{
          this.todayRevenue=data;
          this.todayProfit=this.todayRevenue-this.todayCost;
          this.filterMonthlyInvoices().then(data=>{
            
            this.totalCost().then(data=>{
              this.monthCost=data;
              this.totalRevenue().then(data=>{
                this.monthRevenue=data;
                this.monthProfit=this.monthRevenue-this.monthCost;
              })
            })
          })
      })    
    })
  })
  
}

async totalCost(): Promise<number> {
  if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {

    let invoiceItemList: any[] = this.filterInvoiceList.reduce((arr, elem) => arr.concat(elem.invoiceItems), [])
    return invoiceItemList.map(itm => {
      if (itm.quantity != null && itm.quantity != undefined && itm.purchasePrice != null && itm.purchasePrice != undefined)
        return (itm.quantity * itm.purchasePrice)
    }).reduce((acc, nxt) => acc + nxt);
    
  }
}

async totalRevenue(): Promise<number> {
  if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {

    let invoiceItemList: InvoiceItem[] = this.filterInvoiceList.reduce((arr, elem) => arr.concat(elem.invoiceItems), [])
    return invoiceItemList.map(itm => {
      if (itm.quantity != null && itm.quantity != undefined && itm.unitPrice != null && itm.unitPrice != undefined)
        return (itm.quantity * itm.unitPrice)
    }).reduce((acc, nxt) => acc + nxt);
    
  }
}

}
