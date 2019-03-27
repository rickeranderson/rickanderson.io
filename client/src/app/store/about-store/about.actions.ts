import { Action } from '@ngrx/store';

export const GET_ABOUT = '[About GetAbout]';
export class GetAbout implements Action {
    readonly type = GET_ABOUT;
    constructor() { }
}

export type All
    = GetAbout;
