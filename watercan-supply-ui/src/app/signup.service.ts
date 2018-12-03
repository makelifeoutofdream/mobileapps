import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class SignupService {
  user: User;
  constructor(private httpClient : HttpClient) { }
  
  userUrl = 'user/'

  saveUser(user : User) :Observable<any> {
      
    return this.httpClient.post(environment.apiBaseUrl+this.userUrl,user);
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  

  getUsers(mobileNumber:string,password:string):Observable<any>{
 
     let params = new HttpParams()
                .set('mobileNumber', mobileNumber)
                .set('password', password);
    return this.httpClient.get(environment.apiBaseUrl+this.userUrl+'getUserByMobileNumberAndPassword',{params: params});
 }

  
}
