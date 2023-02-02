import {Component, Input} from '@angular/core';
import { Content } from '../helper-files/content-interface';
//import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: Content | undefined;

  constructor() {
    console.log(this.content);
  }

  onPress() {
    console.log('button pressed');
    console.log(this.content?.id, this.content?.title);
  }
}
