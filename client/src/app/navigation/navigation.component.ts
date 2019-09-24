import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navList = [
    // {
    //   text: 'Blog',
    //   route: 'blog'
    // // },
    // {
    //   text: 'Projects',
    //   route: 'projects'
    // },
    {
      text: 'About',
      route: 'about'
    }
  ];

  repos = 'https://github.com/rickeranderson?tab=repositories';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  goToGithubProjects() {
    this.document.location.href = this.repos;
  }

}
