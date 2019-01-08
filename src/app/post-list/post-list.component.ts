import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postarrays: Posts[];

/*
  postarrays = [
    {name: 'Mon premier post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
    {name: 'Mon deuxieme post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
    {name: 'Mon troisieme post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
  ];
*/
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor() { }

  ngOnInit() {
    this.postarrays = [
      new Posts(
        'Mon premier post',
         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
          1,
          new Date(2019, 1, 1)
          ),
          new Posts(
          'Mon deuxsieme post',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            1,
            new Date(2019, 2, 1)
            ),
            new Posts(
            'Mon troisieme post',
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
              1,
              new Date(2019, 3, 1)
              ),
    ];

  }

}
