import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { environment as env } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class CommonEffects {
    // apiBaseUrl: string = env.apiBaseUrl;

  constructor(private http: HttpClient,
    private actions$: Actions) {}

}
