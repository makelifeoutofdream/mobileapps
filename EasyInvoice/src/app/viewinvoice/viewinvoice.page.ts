import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';
import { Invoice } from '../services/invoice';
import { PrintService } from '../services/print.service';
import { Profile } from '../services/profile';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import {sprintf} from "sprintf-js";

import {formatDate} from '@angular/common';
@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.page.html',
  styleUrls: ['./viewinvoice.page.scss'],
})
export class ViewinvoicePage implements OnInit {
  private profile : Profile;

  constructor(private route : ActivatedRoute,private datePipe :DatePipe,public printService : PrintService,
    private dbService : DbService) { }
  invoice : Invoice;
  ngOnInit() {
    this.invoice={id:null,invoiceNumber:null,invoiceDate:null,total:null,tax:null,amountPaid:null,balanceAmount:null,customer:  {id:null,code:null,name : "" ,itemList : null,nameInArabic : "",contactPersonName: "",contactPersonNameInArabic:"",
    buildingNumber:"",street:"",streetInArabic:"",city:"",cityInArabic:"",district:"",districtInArabic:"",country:"",countryInArabic:"",
    pobox:"",postalCode:"",phoneNumber:"",mobile:"",email:"",vatNumber:"",crNumber:"",creditLimit:null,balance:null},invoiceItems:[],invoiceDateString:""}
  }


  ionViewWillEnter(){
    this.dbService.getProfile().then(data=>{
      this.profile=data;
    });
  
    this.route.queryParams.subscribe(params=>{
      this.invoice=params['invoice'];
    })
    this.invoice.invoiceDateString=this.datePipe.transform(new Date( this.invoice.invoiceDate),'dd-MM-yyyy HH:mm:ss');
    console.log('selected invoice'+this.invoice.invoiceNumber);
    console.log('selected invoice customer'+this.invoice.customer);
  }
  printBill(){
    let result=this.getFormatedContent();
   this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result);
  }



  getFormatedContent(){
    const encoder = new EscPosEncoder();
    let result="";
    let datetime:string =new Date(this.invoice.invoiceDate).toISOString().substr(0, 19).replace('T', ' ');
    let billDetails=encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().
    raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : '+ this.profile.vatNumber+','+'CR # : '+this.profile.crNumber).
    align('left').bold(true).line('---------------------------------------------------------------').bold(true).
    raw([0x1B, 0x21, 0x20]).align('center').bold(true).line('VAT INVOICE').bold(true).
    raw([0x1B, 0x21, 0x03]).align('left').text(this.invoice.invoiceNumber+'            '+ datetime).newline().
    align('left').bold(true).line('---------------------------------------------------------------').bold(true).
    align('left').bold(true).line('Bill To').
    align('left').bold(true).line('---------------------------------------------------------------').bold(true).
    align('left').line(this.invoice.customer.name).
    align('left').line(this.invoice.customer.street+','+this.invoice.customer.city+','+this.invoice.customer.district).
    align('left').line('VAT #: '+this.invoice.customer.vatNumber+'  CR#: '+this.invoice.customer.crNumber).
    align('left').line('Mob: '+this.invoice.customer.mobile).
    align('left').bold(true).line('---------------------------------------------------------------').
    align('left').line(sprintf('%s %-25.22s %6s %7s %16s','#', 'Item', 'Qty','Rate', 'Amount')).bold(true).
    align('left').bold(true).line('---------------------------------------------------------------');
    let counter:number=1;
    let totalQuantity=0;
    let itemDetails="";
    for(let itm of this.invoice.invoiceItems){
      totalQuantity+=itm.quantity;
      let temp=encoder.initialize().
      align('left').line(sprintf('%d %-13.13s %9.0f %8.2f %11.2f ',counter, itm.name, itm.quantity,itm.unitPrice, itm.unitPrice*itm.quantity));
      itemDetails+=temp;
      counter=counter+1;
    }
  
    let footer=encoder.initialize(). align('left').bold(true).line('------------------------------------------------').bold(true).
    raw([0x1B, 0x21, 0x08]).align('left').line('Qty : '+totalQuantity).
    align('right').line('Total Invoice Value(Excl. VAT) : '+  sprintf('%6.2f ',(this.invoice.total-this.invoice.tax))) .
    align('right').line('VAT Payable in SAR('+this.profile.vat+'%) : '+sprintf('%6.2f ',this.invoice.tax)).
    align('right').line('Gross Amount in SAR : '+sprintf('%6.2f ',this.invoice.total)).
    align('left').bold(true).line('------------------------------------------------').bold(true).
    align('right').line('Previous Balance : '+ sprintf('%6.2f',(this.invoice.balanceAmount+this.invoice.amountPaid))).
    align('right').line('Paid Amount : '+sprintf('%6.2f',this.invoice.amountPaid)).
    raw([0x1B, 0x21, 0x20]).align('left').line('Balance Amount : '+sprintf('%6.2f',this.invoice.balanceAmount)).
    align('left').bold(true).line('------------------------------------------------').bold(true).
    align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!');
  
   // result+=billDetails+itemDetails;
    result=encoder.initialize().encode();
    //line(billDetails).line(itemDetails).encode();
    //sprintf('%d %-20.20s %9.2f %3.0f %11.2f ',counter, itm.name, itm.unitPrice, itm.quantity, itm.unitPrice*itm.quantity);
  
  return result;
  }
  
}
