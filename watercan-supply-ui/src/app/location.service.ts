import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationUrl='/location';
  stateUrl='/state'
  constructor(private httpClient : HttpClient) {


   }

   fetchStates(country : string):Observable<any>{
    let params = new HttpParams().set('country', country);
      return this.httpClient.get(environment.apiBaseUrl+this.locationUrl+this.stateUrl,
        {params:params});
   }
}
