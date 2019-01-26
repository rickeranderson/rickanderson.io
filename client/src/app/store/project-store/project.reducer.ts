import * as ProjectActions from './project.actions';
import { ProjectData } from '../../shared/data';
import { Project } from 'src/app/shared/models/project.model';

export type Action = ProjectActions.All;

const defaultProjectsState: Project[] = ProjectData;

export function projectReducer(state = defaultProjectsState, action: Action) {
    switch (action.type) {

        case ProjectActions.GET_PROJECTS:
            return [ ...state ];

        default:
            return state;
    }
}
