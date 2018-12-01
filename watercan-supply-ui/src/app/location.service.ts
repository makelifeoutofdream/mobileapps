import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationUrl='/location';
  stateUrl='/state'
  constructor(private httpClient : HttpClient) {


   }

   fetchStates():Observable<any>{
      return this.httpClient.get(environment.apiBaseUrl+this.locationUrl+this.stateUrl);
   }
}
