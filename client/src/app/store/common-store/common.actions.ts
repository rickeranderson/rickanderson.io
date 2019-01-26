import { Action } from '@ngrx/store';

export const GET_SETTINGS = '[Settings GetSettings';
export class GetSettings implements Action {
    readonly type = GET_SETTINGS;
    constructor() { }
}

export const SET_VIEW_TEXT = '[Settings SetViewText';
export class SetViewText implements Action {
    readonly type = SET_VIEW_TEXT;
    constructor(public payload: any) { }
}

export type All
    = GetSettings
    | SetViewText;
