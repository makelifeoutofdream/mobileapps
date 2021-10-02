import { Component, OnInit } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-printersettings',
  templateUrl: './printersettings.page.html',
  styleUrls: ['./printersettings.page.scss'],
})
export class PrintersettingsPage implements OnInit {

  constructor(private print:PrintService) { }
  bluetoothList:any=[];
  selectedPrinter:any;
  ngOnInit() {
    this.listPrinter();
  }
listPrinter(){
  this.print.searchBluetoothPrinter().then(resp=>{
    this.bluetoothList=resp;
    
  });
}

selectPrinter(macAddress:string){
  this.print.selectedPrinter=macAddress;
  this.selectedPrinter=this.print.selectedPrinter;
}


}
