import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import html2canvas from 'html2canvas';
import { DbService } from 'src/app/services/db.service';
import { PrintService } from 'src/app/services/print.service';
import { Profile } from 'src/app/services/profile';
import { Buffer } from 'buffer';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import * as domtoimage from 'dom-to-image';
@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss'],
})
export class PrintPreviewComponent implements OnInit {

  @Input() profile;
  @Input() invoice;
  @Input() products;
  public canPrint = true;
  private datetime  :string;
  private orderItems : any;
  private totalQuantity : number;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "";
  printerSizes: any = [{
    name: '58mm',
    value: 368
  }, {
    name: '80mm',
    value: 520
  }];
  paperSize: any = '';
  constructor(public printService : PrintService, public dbService:DbService,private modalCtrl: ModalController,public navCtrl:NavController) { }

  ngOnInit() {
    this.prepareInvoice();
}

ngOnDestroy() {
    document.getElementById('imageToPrint').innerHTML = '';
}

ngAfterViewInit() {
// this.prepareInvoice().then(data=>{
//  setTimeout(() => {
//    this.pairTo();
//  },100);
// }).catch(err=>{
//  alert('Error whiel preparing preview'+err);
// })
}


async prepareInvoice():Promise<any>{
    //this.value=this.generateQRCodeContent();
    this.datetime=new Date( this.invoice.invoiceDate).getDate()+'-'+ new Date(this.invoice.invoiceDate).getMonth()+'-'+ new Date(this.invoice.invoiceDate).getFullYear()+' '+new Date(this.invoice.invoiceDate).getHours()+':'+new Date(this.invoice.invoiceDate).getMinutes()+':'+new Date(this.invoice.invoiceDate).getSeconds();
    this.filterUnselectedProducts().then(data=>{
        this.orderItems=data;
        this.getTotalQuantity();
        this.canPrint = true;
          setTimeout(() => {
            this.pairTo();
          }, 2000);
    });
}

  async filterUnselectedProducts(){
    return this.products.filter(a=>a.quantity!=null && a.quantity!=undefined && a.quantity>0);
  }

  async getTotalQuantity(){
    this.totalQuantity= this.orderItems.reduce((accum,item)=>accum+item.quantity,0);
  }

  pairTo() {
    
    var node = document.getElementById("imageToPrint");
    var  width = this.profile &&  this.profile.selectedPrinterSize ? this.profile.selectedPrinterSize : 368;
    //html2canvas(node, {
    domtoimage.toPng(node).then(dataUrl => {
        //var imgData = canvas.toDataURL("image/png");
        let encoder = new EscPosEncoder();
        let result = encoder.initialize();
        let img = new Image();
        img.src = dataUrl; 
        img.onload  = (e) =>  {
          var ht = Math.ceil(node.offsetHeight / 8) * 8;
          ht = ht + 120;
          console.log(ht, "Height");
          let finalPrint  = result
             .codepage('windows-1252')
            .image(img,width,ht,'threshold',120)
            .encode();
          //   this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
          // console.log('print called');
          // this.modalCtrl.dismiss();
          // this.navCtrl.navigateRoot('invoice');
          this.printService.connectToBluetoothPrinter(this.profile.selectedPrinter).subscribe((res) => {
            //this.printService.clearData();
            this.printService.printDataToPrinter(finalPrint).then(() => { 
                this.printService.disconnectBluetoothPrinter().then(() => {
                  this.modalCtrl.dismiss();
                }, (err) => {
                  alert('Disconnecting error ::' + err);
                }); 
            },(err) => {
              alert("Printing Failed..");
              alert(err);
            });
        },(error) => {
          alert(error +" actual conncetion error");
          alert("connecting to printer failed..");
          this.modalCtrl.dismiss();
        })
        }
    }).catch(function (error) {
      console.error("oops, something went wrong!", error);
      alert(error);
      this.modalCtrl.dismiss();
      
    });
  }

  generateQRCodeContent(){
    var sellerName=this.getTLVForValue("1",this.profile.companyName);
    var vatNumber=this.getTLVForValue("2",this.profile.vatNumber);
    var timestamp=this.getTLVForValue("3",""+this.invoice.invoiceDate);
    let amt : number =(this.invoice.total-this.invoice.tax);
    var amount=this.getTLVForValue("4",""+amt);
    var vatAmount=this.getTLVForValue("5",""+this.invoice.tax);
    var tagsBufArray=[sellerName,vatNumber,timestamp,amount,vatAmount];
    var qrCodeBuf=Buffer.concat(tagsBufArray);
    var qrCodeBase64=qrCodeBuf.toString('base64');
    return qrCodeBase64;
  }

  getTLVForValue(tagNum,tagValue){
    var tagBuf=Buffer.from([tagNum]);
    var tagValueLenBuf=Buffer.from([tagValue.length]);
    var tagValueBuf=Buffer.from(tagValue);
    var buffsArray=[tagBuf,tagValueLenBuf,tagValueBuf];
    return Buffer.concat(buffsArray);
  }
  

  

}