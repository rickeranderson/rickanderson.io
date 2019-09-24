import { Post } from './models/post.model';
import { Project } from './models/project.model';
import { About } from './models/about.model';

// yyyy-MM-dd
export const PostData: Post[] = [
    {
        title: 'Post title!!!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date('2018-11-26'),
        tags: [
            'Random',
            'Blah'
        ]
    }
];

export const ProjectData: Project[] = [
    {
        title: 'Portfolio Web',
        description: 'This very web site you are looking at right now! This project was created using the Angular 7.x framework and Angular Material',
        resources: [
            {
                key: 'Angular',
                value: 'https://angular.io/'
            },
            {
                key: 'Angular Material',
                value: 'https://material.angular.io/'
            }
        ],
        source: 'https://www.github.com',
        demo: 'http://www.rickanderson.io',
        languages: [
            'TypeScript'
        ]
    }
];

export const AboutData: About = {
    title: 'About Me',
    content: [
        'I am a software developer, recreational musician and amatuer CrossFit athlete.',
        'I reside in Boise, ID and in 2017 graduated with a BS in Computer Science from Boise State University. I then began working at Boise State University on the Web Development team developing both internal and public facing web applcations primarily in Typescript/Angular and C#.',
        'In my free time I enjoy playing around with languages and frameworks I have not used before and working on side projects.'
    ]
}
