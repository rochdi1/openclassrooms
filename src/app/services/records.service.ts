import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private api = '/api';
  constructor(private _http: HttpClient) { }



  getData() {
    console.log(`${this.api}/posts`);
    return this._http.get(`${this.api}/posts`);
  }
}
