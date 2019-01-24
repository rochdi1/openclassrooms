import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareil: any;
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for ( const appareil of this.appareils) {
      appareil.status = 'allumé';
      console.log(appareil.status);
    }
}

  switchOffAll() {
      for ( const appareil of this.appareils) {
        appareil.status = 'éteint';
        console.log(appareil.status);
      }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
  }

}

