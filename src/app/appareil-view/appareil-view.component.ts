import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  /* appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    console.log(this.appareils);
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  } */


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


  ngOnInit() {
  }
}
