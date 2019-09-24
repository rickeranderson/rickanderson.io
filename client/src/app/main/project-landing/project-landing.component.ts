import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { Project } from 'src/app/shared/models/project.model';
import * as CommonActions from 'src/app/store/common-store/common.actions';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'project-landing',
  templateUrl: './project-landing.component.html',
  styleUrls: ['./project-landing.component.scss']
})
export class ProjectLandingComponent implements OnInit {

  projects$: Observable<Project[]>;
  searchTerm = '';
  repos = 'https://github.com/rickeranderson?tab=repositories';

  constructor(private store: Store<AppState>, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.goToGithubProjects();
    this.projects$ = this.store.select(x => x.projects);
    this.store.dispatch(new CommonActions.SetViewText('Projects'))
  }

  goToGithubProjects() {
    this.document.location.href = this.repos;
  }

  filterBySearchTerm(projects: Project[]): Project[] {
    let returnList: Project[] = [...projects];
    if ( this.searchTerm.length > 0) {
      returnList = projects.filter(x => x.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
    }
    return returnList;
  }

}
