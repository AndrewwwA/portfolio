import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  private resizeObserver!: ResizeObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const flexboxes =
      this.elementRef.nativeElement.querySelectorAll('.flexboxes');
    // console.log(flexboxes);
    // const secondText =
    //   this.elementRef.nativeElement.querySelectorAll('.secondText');

    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const target = entry.target as HTMLElement;
        // console.log(target.clientWidth);
        if (target.clientWidth > 300) {
          target.style.color = 'Purple';
          target.style.flexDirection = 'row';

          // target.style.paddingLeft = '0px';
          // target.style.transition = '.2s';
        } else if (target.clientWidth < 125) {
          target.style.alignItems = 'center';
          target.style.paddingLeft = '0px';
          target.style.transition = '.2s';
          target.style.flexDirection = 'column';
        } else {
          target.style.alignItems = '';
          target.style.color = '';
          target.style.flexDirection = 'column';

          target.style.paddingLeft = '';
          target.style.transition = '.2s';
        }
      }
    });

    for (let entry of flexboxes) {
      console.log(entry);
      this.resizeObserver.observe(entry);
    }
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }
}
