import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../services/invoice';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.page.html',
  styleUrls: ['./viewinvoice.page.scss'],
})
export class ViewinvoicePage implements OnInit {

  constructor(private route : ActivatedRoute,private datePipe :DatePipe) { }
  invoice : Invoice;
  ngOnInit() {
    this.invoice={id:null,invoiceNumber:null,invoiceDate:null,total:null,tax:null,customer: {id:null,name:"",contactPersonName:"",location:"",vat:null,itemList:[]},invoiceItems:[],invoiceDateString:""}
  }


  ionViewWillEnter(){
    
    this.route.queryParams.subscribe(params=>{
      this.invoice=params['invoice'];
    })
    this.invoice.invoiceDateString=this.datePipe.transform(this.invoice.invoiceDate,'dd-mm-yyyy');
    console.log('selected invoice'+this.invoice.invoiceNumber);
    console.log('selected invoice customer'+this.invoice.customer);
  }
}
