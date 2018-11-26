import { Action } from '@ngrx/store';

export const GET_POSTS = '[Post] GetPosts';
export class GetPosts implements Action {
    readonly type = GET_POSTS;
    constructor() { }
}

export type All
    = GetPosts;
