import * as React from 'react'

import { Section } from '@/molecules/Section'
import { Project } from '@/molecules/Project'

interface IProject {
    name: string
    duration: string
    role: string
    url?: string
    info: Array<string>
    technologies: Array<string>
    summary: string
}

const PROJECTS: Array<IProject> = [
    {
        name: 'Alfamedic',
        duration: 'personal',
        url: undefined,
        role: 'Product Owner & Full Stack Developer',
        technologies: ['react', 'django', 'typescript', 'python', 'postgresql', 'websockets', 'rest-apis', 'zustand', 'react-query'],
        info: ['react', 'django', 'typescript', 'python', 'postgresql', 'websockets', 'rest-apis', 'zustand', 'react-query'],
        summary: 'Leading the design and development of Alfamedic, a medical platform aimed at modernizing healthcare access and workflows. Defined the architecture and user experience of core modules such as quick consultation, appointment scheduling, extended medical records, patient search, real-time chat, diagnostics, and treatment plans.'
      },
      {
        name: 'Multy App',
        duration: 'personal',
        url: undefined,
        role: 'Flutter Developer',
        technologies: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        info: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        summary: 'Designed and developed an educational mobile app for my son to learn multiplication tables interactively. Integrated animations and audio feedback to enhance engagement. Used ObjectBox for local persistence of progress and achievements.'
      },
      {
        name: 'Amigo – Loan Manager',
        duration: 'personal',
        url: undefined,
        role: 'Flutter Developer',
        technologies: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        info: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        summary: 'Built a mobile app to manage personal loans, including user registration, loan tracking, amortization tables, and visual dashboards for financial statistics. Implemented offline persistence using ObjectBox and dynamic data visualization with charts.'
      },
      {
        name: 'Rifa Manager',
        duration: 'personal',
        url: undefined,
        role: 'Flutter Developer',
        technologies: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        info: ['flutter', 'dart', 'provider', 'objectbox', 'charts', 'custom-widgets'],
        summary: 'Developed a raffle management app allowing users to create tómbolas, assign numbers, register buyers, and track ticket sales. Included a dashboard to view sold and pending numbers in real time and manage user profiles.'
      },
      {
        name: 'Mi Gente',
        duration: 'personal',
        url: undefined,
        role: 'Full Stack Developer',
        technologies: ['flutter', 'dart', 'flask', 'python', 'postgresql', 'qr-code', 'rest-apis'],
        info: ['flutter', 'dart', 'flask', 'python', 'postgresql', 'qr-code', 'rest-apis'],
        summary: 'Developed a mobile app used during election day to track and support voter engagement. Users could scan national ID cards via QR code to retrieve voter data and confirm if individuals had fulfilled their voting goal. The system integrated a Flask backend with PostgreSQL and exposed APIs consumed by the Flutter frontend.'
      },
    {
      name: 'Zinli App',
      duration: '5y',
      url: 'https://zinli.com',
      role: 'Lead Mobile Engineer',
      technologies: ['react-native', 'typescript', 'jest', 'msw', 'appcenter', 'jenkins', 'firebase', 'github-actions'],
      info: ['react-native', 'typescript', 'jest', 'msw', 'appcenter', 'jenkins', 'firebase', 'github-actions'],
      summary: 'Led the development and optimization of Zinli’s mobile application. Implemented atomic design, improved unit test coverage from 32% to 86%, and optimized CI/CD pipelines to reduce testing time. Managed a team of 12 developers and oversaw recruitment and onboarding processes.'
    },
    {
      name: 'Cash Card (Blue Banking LATAM)',
      duration: '2y',
      url: undefined,
      role: 'Full Stack Developer',
      technologies: ['python', 'django', 'celery', 'postgresql', 'graphql', 'flutter', 'viewflow', 'gitlab'],
      info: ['python', 'django', 'celery', 'postgresql', 'graphql', 'flutter', 'viewflow', 'gitlab'],
      summary: 'Developed backend workflows for a cash card system, including asynchronous task handling with Celery and BPM modeling using Viewflow. Created GraphQL APIs and supported the mobile app development. Worked closely with multiple roles for task authorization and background processing.'
    },
    {
      name: 'Loan Management System',
      duration: '3m',
      url: undefined,
      role: 'Flutter Developer',
      technologies: ['flutter', 'dart', 'objectbox', 'charts', 'custom-widgets'],
      info: ['flutter', 'dart', 'objectbox', 'charts', 'custom-widgets'],
      summary: 'Built a mobile app to manage personal loans, including features such as loan registration, amortization table generation, and visual analytics. Implemented offline persistence using ObjectBox and supported data visualization with dynamic charts.'
    },
    {
      name: 'ENA Panama App',
      duration: '6m',
      url: undefined,
      role: 'Mobile Developer',
      technologies: ['objective-c', 'java', 'php', 'mysql', 'cakephp', 'json', 'rest-apis'],
      info: ['objective-c', 'java', 'php', 'mysql', 'cakephp', 'json', 'rest-apis'],
      summary: 'Developed a mobile app for ENA (Empresa Nacional de Autopistas) that allowed users to manage their highway balance and recharge accounts. Integrated secure payment modules and implemented real-time balance queries via REST APIs.'
    },
    {
      name: 'SRLGC – AIG',
      duration: '8m',
      url: undefined,
      role: 'Full Stack Developer',
      technologies: ['php', 'laravel', 'cakephp', 'postgresql', 'symfony', 'javascript'],
      info: ['php', 'laravel', 'cakephp', 'postgresql', 'symfony', 'javascript'],
      summary: 'Built a web platform for online contract validation (refrendo) for the Panamanian government. Implemented secure document workflows, role-based access control, and digital signature validation.'
    },
    {
        name: 'Smart Status Workflow System',
        duration: '8m',
        url: undefined,
        role: 'Full Stack Developer',
        technologies: ['php', 'symfony', 'slimphp', 'javascript', 'html', 'css', 'postgresql'],
        info: ['php', 'symfony', 'slimphp', 'javascript', 'html', 'css', 'postgresql'],
        summary: 'Created a dynamic task delegation system ("Smart Status") used by government entities to automate and track document and task statuses across departments. Enabled hierarchical approval chains and notification systems.'
      },
      {
        name: 'Genetic Tracking Module – Farallon Aquaculture',
        duration: '6m',
        url: undefined,
        role: 'Software Developer',
        technologies: ['python', 'postgresql', 'objective-c', 'android', 'java'],
        info: ['python', 'postgresql', 'objective-c', 'android', 'java'],
        summary: 'Developed a module for genetic tracking and lineage management in shrimp production. Integrated with ERP and lab systems to automate genetic selection and reporting.'
      },
      {
        name: 'ERP System',
        duration: '4y',
        url: undefined,
        role: 'Full Stack Developer',
        technologies: ['python', 'postgresql', 'html', 'css', 'javascript', 'jquery'],
        info: ['python', 'postgresql', 'html', 'css', 'javascript', 'jquery'],
        summary: 'Designed and maintained a custom ERP for shrimp production companies. Modules included sales, inventory, hatchery control, and production reporting. Reduced paper use by implementing tablet-based mobile systems.'
      },
      {
        name: 'LogicStudio E-learning App',
        duration: '6m',
        url: undefined,
        role: 'Software Engineer',
        technologies: ['react-native', 'c#', '.net', 'xamarin', 'expressjs', 'socket.io'],
        info: ['react-native', 'c#', '.net', 'xamarin', 'expressjs', 'socket.io'],
        summary: 'Developed an interactive e-learning app used by Logitech Studio for training programs. Implemented real-time messaging and live class features using Socket.IO and web technologies.'
      },
      {
        name: 'Rugby Field',
        duration: 'personal',
        url: undefined,
        role: 'Frontend Developer',
        technologies: ['react', 'javascript', 'html5-canvas', 'combajs'],
        info: ['react', 'javascript', 'html5-canvas', 'combajs'],
        summary: 'Created a web application to design and manage rugby field lineups across multiple formats (Rugby 5, 7, 10, 13, 15). The app allows dynamic player arrangement, formation editing, and exporting the layout as a shareable image for social media. Integrated Canvas rendering using CombaJS and built interactive tools to save and reuse custom formations.'
      },
      {
        name: 'MemesPTY',
        duration: '8m',
        url: undefined,
        role: 'Mobile Developer',
        technologies: ['react-native', 'javascript', 'expo', 'canvas'],
        info: ['react-native', 'javascript', 'expo', 'canvas'],
        summary: 'Developed a mobile app for creating personalized memes by adding custom text and stickers to images. Users can generate and download images optimized for social media sharing. Built with React Native using Canvas-based image composition for cross-platform compatibility.'
      },
      {
        name: 'Mafre Te Cuida',
        duration: '6m',
        url: undefined,
        role: 'iOS Developer',
        technologies: ['swift', 'rest-apis', 'urlsession', 'push-notifications'],
        info: ['swift', 'rest-apis', 'urlsession', 'push-notifications'],
        summary: 'Developed a native iOS app for Mafre Insurance to allow users to manage their insurance policies and payments. The app featured custom reminders and push notifications for due dates. Integrated directly with Mafre’s internal services hosted on their servers, ensuring secure access to policy data.'
      },
      {
        name: 'RepGeo',
        duration: '4m',
        url: undefined,
        role: 'Mobile Developer',
        technologies: ['react-native', 'java', 'rest-apis', 'argis', 'geolocation', 'gps'],
        info: ['react-native', 'java', 'rest-apis', 'argis', 'geolocation', 'gps'],
        summary: 'Developed a mobile app to assist in civil engineering assessments by using the device’s geolocation (latitude and longitude) to calculate recommended excavation depth. The app consumed geospatial data via a Java backend connected to ArGIS services, providing real-time terrain analysis for building site planning.'
      },
      {
        name: 'Pool',
        duration: '1m',
        url: undefined,
        role: 'Full Stack Developer',
        technologies: ['react', 'javascript', 'socket.io', 'expressjs', 'qr-code', 'otp'],
        info: ['react', 'javascript', 'socket.io', 'expressjs', 'qr-code', 'otp'],
        summary: 'Built a real-time Q&A web platform for live events, inspired by Slido. Participants could scan a QR code or enter a 4-character OTP to anonymously submit and vote on questions. Questions were ranked by popularity, and moderators had access to a live control panel to manage content during the event. Implemented using WebSockets for instant updates and a clean React-based UI.'
      },
      {
        name: 'Pool v2 (.NET)',
        duration: '1m',
        url: undefined,
        role: 'Full Stack Developer',
        technologies: ['c#', 'asp.net', 'iis', 'websocket', 'long-polling', 'javascript'],
        info: ['c#', 'asp.net', 'iis', 'websocket', 'long-polling', 'javascript'],
        summary: 'Migrated the original Pool web app to a .NET-based architecture for enhanced performance and scalability. Rebuilt the backend using ASP.NET, hosted on IIS, implementing real-time communication with WebSocket and Long Polling fallbacks. Preserved core functionality including anonymous Q&A, voting, OTP/QR access, and moderator control panel, with improved connection stability under load.'
      },
      {
        name: 'GitStats',
        duration: '4w',
        url: undefined,
        role: 'Contributor',
        technologies: ['python', 'bash', 'alpinejs', 'git'],
        info: ['python', 'bash', 'alpinejs', 'git'],
        summary: 'Contributed to the modernization and extension of GitStats, an open source analytics tool for Git repositories. Enhanced support for GitHub integration and added new metrics such as commit trends, contributors per branch, semantic versioning tags, and code growth. The tool provides a clean dashboard for evaluating project health and activity using lightweight technologies.'
      },
      {
        name: 'MBCard – Metrobus Panama',
        duration: 'personal',
        url: undefined,
        role: 'Mobile Developer',
        technologies: ['java', 'objective-c', 'web-scraping', 'http-parsing'],
        info: ['java', 'objective-c', 'web-scraping', 'http-parsing'],
        summary: 'Developed a cross-platform mobile app to check the balance of Metrobús Panama cards using web scraping. Users could store multiple card numbers and refresh balances with a single tap. Implemented HTTP parsing logic to retrieve and display data from the official transit system website in a clean mobile interface.'
      },
      {
        name: 'MBCard Backend Service',
        duration: '2w',
        url: undefined,
        role: 'Backend Developer',
        technologies: ['python', 'flask', 'beautifulsoup4', 'http-requests', 'openapi'],
        info: ['python', 'flask', 'beautifulsoup4', 'http-requests', 'openapi'],
        summary: 'Built a backend service to support the MVCard mobile app, providing balance validation, recharge statistics, and transaction history for Metrobús Panama cards. Used web scraping with BeautifulSoup4 to extract data from the official site and served it via a Flask API to mobile clients. Enabled secure multi-card support and real-time data retrieval.'
      }
      
  ];

export const Projects = () => (
    <Section title="recent projects">
        {PROJECTS.map((item: IProject, index) => (
            <Project key={item.name} {...{...item, name: `${item.name}${index < PROJECTS.length -1 ? ', ': '.'}`}} />
        ))}
    </Section>
)

export default Projects
