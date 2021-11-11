import React from 'react';
import Typist from 'react-typist';

import { MeIcon } from 'components/Icons';
import { Tab } from 'components/Tab';
import { motion } from 'framer-motion';

import './Home.css';

export interface HomeState {
    isLoading: boolean,
    showOutput: boolean
}

export interface HomeProps {
    onComplete: Function
}

const INTRO_OUTPUT = (  
    <div className="output">
        I am a developer based in Seattle, currently over at T-Mobile as a SWE. 
        Feel free to look around to learn more about me and the projects I've worked on!
    </div>
)

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .3,
        }
    }
}

const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 20 }
}

export class Home extends React.Component<HomeProps, HomeState> {
    public constructor(props: HomeProps) {
        super(props);       
        this.state = { isLoading: true, showOutput: false };

        this.doneHandler = this.doneHandler.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2500);
    }

    doneHandler() {
        this.setState({ showOutput: true });
    }

    render() {
        return (
            <div>
                <motion.div className="Home-wrapper"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div className="Home-title" variants={section}>
                        <div className="svg-container">
                            <MeIcon />
                        </div>
                        <div>
                            <span>Hi, my name is <h2>Jonathan Yu.</h2></span>
                            <h4 id="welcome">Welcome to my dev space!</h4>
                        </div>
                    </motion.div>

                    <motion.div className="container" id="terminal" variants={section}>
                        <div className="container-hole top-right"></div>
                        <div className="terminal-btns">
                            { [...Array(3)].map((x, i) => <span key={i} className="terminal-btn"></span> )}
                        </div>
                        <div className="terminal-shell">
                            <div className="input">
                                <span>$ ~ </span>
                                <Typist 
                                    startDelay={500}
                                    avgTypingDelay={30}
                                    cursor={{ show: false }}
                                    onTypingDone={ this.doneHandler }>
                                    <span>cat intro.txt</span>
                                </Typist>
                                <div className="cursor"></div>
                            </div>
                            { this.state.showOutput === true ? INTRO_OUTPUT : ''}
                        </div>
                    </motion.div>
                    
                    <motion.div className="tabs" variants={section} onAnimationComplete={ () => this.props.onComplete() } >
                        <Tab content="About Me" path="about"></Tab>
                        <Tab content="Experience" path="experience"></Tab>
                        <Tab content="Projects" path="projects"></Tab>
                    </motion.div>
                </motion.div>
            </div>
        );
    }
}