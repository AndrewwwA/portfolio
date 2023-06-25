import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-startbox',
  templateUrl: './startbox.component.html',
  styleUrls: ['./startbox.component.css'],
  animations: [
    trigger('wordChange', [
      state(
        'react',
        style({
          color: 'aqua',
        })
      ),
      state(
        'nextjs',
        style({
          color: 'dimgrey',
        })
      ),
      state(
        'svelte',
        style({
          color: 'orange',
        })
      ),
      state(
        'angularjs',
        style({
          color: 'red',
        })
      ),
      transition('* => *', [animate('3s')]),
    ]),
    trigger('imageChange', [
      state(
        'react',
        style({
          border: '5px solid aqua',
          borderRadius: '10px',
          scale: '110%',
        })
      ),
      state(
        'nextjs',
        style({
          border: '5px solid dimgrey',
          borderRadius: '10px',
          scale: '110%',
        })
      ),
      state(
        'svelte',
        style({
          border: '5px solid orange',
          borderRadius: '10px',
          scale: '110%',
        })
      ),
      state(
        'angularjs',
        style({
          border: '5px solid red',
          borderRadius: '10px',
          scale: '110%',
        })
      ),
      transition('* => *', [animate('3s')]),
    ]),
  ],
})
export class StartboxComponent {
  currentWord = 'react';
  words = ['react', 'nextjs', 'svelte', 'angularjs'];
  index = 0;

  constructor() {
    setInterval(() => {
      this.index = (this.index + 1) % this.words.length;
      this.currentWord = this.words[this.index];
    }, 3000);
  }
}
