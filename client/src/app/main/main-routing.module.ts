import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { ProjectLandingComponent } from './project-landing/project-landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  // {
  //   path: 'blog',
  //   component: BlogLandingComponent
  // },
  {
    path: 'projects',
    component: ProjectLandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
