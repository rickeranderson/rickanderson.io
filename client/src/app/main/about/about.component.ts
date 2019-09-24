import { Component, OnInit, Inject } from '@angular/core';
import * as CommonActions from 'src/app/store/common-store/common.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about$: any;

  constructor(private store: Store<AppState>, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.about$ = this.store.select(x => x.about);
    this.store.dispatch(new CommonActions.SetViewText('About'))
  }

  goToGithub() {
    this.document.location.href = 'https://www.github.com/rickeranderson';
  }

}
