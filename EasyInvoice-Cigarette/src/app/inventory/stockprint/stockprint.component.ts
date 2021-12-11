import { Component, Input, OnInit } from '@angular/core';
import { PrintService } from 'src/app/services/print.service';
import * as domtoimage from 'dom-to-image';
import EscPosEncoder from 'esc-pos-encoder-ionic';
import { ModalController } from '@ionic/angular';
import { Inventory } from 'src/app/services/inventory';
@Component({
  selector: 'app-stockprint',
  templateUrl: './stockprint.component.html',
  styleUrls: ['./stockprint.component.scss'],
})
export class StockprintComponent implements OnInit {
  @Input() profile;
  @Input() stockList
  constructor(private printService  :PrintService,private modalCtrl: ModalController) { }
  
  ngOnInit() {
    
    setTimeout(() => {
      this.pairTo();
    },1000);
  }

  pairTo() {
    console.log("stock"+this.stockList[0].name)
    var node = document.getElementById("imageToPrint");
    

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
          result
            .align('left')
            .image(img,552,ht,'threshold',180).newline().
            align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline().
            newline().newline().newline().newline().newline().newline().newline().newline().newline() ;
            this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
          console.log('print called');
          this.modalCtrl.dismiss();
        }
    }).catch(function (error) {
      console.error("oops, something went wrong!", error);
      alert(error);
      this.modalCtrl.dismiss();
    });
  }


}
