import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app-state';
import { Post } from '../../shared/models/post.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.scss']
})
export class BlogLandingComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts$ = this.store.select(x => x.posts);
  }

}
