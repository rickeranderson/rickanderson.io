import { Component, OnInit } from '@angular/core';
import * as CommonActions from 'src/app/store/common-store/common.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CommonActions.SetViewText('About'))
  }

}
