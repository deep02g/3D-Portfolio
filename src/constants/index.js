import { meta, shopify, starbucks, tesla, lakehead, GDSC } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    
    
   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Student Library Assistant",
        company_name: "Lakehead University",
        icon: lakehead,
        iconBg: "#accbe1",
        date: "February 2022 – April 2024",
        points: [
            "Engaged professionally with patrons while assisting them with locating materials and using library resources, delivering the highest-level customer service and experience.",
            "Collaborated with other library personnel to process new materials which consisted of shelving, to ensure timely availability for patrons.",
            "Addressed and resolved patron inquiries regarding policies, procedures, and services, strengthening community relations and promoting a positive image of the library.",
            "Utilized library management software, ALMA & OMNI to streamline tasks such as check-ins, check-outs, and reservation requests."
        ],
    },
    {
        title: "Vice-Lead",
        company_name: "Google Developer Student Club (GDSC), Lakehead University",
        icon: GDSC,
        iconBg: "#fbc3bc",
        date: "September 2023 – October 2024",
        points: [
            "Spearheaded the launch of the Google Developer Student Club at Lakehead University, successfully recruited over 100 members within the first year.",
            "Orchestrated a series of 12 workshops on key technologies like Android development and Git, attended by over 80% of club members, significantly boosting their practical skills and readiness for tech roles.",
            "Fostered a vibrant community platform, uniting over 100 technologically driven students to exchange ideas and harness Google's vast educational resources."
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
        link: 'https://github.com/deep02g',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/deep0211/',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'Investing Planner Portfolio',
        description: 'Built a cross-platform investment portfolio tracker using React Native and Expo, featuring real-time stock data via RESTful APIs and SQLite database management for portfolio tracking and financial goals.',
        link: 'https://github.com/deep02g/investing-planner-portfolio',
        date: 'December 2024',
        stack: 'React Native, Expo, SQLite',
    },
    {
        iconUrl: html,
        theme: 'btn-back-yellow',
        name: 'Sushi Website',
        description: 'Built a responsive restaurant website using vanilla JavaScript and CSS3, featuring interactive food menu filtering, smooth scroll animations with AOS library, and mobile-first design with comprehensive media queries across 5 breakpoints for optimal cross-device experience.',
        link: 'https://github.com/deep02g/sushi-website',
        date: 'January 2025',
        stack: 'HTML5, CSS3, JavaScript, Vite',
    },
];