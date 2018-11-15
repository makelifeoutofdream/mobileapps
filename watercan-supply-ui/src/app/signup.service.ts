import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient : HttpClient) { }
  
  userUrl = 'user'

  saveUser(user : User):Observable<any>{
     return this.httpClient.post(environment.apiBaseUrl+this.userUrl,user);
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers():Observable<any>{
    return this.httpClient.get(environment.apiBaseUrl+this.userUrl).pipe(map(this.extractData));
 }

  
}
