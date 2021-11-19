import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastserviceService } from './toastservice.service';
@Injectable({
  providedIn: 'root'
})
export class PrintService {
  public selectedPrinter:any;
  constructor(public btSerial : BluetoothSerial,private tostService:ToastserviceService) { }


  searchBluetoothPrinter(){
    return this.btSerial.list();
  }

  connectToBluetoothPrinter(macAddress){
    return this.btSerial.connect(macAddress);
  }

  disconnectBluetoothPrinter(){
    return this.btSerial.disconnect();
  }

  sendToBluetoothPrinter(macAddress,data){
    this.connectToBluetoothPrinter(macAddress).subscribe(_=>{
      this.btSerial.write(data).then(_=>{
        this.btSerial.disconnect()}).catch(reason=>{console.log(reason)})
    },err=>console.log(this.tostService.presentToast("Printer Issue - bluetooth address - "+macAddress+"-err-"+err)));
  }
}
