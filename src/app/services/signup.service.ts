import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from  "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public url:string = environment.api_url;
  constructor(private  httpClient:HttpClient) { }

  public signUpUser(inputObj:any){
    let signupUrl = this.url+'/SignUp/signup';
    return this.httpClient.post(signupUrl,inputObj);
  }

  public verifyUser(inputObj:any){
    let url = this.url+'/SignUp/otpVerified';
    return this.httpClient.post(url,inputObj);
  }

  public getMobileOTP(inputObj:any){
    let url = this.url+'/SignUp/getMobileOTP';
    return this.httpClient.post(url,inputObj);
  }

  public getEmailOTP(inputObj:any){
    let url = this.url+'/SignUp/getEmailOTP';
    return this.httpClient.post(url,inputObj);
  }

  public login(inputObj:any){
    let url = this.url+'/Login/login';
    return this.httpClient.post(url,inputObj);
  }
}
