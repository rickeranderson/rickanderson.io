import * as CommonActions from './common.actions';
import { CommonSettings } from '../../shared/models/common-settings.model';
export type Action = CommonActions.All;

const defaultCommonSettingsState: CommonSettings = {
    currentView: 'Blog'
};

export function commonReducer(state = defaultCommonSettingsState, action: Action) {
    switch (action.type) {

        case CommonActions.GET_SETTINGS:
            return { ...state };

        case CommonActions.SET_VIEW_TEXT:
            return { ...state, currentView: action.payload}

        default:
            return state;
    }
}
