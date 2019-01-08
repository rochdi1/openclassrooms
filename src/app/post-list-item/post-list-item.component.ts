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

   setSessionStorage(param, content) {
    this._flash.show(` ${param} == ${content}`, { cssClass: 'alert-danger', timeout: 1000 });
    this.localSt.store(`${param}`, `${content}`);
  }

  getSessionStorage() {
   // this._flash.show( this.localSt.retrieve( `${param}`) , { cssClass: 'alert-danger', timeout: 1000 });
    this.like = typeof this.localSt.retrieve(`like` + this.index) !== 'undefined' ? this.localSt.retrieve(`like` + this.index) : 0;
    // tslint:disable-next-line:max-line-length
    this.notLike = typeof this.localSt.retrieve( `notlike` + this.index) !== 'undefined' ? this.localSt.retrieve( `notlike` + this.index) : 0;

  }


  delSessionStorage(param) {
    this._flash.show( 'delete', { cssClass: 'alert-danger', timeout: 1000 });
    this.localSt.clear( `${param}`);
  }

  constructor(private _flash: FlashMessagesService, private localSt: LocalStorageService) {
    

  }


  ngOnInit() {
    this.getSessionStorage();
    console.log(this.like);
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

  console.log(this.index);
  console.log(this.localSt.retrieve(`Like${this.index}`));
    this.setSessionStorage( `Like${this.index}`, this.like);
    this.setSessionStorage( `notLike${this.index}`, this.notLike);

    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`  , { cssClass: 'alert-success', timeout: 1000 });

    console.log('love It');
  

  }

  dontLoveIt() {
    this.notLike = this.notLike + 1;
    this._flash.show(`I like :  ${this.like} / I dont Like :  ${this.notLike}`, { cssClass: 'alert-danger', timeout: 1000 });

    console.log('dontLoveIt It');
 
  }





}
