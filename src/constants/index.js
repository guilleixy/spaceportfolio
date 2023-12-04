import { openwebinars, google, salesianos, efor } from "../assets/images";
import {
    pokeball,
    contact,
    css,
    music,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    kotlin,
    php,
    bootstrap,
    nodejs,
    arcade,
    react,
    java,
    mysql,
    spotify,
    summiz,
    tailwindcss,
    discord,
    python,
    figma
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootsrap",
        type: "Frontend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Mobile",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Higher Technician in Multiplatform Application Development",
        company_name: "Nuestra Señora del Pilar, Salesianos",
        icon: salesianos,
        iconBg: "#fbc3bc",
        date: "September 2023 - May 2025",
        points: [
            "HTML, CSS, JavaScript.",
            "PHP, MySQL, DataBases.",
            "Amazon WebServices.",
            "XML.",
        ],
    },
    {
        title: "Certificate in User Experience (UX) Design",
        company_name: "Google Professional",
        icon: google,
        iconBg: "#accbe1",
        date: "Nov 2023 - Dec 2023",
        points: [
            "User Experience Design (UXD), User Experience (UX).",
            "UX Research.",
            "Prototype.",
            "Adobe XD, Mockup, Figma",
            "UX Design Projects, Page Layout."
        ],
    },
    {
        title: "Application Development with Web Technologies",
        company_name: "Efor",
        icon: efor,
        iconBg: "#b7e4c7",
        date: "Feb 2023 - Aug 2023",
        points: [
            "Designing and developing web applications using HTML, Javascript and CSS.",
            "Managing and maintaing Backend Services with PHP.",
            "Interacting with SQL databases with MySQLs.",
            "Creating and managing Rest APIs.",
        ],
    },
    { 
        title: "Brief Courses",
        company_name: "OpenWebinars",
        icon: openwebinars,
        iconBg: "#FFC4D9",
        date: "Sep 2023 - Present",
        points: [
            "Advanced Javascript: Asynchronity, Modules, ES6, ...",
            "Figma, Figma Wireframing, UI/UX.",
            "React.",
            "SQL.",
            "Kotlin"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: arcade,
        theme: 'btn-back-red',
        name: 'Interactive Arcade Web',
        description: 'Developed an arcade-themed web with loads of interactive elements and games like "Pacman" with live highscores using Node.JS.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: discord,
        theme: 'btn-back-pink',
        name: 'Discord PHP Clone',
        description: 'Created a PHP replica of the popular messaging platform "Discord", enabling users to chat, add friends and create servers.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: pokeball,
        theme: 'btn-back-blue',
        name: 'Pokemon Visualizer',
        description: 'Simple Web App with Three.js and React designed to interanct with 3D models of several Pokemon.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-green',
        name: 'Spotify Search Bar',
        description: 'Built a React application using the Spotify API for searching songs and artists and displaying information about them.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: music,
        theme: 'btn-back-black',
        name: 'Rock Band Web',
        description: 'Designed and programmed a simple web in plain HTML with CSS and Javascript for a Rock Band.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Vision Aid App',
        description: 'App that uses object detection AI and ChatGPT to help people with vision disabilities interact and recognize the enviroment.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];