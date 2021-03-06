import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EffectsModule } from '@ngrx/effects';

import { PostEffects } from './store/post-store/post.effects';
import { postReducer } from './store/post-store/post.reducer';

import { ProjectEffects } from './store/project-store/project.effects';
import { projectReducer } from './store/project-store/project.reducer';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonEffects } from './store/common-store/common.effects';
import { commonReducer } from './store/common-store/common.reducer';
import { aboutReducer } from './store/about-store/about.reducer';
import { AboutEffects } from './store/about-store/about.effects';
import { ClockComponent } from './navigation/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forRoot([PostEffects, ProjectEffects, CommonEffects, AboutEffects]),
    StoreModule.forRoot(
      {
        posts: postReducer,
        projects: projectReducer,
        common: commonReducer,
        about: aboutReducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
