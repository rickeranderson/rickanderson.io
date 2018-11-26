import { Post } from './models/post.model';

// yyyy-MM-dd
export const PostData: Post[] = [
    {
        title: 'Post title!!!',
        content: 'This is what I\'m writing about',
        date: new Date('2018-11-26'),
        tags: [
            'Random',
            'Blah'
        ]
    }
];
