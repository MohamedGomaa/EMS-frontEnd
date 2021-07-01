import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Signin } from '../_model/signin';
import { Signup } from '../_model/signup';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8083/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'content-type' : 'application/json'})
}

signin: Signin;
signup: Signup;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(signin:Signin):Observable<any>{
    return this.http.post(AUTH_API+'signin',signin,httpOptions);
  }

  register(signup:Signup):Observable<any>{
      return this.http.post(AUTH_API+'signup',signup,httpOptions);
  }
}
