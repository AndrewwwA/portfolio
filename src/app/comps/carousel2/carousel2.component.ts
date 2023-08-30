import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component implements AfterViewInit {
  @ViewChild('content') elementView: ElementRef = new ElementRef(null);
  @ViewChild('small1') small1: ElementRef = new ElementRef(null);
  @ViewChild('large1') large1: ElementRef = new ElementRef(null);
  @ViewChild('small2') small2: ElementRef = new ElementRef(null);
  @ViewChild('large2') large2: ElementRef = new ElementRef(null);
  @ViewChild('small3') small3: ElementRef = new ElementRef(null);
  @ViewChild('large3') large3: ElementRef = new ElementRef(null);
  @ViewChild('small4') small4: ElementRef = new ElementRef(null);
  @ViewChild('large4') large4: ElementRef = new ElementRef(null);
  private resizeObserver!: ResizeObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // console.log(this.elementView);

    const slide = this.elementRef.nativeElement.querySelectorAll('#boxes');
    const background =
      this.elementRef.nativeElement.querySelectorAll('#purpleBG');

    this.resizeObserver = new ResizeObserver((projects) => {
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        if (project.target.clientHeight > 395) {
          const val = Number(
            project.target.attributes.getNamedItem('test').value
          );
          if (val === 1) {
            this.small1.nativeElement.style.display = 'none';
            this.large1.nativeElement.style.display = 'flex';
          }
          if (val === 2) {
            this.small2.nativeElement.style.display = 'none';
            this.large2.nativeElement.style.display = 'flex';
          }
          if (val === 3) {
            this.small3.nativeElement.style.display = 'none';
            this.large3.nativeElement.style.display = 'flex';
          }
          if (val === 4) {
            this.small4.nativeElement.style.display = 'none';
            this.large4.nativeElement.style.display = 'flex';
          }
          this.elementView.nativeElement.style.height = '1480px';
        } else {
          const val = Number(
            project.target.attributes.getNamedItem('test').value
          );
          if (val === 1) {
            this.small1.nativeElement.style.display = 'flex';
            this.large1.nativeElement.style.display = 'none';
          }
          if (val === 2) {
            this.small2.nativeElement.style.display = 'flex';
            this.large2.nativeElement.style.display = 'none';
          }
          if (val === 3) {
            this.small3.nativeElement.style.display = 'flex';
            this.large3.nativeElement.style.display = 'none';
          }
          if (val === 4) {
            this.small4.nativeElement.style.display = 'flex';
            this.large4.nativeElement.style.display = 'none';
          }
          this.elementView.nativeElement.style.height = '1240px';
        }
      }
    });

    for (let project of slide) {
      this.resizeObserver.observe(project);
    }
  }

  // console.log(elementView)
  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }
}
