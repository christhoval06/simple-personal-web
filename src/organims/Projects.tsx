import * as React from 'react'

import { Section } from '@/molecules/Section'
import { Project } from '@/molecules/Project'

interface IProject {
    name: string
    url?: string
    info: Array<string>
}

const PROJECTS: Array<IProject> = [
    {
        name: 'Zinli App, ',
        url: 'https://zinli.com',
        info: ['react-native', 'flow+js', 'MST', 'Context API', 'Hooks'],
    },
    {
        name: 'CashCard La, ',
        url: 'https://cashcardla.com',
        info: ['react-native', 'python', 'graphQL', 'js', 'Styled Components'],
    },
    {
        name: 'Rugby Field, ',
        url: 'http://field.rugbypty.com/',
        info: ['React', 'mobx', 'materialUI', 'rugby', 'sport'],
    },
    {
        name: 'MemesPTY, ',
        url: 'http://memespty.com/',
        info: [
            'react-native',
            'Wordpress API',
            'Design System',
            'App',
            'kitten UI',
        ],
    },
    {
        name: 'Mapfre Te Cuida, ',
        info: ['App', 'iOS', 'API', 'Notifocations', 'switf'],
    },
    {
        name: 'REP Geo, ',
        info: ['React-Native', 'API', 'mesures', 'UI/UX'],
    },
    {
        name: 'Pool',
        info: ['js', 'c#', 'socket.io', 'mongodb'],
    },
]
export const Projects = () => (
    <Section title="recent projects">
        {PROJECTS.map((item: IProject) => (
            <Project key={item.name} {...item} />
        ))}
    </Section>
)

export default Projects
