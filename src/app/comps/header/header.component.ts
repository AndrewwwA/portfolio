import { Component, Directive, HostListener } from '@angular/core';
// import { slide as Menu } from 'react-burger-menu';
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
  // Declare a boolean variable to store the menu state
  menuOpen: boolean = false;

  // Define a function to toggle the menu state
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  faComputerMouse = faComputerMouse;
  faMailReplyAll = faMailReplyAll;
}
