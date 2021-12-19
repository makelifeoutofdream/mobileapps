import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastserviceService } from './toastservice.service';
declare let  window : any;
@Injectable({
  providedIn: 'root'
})
export class PrintService {
  public selectedPrinter:any;
  
  DatecsPrinter: any;
  
  constructor(public btSerial : BluetoothSerial,public tostService:ToastserviceService) { }

 listDevices(){
   return new Promise((resolve,reject)=>{
    window.DatecsPrinter.listBluetoothDevices(
      function(success){
        resolve(success);
      },
      function(error){
        alert(error);
        reject(error);
      }
    )
   });
   
   
 }

 connectPrinter(){
  return new Promise((resolve,reject)=>{
    window.DatecsPrinter.connect(
      function(success){
        resolve(success);
      },
      function(error){
        alert(error);
        reject(error);
      }
    )
   });
 }

 print(data){

  return new Promise((resolve,reject)=>{
    window.DatecsPrinter.printText(data,'UTF-8',
      function(success){
        resolve(success);
      },
      function(error){
        alert(error);
        reject(error);
      }
    )
   });

 }


 printImage(image, width, height) {
  window.DatecsPrinter.printImage(
    image, //base64
    width, 
    height, 
    1)
 }

  printData(macAddress,data){
  
    window.DatecsPrinter.listBluetoothDevices(
      function (devices) {
        window.DatecsPrinter.connect(devices[0].address, 
          function() {
            printSomeTestText();
          },
          function(error) {
            alert(JSON.stringify(error));
          }
        );
      },
      function (error) {
        alert(JSON.stringify(error));
      }
    );
    
    function printSomeTestText() {
      window.DatecsPrinter.printText("Print Test!", 'ISO-8859-1', 
        function() {
          alert('success');
        }
      );
    }
    

  }

  searchBluetoothPrinter(){
   return this.btSerial.list();
   
  }

  connectToBluetoothPrinter(macAddress){
    alert("Printer MacAddress" + macAddress);
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

  

  printDataToPrinter(data){
    return this.btSerial.write(data);
  }

  clearData() {
    this.btSerial.clear();
  }

  isConnected() {
    return this.btSerial.isConnected();
  }
}
