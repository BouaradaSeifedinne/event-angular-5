import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SignupService {

  httpOptions:object;

  constructor(private http:HttpClient) { }

  signup (data:object , lang:string){
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': lang
      })
    };

    return this.http.post("http://127.0.0.1:3000/signup", data, this.httpOptions );
  }
}
