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
      state('react', style({})),
      state('nextjs', style({})),
      state('svelte', style({})),
      state('angularjs', style({})),
      transition('* => *', [animate('3s')]),
    ]),
    trigger('imageChange', [
      state('react', style({})),
      state('nextjs', style({})),
      state('svelte', style({})),
      state('angularjs', style({})),
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
