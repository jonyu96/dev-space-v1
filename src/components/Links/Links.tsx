import React from 'react';

import { motion } from 'framer-motion';

import './Links.css';

export interface LinksState {
}

export interface Social {
    icon: JSX.Element,
    url: string,
    name: string
}

const container = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      x: 10,
    }
  }

const SOCIAL_LINKS: Array<Social> = [
    {
        icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github">
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>,
        url: "https://github.com/jonyu96",
        name: "Github"
    },
    {
        icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin">
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>,
        url: "https://www.linkedin.com/in/jonathanyu96/",
        name: "LinkedIn"
    },
    {
        icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-codepen">
                <title>CodePen</title>
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
            </svg>,
            url: "https://codepen.io/jyu96",
            name: "Codepen"
    },
    {
        icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram">
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>,
        url: "https://www.instagram.com/jonathanyu__/",
        name: "Instagram"
    },
    {
        icon: <svg 
                xmlns="http://www.w3.org/2000/svg" 
                role="img"
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>,
        url: "mailto:jonathanjyu96@gmail.com",
        name: "Email"
    }
]

export class Links extends React.Component<{}, LinksState> {
    public constructor(props = {}) {
        super(props);
    }

    render() {
        return (
            <motion.ul 
                className="Links-list"
                variants={ container }
                initial="hidden"
                animate="show">
                { SOCIAL_LINKS.map((social: Social, index: number) => (
                    <li key={ index } className="Links-icon">
                        <a href={ social.url } aria-label={ social.name } target="_blank" rel="noreferrer">
                            { social.icon }
                        </a>
                    </li>
                ))}
            </motion.ul>
        )   
    }
}