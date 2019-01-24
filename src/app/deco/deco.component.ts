import { Component, OnInit } from '@angular/core';

/**
 * Makes code easy to read and maintain
 */


function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  const original = descriptor.value;
  descriptor.value = function() {
    console.log('this function was hacked! (Deocorator log)');
  };

   return descriptor;
  //  return original;
}

function log2(target, name, descriptor) {
  // console.log(target, name, descriptor);
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log('Argument', args, ' were passed in this function');
    const result = original.apply(this, args);
    console.log('the result og the function is ', result);
    return result;
  };

   return descriptor;
}


@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.scss']
})

export class DecoComponent implements OnInit {

  constructor() {
    this.aSimpleMethode();
   console.log('this the aSimpleMethode2(5, 2): ', this.aSimpleMethode2(5, 2));
  }

  i = 0;
  samevar = Math.random();

  @log
  aSimpleMethode() {
    console.log('hey There!');
  }


  @log2
  aSimpleMethode2(a, b) {
   return a * b;
  }
  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`);
  }


  ngOnInit() {
    setInterval(() => {
      this.samevar = Math.random();
    }, 1000);
  }

}
