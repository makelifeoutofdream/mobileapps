import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient : HttpClient) { }
  
  userUrl = 'user'

  saveUser(user : User):Observable<any>{
     return this.httpClient.post(environment.apiBaseUrl+this.userUrl,user);
  }

  
}
