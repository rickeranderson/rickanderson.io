import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  currentView: string;

  constructor(private store: Store<AppState>){
    this.store.select(x => x.common).subscribe(val => {
      this.currentView = val.currentView;
    });
  }
}
