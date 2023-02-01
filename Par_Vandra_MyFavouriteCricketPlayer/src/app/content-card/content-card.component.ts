import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  CricketerListArray=new ContentList();
  ngOnInit(){

    const CricketOne:Content={
      id: 1,
    title: 'MS Dhoni',
    description: 'Indian Cricket team captain',
    cricketername: 'Virat Kohli'
      //imageUrl:'https://angular.io/assets/images/logos/angular/angular.png',

    }
    this.CricketerListArray.AddCricketerFunction(CricketOne);

  }
}
