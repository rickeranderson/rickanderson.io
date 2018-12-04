import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { ProjectLandingComponent } from './project-landing/project-landing.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogLandingComponent, ProjectLandingComponent, AboutComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MainModule { }
