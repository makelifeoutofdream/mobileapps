import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public toastController:ToastController) { }


  async successToast(message:string){
    const toast=await this.toastController.create({
      message : message,
      duration : 2000,
      color : 'success'
    });
    toast.present();
  }


  

  async errorToast(message:string){
    const toast=await this.toastController.create({
      message : message,
      duration : 2000,
      color : 'danger'
    });
    toast.present();
  }
  handleError(error: any){
    console.log("error while calling service");
    this.errorToast("There is a problem with the service.Please try again later");
  }
}
