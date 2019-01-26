import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'project-landing',
  templateUrl: './project-landing.component.html',
  styleUrls: ['./project-landing.component.scss']
})
export class ProjectLandingComponent implements OnInit {

  projects$: Observable<Project[]>;
  searchTerm = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.projects$ = this.store.select(x => x.projects);
  }

  filterBySearchTerm(projects: Project[]): Project[] {
    let returnList: Project[] = [...projects];
    if ( this.searchTerm.length > 0) {
      returnList = projects.filter(x => x.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
    }
    return returnList;
  }

}
