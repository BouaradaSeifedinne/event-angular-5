import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogoutService {

  constructor(private http:HttpClient) { }

  logout (){
    return this.http.get("http://127.0.0.1:3000/logout");
  }

}
