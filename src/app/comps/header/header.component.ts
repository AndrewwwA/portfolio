import { Component } from '@angular/core';

import {
  faComputerMouse,
  faMailReplyAll,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  faComputerMouse = faComputerMouse;
  faMailReplyAll = faMailReplyAll;
}
