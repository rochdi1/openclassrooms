import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../posts';
import { FlashMessagesService } from 'angular2-flash-messages';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postsListItem: Posts;

   @Input() index: number;



   like: number;
   notLike: number;

   setSessionStorage(param, content: number) {
    // this._flash.show(` ${param} == ${content}`, { cssClass: 'alert-success', timeout: 1000 });
    this.localSt.store(`${param}`, content);
  }

  getSessionStorage() {
    this.like = typeof this.localSt.retrieve(`like` + this.index) !== 'undefined' ? this.localSt.retrieve(`like` + this.index) : 0;
    // tslint:disable-next-line:max-line-length
    this.notLike = typeof this.localSt.retrieve( `notLike` + this.index) !== 'undefined' ? this.localSt.retrieve( `notLike` + this.index) : 0;

  }


  delSessionStorage(param) {
    this._flash.show( 'delete', { cssClass: 'alert-danger', timeout: 1000 });
    this.localSt.clear( `${param}`);
  }

  constructor(private _flash: FlashMessagesService, private localSt: LocalStorageService) {
    this.getSessionStorage();
  }


  ngOnInit() {
    this.like = 0;
    this.notLike = 0;
   // this.getSessionStorage();
    console.log(this.index + '--> like : ' + this.like);
    console.log(this.index + '--> notLike : ' + this.notLike);
    this.like = typeof this.localSt.retrieve(`like` + this.index) !== 'undefined' ? this.localSt.retrieve(`like` + this.index) : 0;
    // tslint:disable-next-line:max-line-length
    this.notLike = typeof this.localSt.retrieve( `notLike` + this.index) !== 'undefined' ? this.localSt.retrieve( `notLike` + this.index) : 0;
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
    this.like =  this.like + 1;
    console.log(this.localSt.retrieve(`Like${this.index}`));
    this.setSessionStorage( `Like${this.index}`, this.like);
    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`  , { cssClass: 'alert-success', timeout: 1000 });
    console.log('love It');
  }

  dontLoveIt() {
    this.notLike = this.notLike + 1;
    this.setSessionStorage( `notLike${this.index}`, this.notLike);
    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`, { cssClass: 'alert-danger', timeout: 1000 });
    console.log('dontLoveIt It');
  }

}
