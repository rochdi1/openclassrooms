import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  postarrays = [
    {name: 'Mon premier post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
    {name: 'Mon deuxieme post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
    {name: 'Mon troisieme post', status: 'ok', descr: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'},
  ];

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
  }

}
