import { Component, Input } from '@angular/core';
import { Experiences } from '../../../experience';

@Component({
  selector: 'app-startbox',
  templateUrl: './startbox.component.html',
  styleUrls: ['./startbox.component.css'],
})
export class StartboxComponent {
  experinces: Array<string> = Experiences;
}
