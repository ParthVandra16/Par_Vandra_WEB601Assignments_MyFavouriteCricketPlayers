import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit  {
  contents = [
    {
      id: 1,
      title: 'Cricketer 1',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 1',
      cricketername: 'Hardik Pandya',
      type: 'Type 1',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      id: 2,
      title: 'Cricketer 2',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 2',
      cricketername: 'Virat Kholi',
      type: 'Type 2',
      tags: ['Tag 2', 'Tag 3']
    },
    {
      id: 3,
      title: 'Cricketer 3',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 3',
      cricketername: 'Shubhman Gill',
      type: 'Type 3',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      id: 4,
      title: 'Cricketer 4',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 4',
      cricketername: 'Rohit Sharma',
      type: 'Type 4',
      tags: ['Tag 4', 'Tag 5']
    },
    {
      id: 5,
      title: 'Cricketer 5',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 5',
      cricketername: 'Sachin Tendulkar',
      type: 'Type 5',
      tags: ['Tag 5', 'Tag 6']
    },
    {
      id: 6,
      title: 'Cricketer 6',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of crocketer 6',
      cricketername: 'Ishan kisan',
      type: 'Type 6',
      tags: ['Tag 6', 'Tag 7']
    },


  ];
  contentList: any;

  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  ngOnInit() {
  }
}
