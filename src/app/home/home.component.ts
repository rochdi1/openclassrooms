import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AppareilService } from '../services/appareil.service';

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
  appareils = this.appareilService.appareils;

    constructor(private _flashMessagesService: FlashMessagesService, private appareilService: AppareilService  ) {
        setTimeout(
                  () => {
                    this.isAuth = true;
                  }, 4000
                  );
      }



    onAllumer() {
      this.appareilService.switchOnAll();
      this._flashMessagesService.show('On allume tout !', { cssClass: 'alert-success', timeout: 1000 });
      console.log('On allume tout !');
    }

    onEteindre() {
      if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
  }

}


