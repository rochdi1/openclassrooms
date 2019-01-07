import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() postName: string;
  @Input() postDescription: string;
  @Input() postStatus: string;

  constructor( private _flash: FlashMessagesService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.postStatus;
  }

  getColor() {
    if (this.postStatus === 'ok') {
      return 'green';
    } else if (this.postStatus === 'no') {
      return 'red';
    }
  }

  loveIt() {
    this._flash.show('love It!', { cssClass: 'alert-success', timeout: 1000 });

    console.log('love It');
  }

  dontLoveIt() {
    this._flash.show('dontLoveIt It!', { cssClass: 'alert-danger', timeout: 1000 });

    console.log('dontLoveIt It');
  }
}
