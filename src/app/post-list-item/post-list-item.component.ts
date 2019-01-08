import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../posts';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postsListItem: Posts;
  like = 0;
  notLike = 0;
  constructor(private _flash: FlashMessagesService) { }

  ngOnInit() {
  }

  getStatus() {
        if (this.like > this.notLike) {
          return 'ok';
        }
        if (this.like < this.notLike) {
          return 'no';
        }
        if (this.like === this.notLike) {
          return 'null';
        }

  }

  getColor() {
    if (this.like > this.notLike) {
      return 'green';
    } else if (this.like === this.notLike) {
      return 'gray';
    } else if (this.like < this.notLike) {
      return 'red';
    }
  }

  loveIt() {
    this.postsListItem.loveIts = this.postsListItem.loveIts + 1;
    this.like = this.postsListItem.loveIts;

    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`  , { cssClass: 'alert-success', timeout: 1000 });

    console.log('love It');

  }

  dontLoveIt() {
    this.notLike = this.notLike + 1;
    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`, { cssClass: 'alert-danger', timeout: 1000 });

    console.log('dontLoveIt It');
  }

}
