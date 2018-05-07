import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrganisationService {

  constructor(private http:HttpClient) { }

  create (data) {
    return this.http.post("localhost:3000/organisation", data);
  }

}
