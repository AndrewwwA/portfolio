import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuOpen: boolean = false;
  closeHam: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  getMenuvalue() {
    return this.menuOpen;
  }
  closeHamEvent() {
    console.log(this.closeHam);
    this.closeHam = !this.closeHam;
  }
}
