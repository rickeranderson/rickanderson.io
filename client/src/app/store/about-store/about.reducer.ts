import * as AboutActions from './about.actions';
import { About } from '../../shared/models/about.model';
import { AboutData } from '../../shared/data';
export type Action = AboutActions.All;

const defaultAboutState: About = AboutData;

export function aboutReducer(state = defaultAboutState, action: Action) {
    switch (action.type) {

        case AboutActions.GET_ABOUT:
            return { ...state };

        default:
            return state;
    }
}
