import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { profile } from 'console';
import { DbService } from '../services/db.service';
import { PrintService } from '../services/print.service';
import { Profile } from '../services/profile';
import { ToastserviceService } from '../services/toastservice.service';
import {ApplicationRef} from '@angular/core'
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  user : any={};
  type : string;
  bluetoothList:any=[];
  isUnitPEnable: any;
  printerSizes: any = [{
    name: '58mm',
    value: 368
  }, {
    name: '80mm',
    value: 552
  }, {
    name: 'a4',
    value: 3504
  }];
  paperSize: any;
  
  showProfileSegment : boolean=true;
  showTaxSegment : Boolean=false;
  showPrinterSegment : Boolean=false;
  showBackupSegment : boolean=true;
  private userProfile : Profile=  {id:null , companyName:"",companyNameInArabic:"", 
  addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",
  crNumber:"",toEmail:"",ccEmail:"",vat:null,
      selectedPrinter:null,
      selectedPrinterSize: null,
      canEnableUnit: false
    };
  constructor(public navCtrl:NavController,private print:PrintService,private toastService:ToastserviceService,
    private dbService:DbService,private ref: ApplicationRef,private plt:Platform,
    private file: File) { 
    this.type="profile";
    this.userProfile={id:null , companyName:"",companyNameInArabic:"", 
    addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",
    vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null,
       selectedPrinterSize: null, canEnableUnit: false
      };
    this.user.userProfile=this.userProfile;
  }

  ngOnInit() {
    this.type="profile";
    this.showHideSegment();
    this.listPrinter();
    
    //this.userProfile={id:null , companyName:"",companyNameInArabic:"", 
   // addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null};
     // this.user.userProfile=this.userProfile;
  }

  

  showHideSegment(){
    if(this.type=='profile'){
      this.showPrinterSegment=false;
      this.showProfileSegment=true;
      this.showTaxSegment=false;
      this.showBackupSegment=false;
    }else if(this.type=='tax'){
      this.showPrinterSegment=false;
      this.showProfileSegment=false;
      this.showTaxSegment=true;
      this.showBackupSegment=false;
    }else if(this.type=='printer'){
      this.showPrinterSegment=true;
      this.showProfileSegment=false;
      this.showTaxSegment=false;
      this.showBackupSegment=false;
    }else if(this.type=='backup'){
      this.showPrinterSegment=false;
      this.showProfileSegment=false;
      this.showTaxSegment=false;
      this.showBackupSegment=true;
    }
    //this.ref.tick();
  }
  ionViewWillEnter(){
    
    this.listPrinter();
    this.type="profile";
    this.showHideSegment();
    this.dbService.getProfile().then(data=>{
      this.userProfile=data
      this.user.userProfile=data;
    }  );
    if(this.userProfile==null || this.userProfile==undefined){
      this.userProfile={id:null , companyName:"",companyNameInArabic:"", canEnableUnit: false, selectedPrinterSize: '',
      addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null};
      this.user.userProfile=this.userProfile;
    }
    console.log("profile"+this.user.userProfile);
  }

  listPrinter(){
    if(this.plt.is('cordova')){
   this.print.searchBluetoothPrinter().then(resp=>{
      this.bluetoothList=resp;
      
    });
    /*this.print.listDevices().then(res=>{
      this.bluetoothList=res;
    })*/
  }
  

  }
  
  selectPrinter(macAddress:any){
    this.user.userProfile.selectedPrinter=macAddress;
    
  }

  setPaperSize(paper) {
    this.paperSize  = paper;
    this.user.userProfile.selectedPrinterSize = paper;
  }

  enableUnitP(event) {
      this.user.userProfile.canEnableUnit = event.target.checked;
  }

  updateProfile(){
    console.log("profile printer"+this.user.userProfile.selectedPrinter);
    this.dbService.createOrUpdateProfile(this.user.userProfile).then(data=>{
        if(data==null || data==undefined ){
          this.toastService.presentToast("Failed to update settings");  
        }else{
          this.user.userProfile=data;
          this.toastService.presentToast("Settings updated successfully");
        }
    }).catch(reason=>{
      this.toastService.presentToast("Failed to update settings");
    })
  }
  

  segmentChanged(evt:any){
    if(evt.detail.value=='profile'){
      this.type="profile";
    }else if(evt.detail.value=='tax'){
      this.type="tax";
    }else if(evt.detail.value=='printer'){
      this.type="printer";
    }

    this.dbService.getProfile().then(data=> {
      this.userProfile=data;
      this.paperSize = this.userProfile.selectedPrinterSize;
      this.isUnitPEnable = this.userProfile.canEnableUnit;
      });

    if(this.userProfile==null || this.userProfile==undefined){
      this.userProfile={id:null , companyName:"",companyNameInArabic:"", canEnableUnit: false, selectedPrinterSize: '',
      addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null};
      this.user.userProfile=this.userProfile;
     
    }
    this.showHideSegment();
  }

  savefile(){
    try{
      
    let backup:Blob;
    this.dbService.copyData().then(data=>{
      
      backup=data;
      this.file.createDir(this.file.externalDataDirectory, 'backup',true).then(data => {
      
        this.file.writeExistingFile(this.file.externalDataDirectory+'backup','easyinvoice.json',backup).then(data=>{
          alert('Backup created inside'+this.file.dataDirectory+'backup');
        })
      }).catch(err =>
        alert("failed to create "+JSON.stringify(err) ));
        
    }
    )
    
    }catch(err){
      alert(err);
    }
    
    
  } 
}
