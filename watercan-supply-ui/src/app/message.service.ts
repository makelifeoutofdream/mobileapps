import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { ErrorResponse } from './model/ErrorResponse';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  response : ErrorResponse;
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
  handleError(error: HttpErrorResponse){
    
    console.log("error while calling service"+error.headers.get('errorText'));

    this.errorToast(error.headers.get('errorText'));
  }
}
