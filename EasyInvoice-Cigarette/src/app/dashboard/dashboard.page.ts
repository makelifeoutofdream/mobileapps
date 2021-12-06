import { JsonpClientBackend } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
import { Invoice } from '../services/invoice';
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
  constructor(private dbService:DbService) {Chart.register(...registerables); }
  ngOnInit(){    
    this.inventoryList=[];
    this.invoiceList=[];
  }

  ionViewWillEnter(){
    if(this.doughnutChart!=null && this.doughnutChart!=undefined)
    this.doughnutChart.destroy();
    if(this.barChart!=null && this.barChart!=undefined)
    this.barChart.destroy();
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
      this.getDonutdata().then(resp=>{
        console.log(JSON.stringify(this.donutColors))
        this.showDashboard();
      })
    })

  }

  
  async filterInvoices() : Promise<any>{
    this.dbService.getAllInvoices().then(data=>{
      let res : Invoice [] =data;
      if( (this.startDate!=null && this.startDate!=undefined) && (this.endDate==null || this.endDate==undefined)){
        this.startDate=new Date(this.startDate.getFullYear(),this.startDate.getMonth(),this.startDate.getDate())
        this.startDate.setHours(0);
        this.startDate.setMinutes(0);
        this.startDate.setSeconds(0);
        res.filter(inv=>{
          var date=new Date(inv.invoiceDate);
          date.setHours(1);
          date.setMinutes(1);
          date.setSeconds(1);
          return date.getTime()>=this.startDate.getTime();
        })
      }else if ( (this.startDate==null || this.startDate==undefined) && (this.endDate!=null && this.endDate!=undefined) ){
        this.endDate=new Date(this.endDate.getFullYear(),this.endDate.getMonth(),this.endDate.getDate())
        this.endDate.setHours(23);
        this.endDate.setMinutes(23);
        this.endDate.setSeconds(23);
        res.filter(inv=>{
          var date=new Date(inv.invoiceDate);
          date.setHours(1);
          date.setMinutes(1);
          date.setSeconds(1);
          return date.getTime()<=this.endDate.getTime();
        })
      }else if( (this.startDate!=null || this.startDate!=undefined) && (this.endDate!=null || this.endDate!=undefined)){
        this.endDate=new Date(this.endDate.getFullYear(),this.endDate.getMonth(),this.endDate.getDate())
        this.endDate.setHours(23);
        this.endDate.setMinutes(23);
        this.endDate.setSeconds(23);
        this.startDate=new Date(this.startDate.getFullYear(),this.startDate.getMonth(),this.startDate.getDate())
        this.startDate.setHours(0);
        this.startDate.setMinutes(0);
        this.startDate.setSeconds(0);
        res.filter(inv=>{
          var date=new Date(inv.invoiceDate);
          date.setHours(1);
          date.setMinutes(1);
          date.setSeconds(1);
          return date.getTime()>=this.startDate.getTime() && date.getTime()<=this.endDate.getTime();
        })
      }else{
        return res;
      }
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
  

  showDashboard() {
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
}
