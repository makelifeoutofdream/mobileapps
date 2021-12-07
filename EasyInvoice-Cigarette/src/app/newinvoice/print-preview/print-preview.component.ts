import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import html2canvas from 'html2canvas';
import { DbService } from 'src/app/services/db.service';
import { PrintService } from 'src/app/services/print.service';
import { Profile } from 'src/app/services/profile';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss'],
})
export class PrintPreviewComponent implements OnInit {

  @Input() profile;
  @Input() invoice;
  @Input() products;
  private datetime  :string;
  private orderItems : any;
  constructor(public printService : PrintService, public dbService:DbService,private modalCtrl: ModalController,) { }

  ngOnInit() {
    this.datetime=this.invoice.invoiceDate.getDate()+'-'+this.invoice.invoiceDate.getMonth()+'-'+this.invoice.invoiceDate.getFullYear()+' '+this.invoice.invoiceDate.getHours()+':'+this.invoice.invoiceDate.getMinutes()+':'+this.invoice.invoiceDate.getSeconds();
    this.filterUnselectedProducts().then(data=>{
      this.orderItems=data;
      setTimeout(() => {
        this.pairTo();
      },30000);
    })
     
  }

  async filterUnselectedProducts(){
    return this.products.filter(a=>a.quantity!=null && a.quantity!=undefined && a.quantity>0);
  }

  pairTo() {
    
    var node = document.getElementById("imageToPrint");
    html2canvas(node, {
      allowTaint: true,
    }).then(canvas => {
        var imgData = canvas.toDataURL("image/png");
        let encoder = new EscPosEncoder();
        let result = encoder.initialize();
        let img = new Image();
        img.src = imgData; 
        img.onload  = (e) =>  {
          var ht = Math.ceil(node.offsetHeight / 8) * 8;
          ht = ht + 120;
          result
            .align('left')
            .image(img,520,ht,'threshold',128).qrcode(this.generateQRCodeContent(),1,4,'h');
          this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
          console.log('print called');
          this.modalCtrl.dismiss();
        }
    }).catch(function (error) {
      console.error("oops, something went wrong!", error);
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
