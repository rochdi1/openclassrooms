import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  constructor(private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
  }

}
