import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent {
  @Input() position: string = '';
  @Input() image1: string = '';
  @Input() image2: string = '';
  @Input() alt1: string = '';
  @Input() alt2: string = '';
}
