import { Post } from '../shared/models/post.model';
import { Project } from '../shared/models/project.model';
import { CommonSettings } from '../shared/models/common-settings.model';
import { About } from '../shared/models/about.model';

export interface AppState {
    posts: Post[];
    projects: Project[];
    common: CommonSettings;
    about: About;
}
