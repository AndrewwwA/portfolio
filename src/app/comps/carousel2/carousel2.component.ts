import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component implements AfterViewInit {
  @ViewChild('content') elementView: ElementRef = new ElementRef(null);
  private resizeObserver!: ResizeObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.elementView);

    const slide = this.elementRef.nativeElement.querySelectorAll('#boxes');
    const background =
      this.elementRef.nativeElement.querySelectorAll('#purpleBG');
    // console.log('dwadwaawdawdwawadadwad', slide);

    this.resizeObserver = new ResizeObserver((projects) => {
      for (let project of projects) {
        // console.log(project, 'background');

        const target = project.target as HTMLElement;
        // const backg = project.target as HTMLElement;
        // console.log(background);
        if (target.clientHeight > 395) {
          this.elementView.nativeElement.style.height = '1450px';
        } else {
          this.elementView.nativeElement.style.height = '1240px';
        }
        console.log(background);
        // console.log(target.clientWidth);
      }
    });

    for (let project of slide) {
      // console.log(project, 'testestest');
      this.resizeObserver.observe(project);
    }
  }

  // console.log(elementView)
  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }
}