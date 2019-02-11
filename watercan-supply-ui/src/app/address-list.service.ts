import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AddressListService {
  constructor(private httpClient : HttpClient) {

  }
  addressListUrl = '/address/';

  getAddressList(userId : string):Observable<any>{
    let params = new HttpParams().set('userId', userId);
      return this.httpClient.get(environment.apiBaseUrl+this.addressListUrl+'addressList',
        {params:params});
   }

}
