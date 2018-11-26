import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navList = [
    {
      text: 'Blog',
      route: ''
    },
    {
      text: 'Projects',
      route: 'projects'
    },
    {
      text: 'About',
      route: 'about'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
