import { Injectable } from '@angular/core';
import { User } from './User';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {BehaviorSubject,Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private headers: HttpHeaders;

  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());


  
  _url='http://localhost:8080/gofootpathBack/com.zwayam.servlet/register';
  constructor( private _http: HttpClient) {
    this.headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:4200/",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    });
   }
  enroll(user:User){
    return this._http.post<{data:any}>(this._url,user
     ,
      { headers: this.headers });
  }

  login(email:string,password:string)
  {
   return this._http.post<{message:number,token:string}>("http://localhost:8080/greatoutdoor/login",{"email":email,"password":password});
  }

  getlogin(token:string) : void {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
    alert( localStorage.getItem('token'));
  }

}
