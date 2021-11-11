import * as React from 'react';

import { Tab } from 'components/Tab';
import { ConstructionIcon } from 'components/Icons';
import { motion } from 'framer-motion';

import './Projects.css';

export interface ProjectsProps {

}

export interface ProjectsState {
    selectedProject: number 
}

const projects = [
    {
        id: 1,
        title: 'Zoey',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.392 36.313">
                <path id="Icon_awesome-robot" data-name="Icon awesome-robot" d="M0,18.157v9.078A2.267,2.267,0,0,0,2.27,29.5h2.27V15.887H2.27A2.267,2.267,0,0,0,0,18.157ZM32.909,6.809H24.965V2.27a2.27,2.27,0,0,0-4.539,0V6.809H12.483a5.672,5.672,0,0,0-5.674,5.674V31.774a4.543,4.543,0,0,0,4.539,4.539h22.7a4.543,4.543,0,0,0,4.539-4.539V12.483A5.672,5.672,0,0,0,32.909,6.809ZM18.157,29.5H13.617v-2.27h4.539Zm-2.27-8.511a2.837,2.837,0,1,1,2.837-2.837A2.836,2.836,0,0,1,15.887,20.994ZM24.965,29.5H20.426v-2.27h4.539Zm6.809,0H27.235v-2.27h4.539ZM29.5,20.994a2.837,2.837,0,1,1,2.837-2.837A2.836,2.836,0,0,1,29.5,20.994Zm13.617-5.107h-2.27V29.5h2.27a2.267,2.267,0,0,0,2.27-2.27V18.157A2.267,2.267,0,0,0,43.122,15.887Z" fill="#4a4a4a"/>
            </svg>
        )
    }, 
    {
        id: 2,
        title: 'Cloud Gaming',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.611 31.927">
                <g id="Group_92" data-name="Group 92" transform="translate(-680.571 -423.458)">
                    <path id="Icon_awesome-cloud" data-name="Icon awesome-cloud" d="M38.313,16.118a6.85,6.85,0,0,0-6.385-9.307,6.807,6.807,0,0,0-3.8,1.155A11.4,11.4,0,0,0,6.842,13.653c0,.192.007.385.014.577a10.265,10.265,0,0,0,3.407,19.947H36.488a9.122,9.122,0,0,0,1.824-18.059Z" transform="translate(680.571 421.208)" fill="#4a4a4a"/>
                    <path id="Union_1" data-name="Union 1" d="M4.284,10.394a1,1,0,0,1-1-1V6.94H1a1,1,0,0,1-1-1V4.453a1,1,0,0,1,1-1H3.284V1a1,1,0,0,1,1-1H5.771a1,1,0,0,1,1,1V3.453H9.055a1,1,0,0,1,1,1V5.94a1,1,0,0,1-1,1H6.771V9.394a1,1,0,0,1-1,1Z" transform="translate(688.391 438.68)" fill="#fff"/>
                    <g id="Group_91" data-name="Group 91" transform="translate(705.74 438.308)">
                    <circle id="Ellipse_43" data-name="Ellipse 43" cx="1.856" cy="1.856" r="1.856" transform="translate(4.455)" fill="#fff"/>
                    <circle id="Ellipse_45" data-name="Ellipse 45" cx="1.856" cy="1.856" r="1.856" transform="translate(0 3.712)" fill="#fff"/>
                    <circle id="Ellipse_46" data-name="Ellipse 46" cx="1.856" cy="1.856" r="1.856" transform="translate(8.91 3.712)" fill="#fff"/>
                    <circle id="Ellipse_44" data-name="Ellipse 44" cx="1.856" cy="1.856" r="1.856" transform="translate(4.455 7.425)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        )
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .15,
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        y: 10,
        transition: {
            duration: .3,
        }
    },
}

export class Projects extends React.Component<ProjectsProps, ProjectsState> {
    public constructor(props: ProjectsProps) {
        super(props);

        this.state = { selectedProject: 0 }
    }

    render() {
        return(
            <div className="Projects-wrapper">
                <div className="title-section">
                    <div className="tab-container">
                        <Tab content="Back" path="Home" />
                    </div>
                    <h1>Projects.</h1>
                    <ConstructionIcon />
                </div>
                <div className="projects-section">
                    <div className="projects-wrapper">
                        <div className="container-hole top-right"></div>
                        <motion.div className="projects"
                            variants={ container }
                            initial="hidden"
                            animate="show"
                        >
                            { projects.map(project => (
                                <motion.div key={project.id} className="project-wrapper"
                                    variants={item}
                                >
                                    <div className="project">
                                        { project.icon }
                                    </div>
                                </motion.div>
                            )) }
                        </motion.div>
                    </div>
                    <div className="container">
                        <div className="container-hole top-left"></div>
                    </div>
                </div>
            </div>
        )
    }
}