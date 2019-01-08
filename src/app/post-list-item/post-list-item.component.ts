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

  constructor(private _flash: FlashMessagesService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.postsListItem.loveIts;
  }

  getColor() {
    if (this.postsListItem.loveIts >= 1) {
      return 'green';
    } else if (this.postsListItem.loveIts < 1) {
      return 'red';
    }
  }

  loveIt() {
    this.postsListItem.loveIts = this.postsListItem.loveIts + 1;
    this._flash.show(`I like :  ${this.postsListItem.loveIts}`  , { cssClass: 'alert-success', timeout: 1000 });

    console.log('love It');

  }

  dontLoveIt() {
    this.postsListItem.loveIts = this.postsListItem.loveIts - 1;
    this._flash.show(`I dont Like :  ${this.postsListItem.loveIts}`, { cssClass: 'alert-danger', timeout: 1000 });

    console.log('dontLoveIt It');
  }

}
