import * as PostActions from './post.actions';
import { Post } from '../../shared/models/post.model';
import { PostData } from '../../shared/data';

export type Action = PostActions.All;

const defaultPostsState: Post[] = PostData;

export function postReducer(state = defaultPostsState, action: Action) {
    switch (action.type) {

        case PostActions.GET_POSTS:
            return [ ...state ];

        default:
            return state;
    }
}
