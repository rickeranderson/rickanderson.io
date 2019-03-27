import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingComponent } from './blog-landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from 'src/app/store/common-store/common.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BlogLandingComponent', () => {
  let component: BlogLandingComponent;
  let fixture: ComponentFixture<BlogLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLandingComponent ],
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
    fixture = TestBed.createComponent(BlogLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
