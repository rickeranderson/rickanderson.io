import { Action } from '@ngrx/store';

export const GET_PROJECTS = '[Projects GetProjects';
export class GetProjects implements Action {
    readonly type = GET_PROJECTS;
    constructor() { }
}

export type All
    = GetProjects;
