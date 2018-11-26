import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { ProjectLandingComponent } from './project-landing/project-landing.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [BlogLandingComponent, ProjectLandingComponent, AboutComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
