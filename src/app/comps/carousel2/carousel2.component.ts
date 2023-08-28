import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component implements AfterViewInit {
  private resizeObserver!: ResizeObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const slide = this.elementRef.nativeElement.querySelectorAll('#boxes');
    // console.log('dwadwaawdawdwawadadwad', slide);

    this.resizeObserver = new ResizeObserver((projects) => {
      for (let project of projects) {
        const target = project.target as HTMLElement;
        console.log(target.clientHeight);
        if (target.clientHeight > 395) {
          target.style.display = 'Hidden';
        } else {
          target.style.backgroundColor = '';
        }
        // console.log(target.clientWidth);
      }
    });

    for (let project of slide) {
      // console.log(project, 'testestest');
      this.resizeObserver.observe(project);
    }
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }
}
