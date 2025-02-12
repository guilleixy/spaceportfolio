import { openwebinars, google, salesianos, efor } from "../assets/images";
import {
    pokeball,
    contact,
    css,
    ninja,
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
    figma,
    aws,
    rust
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
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Backend",
    },
    {
        imageUrl: rust,
        name: "Rust",
        type: "Backend",
    },
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
        date: "Nov 2023 - Mar 2024",
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
        iconUrl: figma,
        theme: 'btn-back-blue',
        name: 'Figma Clone',
        description: 'Built a Next Application that replicates Figma, with editing and real-time features.',
        githublink: 'https://github.com/guilleixy/figma-clone',
        livelink: 'https://figma-clone-three-tan.vercel.app/',
    },
    {
        iconUrl: ninja,
        theme: 'btn-back-black',
        name: 'Space Visualizer',
        description: 'Developed a VR application using NASA data to create environments of real planetary bodies with procedurally generated sounds based on their parameters. Presented at NASA Space Apps Challenge 2025.',
        // githublink: 'https://github.com/guilleixy/naruto-gsap',
    },
    {
        iconUrl: discord,
        theme: 'btn-back-pink',
        name: 'Discord PHP Clone',
        description: 'Created a PHP replica of the popular messaging platform "Discord", enabling users to chat, add friends and create servers.',
        githublink: 'https://github.com/guilleixy/discord',
    },
    {
        iconUrl: rust,
        theme: 'btn-back-red',
        name: 'Rust OS',
        description: 'Developed a minimalistic operating system from scratch using Rust, focusing on low-level system programming, memory management, and OS fundamentals.',
        githublink: 'https://github.com/guilleixy/blog_os',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-green',
        name: 'Spotify Metadata',
        description: 'Developed a Next.js application that leverages the Spotify API to provide users with metadata information about songs.',
        githublink: 'https://github.com/guilleixy/spotify-search-bar',
        livelink: 'https://spotify-metadata.vercel.app/',
    },

    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'sAIght',
        description: 'Python-based application designed to assist individuals with visual impairments. It leverages the power of Artificial Intelligence (AI) for object detection, providing real-time feedback about the surrounding environment.',
        githublink: 'https://github.com/guilleixy/saight',
        livelink: 'https://www.saight.es/',
    }
];