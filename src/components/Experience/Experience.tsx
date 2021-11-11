import * as React from 'react';

import { Tab } from 'components/Tab';
import { AdventurerIcon } from 'components/Icons';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import './Experience.css';

export interface ExperienceProps {

}

export interface ExperienceState {
    currentIndex: number
}

const timelines = [
    {
        time: 'UW',
        role: 'Student',
        place: 'University of Washington',
        period: 'Sept 2014 - Jun 2019',
        details: [
            'Served in various positions for the Korean Student Association (KSA) for all five years including as President in 2017.',
            'Partipated in the DubHacks Hackathon in 2018 and 2019.',
            'Completed Computer Science at the Bothell campus with courses including Machine Learning and Computer Vision.',
        ]
    },
    {
        time: 'T-Mobile',
        role: 'Data Engineer',
        place: 'T-Mobile',
        period: 'Jun 2019 - Dec 2020',
        details: [
            'Developed and patented (Android) device testing automation process using Python scripts.',
            'Created T-Mobile Park user engagement analytics dashboard with Tableau.',
            'Designed team logo and dashboard prototype of network and user engagement insights/anlaytics using Adobe XD.',
            'Optimized query runs and data pipelines for dashboards using Bash & HiveQL scripts.',
            'Developed internal dashboard application (prototype) for cloud gaming analytics using Flask & Plotly library.'
        ]
    },
    {
        time: 'T-Mobile Part 2',
        role: 'Software Engineer',
        place: 'T-Mobile',
        period: 'Jan 2021 - current',
        details: [
            'Developed internal web application tool using Angular, Spring Boot and Cassandra stack.',
            'Designed and integrated UI for eSIM activation chatbot.',
        ]
    }
];

const spring = {
    type: "spring",
    stiffness: 300,
    damping: 35,
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .15,
        }
    },
    exit: { opacity: 0 }
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

export class Experience extends React.Component<ExperienceProps, ExperienceState> {
    constructor(props: ExperienceProps) {
        super(props);

        this.state = { currentIndex: 0 };

        this.selectTimeHandler = this.selectTimeHandler.bind(this);
    }

    selectTimeHandler(index: number) {
        this.setState({ currentIndex: index });
    }

    render() {
        const timeline = timelines[this.state.currentIndex];

        return (
            <div className="Experience-wrapper">
                <div className="title-section">
                    <div className="tab-container">
                        <Tab content="Back" path="Home" />
                    </div>
                    <h1>Experience.</h1>
                    <AdventurerIcon></AdventurerIcon>
                </div>
                <div className="timeline-section">
                    <AnimateSharedLayout>
                        <div className="timeline-picker">
                            {
                                timelines.map((timeline, index) => (
                                    <div key={index} className="timeline">
                                        <div className="time" style={{ opacity: index===this.state.currentIndex ? 1 : .5 }} 
                                            onClick={ () => this.selectTimeHandler(index) }>{ timeline.time }</div>
                                        {
                                            this.state.currentIndex === index && (
                                                <motion.div
                                                    layoutId="marker"
                                                    className="marker"
                                                    initial={false}
                                                    transition={spring}
                                                >
                                                </motion.div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </AnimateSharedLayout>
                    <div className="container" id="timeline-info">
                        <div className="title">
                            <div className="role">{ timeline.role }</div>
                            <div className="place">@ { timeline.place }</div>
                        </div>
                        <div className="period">{ timeline.period }</div>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div className="info"
                                key={ this.state.currentIndex }
                                variants={container}
                                initial="hidden"
                                animate="show">
                                {
                                    timeline.details.map((detail) => (
                                        <motion.div className="detail"
                                            variants={item}>
                                            <div className="detail-tab"></div>
                                            <div className="detail-text">
                                                { detail }
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </AnimatePresence>
                        <div className="container-hole bottom-right"></div>
                    </div>
                </div>
            </div>
        )
    }
}