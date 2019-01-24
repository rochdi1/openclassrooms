import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordsService } from '../services/records.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  records: any;
  constructor(private myHttpservice: RecordsService) { }

  ngOnInit() {
  this.myHttpservice.getData().subscribe(data => {
    this.records = data;
    });
  }


}
