import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }

  proFile (){
    return this.http.get("http://127.0.0.1:3000/profile");
  }
}
