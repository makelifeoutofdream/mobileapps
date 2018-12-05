import { Injectable } from '@angular/core';

import { Address } from './model/Address';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  
  constructor(private httpClient : HttpClient) {

   }
   addressUrl = '/address/';


   saveAddress(userId : string,address : Address): Observable<any>{
    let params = new HttpParams().set('userId', userId);
    console.log("url"+this.addressUrl);
    return  this.httpClient.post(environment.apiBaseUrl+this.addressUrl,{params:params});
   }
}
