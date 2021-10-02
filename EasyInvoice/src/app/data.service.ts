import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   cordova : any;

  constructor(private permission : AndroidPermissions) { }

  async exportToExcel(data,filename){
    this.permission.checkPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(data=>{
      console.log('Write Permission '+data);
      this.download(data,filename);
    }).catch(reason=>{
      this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(data=>{
        this.download(data,filename);
      }).catch(reason=>{
        alert('Permission Denied');
      })
    }) 

    

  }

  download(data,filename){
    const ws :XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,filename);
    const excelBuffer : any=XLSX.write(wb,{bookType : 'xlsx',type : 'array'});
    const content : Blob=new Blob([excelBuffer],{type:'.xlsx'});
    FileSaver.saveAs(content,filename+'.xlsx');
  }
}
