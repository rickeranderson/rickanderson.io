import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandingComponent } from './project-landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from 'src/app/store/common-store/common.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectLandingComponent', () => {
  let component: ProjectLandingComponent;
  let fixture: ComponentFixture<ProjectLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLandingComponent ],
      imports: [
        SharedModule,
        MaterialModule,
        StoreModule.forRoot({common: commonReducer}),
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
