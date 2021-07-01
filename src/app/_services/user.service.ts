import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../_model/visit';

const API_URL = 'http://localhost:8080/api/visit/';

const TOKEN = window.sessionStorage.getItem('auth-token');


const httpOptions ={
  headers:new HttpHeaders({'content-type' : 'application/json','Authorization':'Bearer '+TOKEN})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createVisit(visit:Visit):Observable<any>{
      return this.http.post(API_URL+'create',visit,httpOptions);
  }
}
