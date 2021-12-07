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
  
  constructor(public printService : PrintService, public dbService:DbService,private modalCtrl: ModalController,) { }

  ngOnInit() {
     setTimeout(() => {
        this.pairTo();
      },1000);
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
            .image(img,520,ht,'threshold',128);
          this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
          console.log('print called');
          this.modalCtrl.dismiss();
        }
    }).catch(function (error) {
      console.error("oops, something went wrong!", error);
      this.modalCtrl.dismiss();
    });
  }

  

}
