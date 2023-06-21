import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHamburgerToggle]',
})
export class HamburgerToggleDirective {
  @HostBinding('class.is-active')
  private isActive: boolean = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
