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
    let errorMessage="There was an issue with service.Please try again later";
    if(error.headers!=null && error.headers!=undefined){
      if(error.headers.get('errorText')!=null && error.headers.get('errorText')!=undefined)
      errorMessage=error.headers.get('errorText');
    }
    console.log("error while calling service"+errorMessage);

    this.errorToast(errorMessage);
  }
}
