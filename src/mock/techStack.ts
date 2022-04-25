import {Tech} from "../tech-stack/types";

export const mockFetchTechStack: Tech[] = [
    {
        id: '1',
        name: 'Golang',
        docs: 'https://go.dev/',
        type: "Programming language",
        learning: 'https://go.dev/ \n https://go.dev/play/',
        privateProject: 'https://github.com/krukkrz/boiler',
        isCommercial: false,
        application: 'All business web apps, performance heavy applications'
    },
    {
        id: '2',
        name: 'ReactJS',
        docs: 'https://pl.reactjs.org/',
        type: "Framework",
        learning: 'https://egghead.io/q?q=react+js',
        isCommercial: true,
        application: 'Frontend'
    }
]