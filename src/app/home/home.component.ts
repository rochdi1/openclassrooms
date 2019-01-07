import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isAuth = false;
  lastUpdate = new Date();
  lastUpdate2 = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  appareils = [
    {
      name: 'Machine à laver2',
      status: 'éteint'
    },
    {
      name: 'Frigo2',
      status: 'allumé'
    },
    {
      name: 'Ordinateur2',
      status: 'éteint'
    }
  ];
    constructor(private _flashMessagesService: FlashMessagesService ) {
        setTimeout(
                  () => {
                    this.isAuth = true;
                  }, 4000
                  );
      }



    onAllumer() {
      this._flashMessagesService.show('On allume tout !', { cssClass: 'alert-success', timeout: 1000 });
      console.log('On allume tout !');
    }


}
