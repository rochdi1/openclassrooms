import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private _http: HttpClient) { }



  getData() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
