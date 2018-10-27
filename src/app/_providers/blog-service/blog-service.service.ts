import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getuuid } from '../../utils/localStorage'

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  
  URL = 'https://webservices-sahil.herokuapp.com/blog_api/';
  
  const uuid = getuuid();
  
  constructor(private _http: HttpClient) { }
  
  getClients(){
    const url = this.URL + 'blogs/';
    return this._http.get(url,{
      params: {
        "uuid":uuid
      }
    });
  }
}
