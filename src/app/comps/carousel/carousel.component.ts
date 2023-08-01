import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('wordChange', [
      state('react', style({})),
      state('nextjs', style({})),
      state('svelte', style({})),
      state('angularjs', style({})),
      transition('* => *', [animate('3s')]),
    ]),
  ],
})
export class CarouselComponent {
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
