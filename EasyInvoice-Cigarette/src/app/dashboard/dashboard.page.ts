import { JsonpClientBackend } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DbService } from '../services/db.service';
import { Inventory } from '../services/inventory';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private doughnutChart: Chart;
  private lineChart: Chart;
  private donutLabels;
  private donutdata; 
  private donutColors;
  private donutHoverColors;
  private inventoryList : Inventory[];
  constructor(private dbService:DbService) {Chart.register(...registerables); }
  ngOnInit(){    
    this.inventoryList=[];
  }

  ionViewWillEnter(){
    if(this.doughnutChart!=null && this.doughnutChart!=undefined)
    this.doughnutChart.destroy();
    if(this.lineChart!=null && this.lineChart!=undefined)
    this.lineChart.destroy();
    this.dbService.getAllInventories().then(data=>{
      this.inventoryList=data;
      this.getDonutdata().then(resp=>{
        console.log(JSON.stringify(this.donutColors))
        this.showDashboard();
      })
    })
    
  }

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


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Total Profit for 2021",
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
}
