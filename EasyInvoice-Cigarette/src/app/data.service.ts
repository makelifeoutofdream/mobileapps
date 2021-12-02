import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import * as XLSX from 'xlsx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
//import * as FileSaver from 'file-saver';
//import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import  {Papa} from 'ngx-papaparse';
import { ToastserviceService } from './services/toastservice.service';
import { Profile } from './services/profile';
import { DbService } from './services/db.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   cordova : any;
   headerRow : any[];
   csvData : any[];
   profile : Profile ;
  constructor(private papa:Papa,private plt:Platform,private file:File,private socialSharing : SocialSharing,private toastService:ToastserviceService
    ,private emailComposer:EmailComposer,private dbService:DbService) { }

  s2ab(s) {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  async exportToExcel(invoiceData, filename) {
    this.dbService.getProfile().then(data=>{
      this.profile=data;
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(invoiceData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    //XLSX.writeFile(wb, filename + '.xlsx');
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    let xslxBlob = new Blob([this.s2ab(wbout)],{type:"application/octet-stream"});
    this.file.writeFile(this.file.externalDataDirectory,filename,xslxBlob,{replace : true}).then(res=>{
      var email = {
        to: this.profile.toEmail,
        cc: this.profile.ccEmail,
        attachments: [this.file.externalDataDirectory+filename],
        subject: 'Invoice Report',
        body: 'Report',
        isHtml: true
      };
      this.emailComposer.open(email);
    })
    })
  }


  downloadCcSV(invoiceData,filename){
    let csvData=  this.papa.unparse({
      fields : [' Date,Invoice_Number,Item_Name,Unit_Price,Quantity,Customer,Tax,Total'],
      data : invoiceData
    });
    if(this.plt.is('cordova')){
      this.file.writeFile(this.file.externalDataDirectory,filename,csvData,{replace : true}).then(res=>{
       //   this.socialSharing.share(null,null,res.nativeURL,null).catch(reason=>{
            this.toastService.presentToast('File downloaded');    
         // });
      }).catch(reason=>{
        this.toastService.presentToast('Failed to download '+reason);
      })
    }else{
      var blob=new Blob([csvData]);
      var a=window.document.createElement('a');
      a.href=window.URL.createObjectURL(blob);
      a.download =filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    }
  }
  
}
