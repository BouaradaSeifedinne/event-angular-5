import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http:HttpClient) { }

  hostConfig () {
    this.http.get('../assets/config/config.json').subscribe(
      res => {
        let config = {
          "host" : res['host'],
          "port": res['port']
        };
        

        console.log("configuration :"+res["host"]+":"+res["port"]);

        return config;
      },
      err => {
        console.log(err);
    });
  }


}
