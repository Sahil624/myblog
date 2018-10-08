import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  
  URL = 'https://webservices-sahil.herokuapp.com/blog_api/';

  constructor(private _http: HttpClient) { }
  
  getClients(){
    const url = this.URL + 'blogs/';
    return this._http.get(url);
  }
}
