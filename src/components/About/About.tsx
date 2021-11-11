import * as React from 'react';

import { Tab } from 'components/Tab';
import { Technologies, InfoIcon, EngineerIcon } from 'components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

import './About.css';

export interface AboutProps {

}

export interface AboutState {
    aboutIndex: number,
    aboutDirection: number,
    techIndex: number,
    techDirection: number,
}

const ABOUT_ME_ONE = (
    <div>
        Hi! My name is Jonathan. As a developer, I enjoy the 
        <b> creative aspect in designing the UI/UX and bringing it to life using frameworks. </b>
        Working on the front-end, I am always looking to find new ways to create how an application looks and feels!
    </div>
)

const ABOUT_ME_TWO = (
    <div>
        Aside from my tech side, <b>I am a big tennis fanatic! </b> 
        I also maintain an active lifestyle with golf, running, and lifting to offset my obsession with Korean fried chicken and donuts.
        When I feel lazy, I play the piano and annoy my chubby Australian Shepherd. 
    </div>
)


// Variants
const center = {
    enter: (direction: number) => {
      return {
        scale: .5,
        x: direction > 0 ? 50 : -50
      };
    },
    center: {
        scale: 1,
        x: 0
    }
};

const left = {
    enter: (direction: number) => {
        return {
            opacity: direction > 0 ? 1 : 0,
            scale: direction > 0 ? 1 : .5,
            x: direction > 0 ? 50 : -10,
        }
    },
    center: (direction: number) => {
        return {
            opacity: direction > 0 ? 1 : 1,
            scale: .5,
            x: 0,
        }
    }
}

const right = {
    enter: (direction: number) => {
        return {
            opacity: direction > 0 ? 0 : 1,
            scale: direction > 0 ? .5 : 1,
            x: direction > 0 ? 10 : -50
        }
    },
    center: (direction: number) => {
        return {
            opacity: direction > 0 ? 1 : 1,
            scale: .5,
            x: 0
        }
    }
}

const bar = {
    fill: (index: number) => {
        return {
            background: '#9AD880',
            transition: {
                delay: index * .1,
            }
        }
    }
}

export class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);
        
        this.state = { aboutIndex: 0, aboutDirection: 0, techIndex: 0, techDirection: 0 };

        this.aboutHandler = this.aboutHandler.bind(this);
        this.techHandler = this.techHandler.bind(this);
    } 

    aboutHandler(index: number): void {
        let direction: number = index > this.state.aboutIndex ? 1 : -1;

        this.setState({ aboutIndex: index, aboutDirection: direction });
    }

    techHandler(direction: number): void {
        const nextIndex = this.state.techIndex + direction;

        if (nextIndex >= 0 && nextIndex < Technologies.length) {
            this.setState((prevState) => {
                return ({
                    techIndex: prevState.techIndex + direction,
                    techDirection: direction
                })
            });
        }
    }

    renderAbout() {
        switch(this.state.aboutIndex) {
            case 0:
                return ABOUT_ME_ONE;
            case 1:
                return ABOUT_ME_TWO;
        }
    }

    render() {
        return (
            <div className="About-wrapper">
                <div className="title-section">
                    <div className="tab-container">
                        <Tab content='Back' path='Home'></Tab>
                    </div>
                    <h1>About Me.</h1>
                    <EngineerIcon />
                </div>

                <div className="container" id="about">
                    <div className="container-hole top-left"></div>
                    <div className="toggles">
                        { [ ...Array(2) ].map((value, index) => 
                            <div key={ index } 
                                className={`toggle ${this.state.aboutIndex===index ? "toggle-on" : ""}`}
                                onClick={ () => this.aboutHandler(index) }></div>     
                        )}
                    </div>
                    <AnimatePresence initial={false} custom={this.state.aboutDirection} exitBeforeEnter>
                        <motion.div className="about-section"
                            key={this.state.aboutIndex}
                            custom={this.state.aboutDirection}
                            initial={{ x: this.state.aboutDirection > 0 ? 15 : -15 }}
                            animate={{ x: 0 }}
                        >
                            { this.renderAbout() }
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container" id="technologies">
                    <div className="container-hole top-right"></div>
                    <div className="row-one">
                        <span className="container-title">Technologies</span>
                    </div>
                    <div className="row-two">
                        <div id="technology-pane">
                            <div className="technology-icons">
                                <div className="container-hole bottom-left"></div>
                                <AnimatePresence initial={false} custom={this.state.techDirection} exitBeforeEnter>
                                    <motion.div
                                        onClick={ () => this.techHandler(-1) }
                                        className="left"
                                        key={this.state.techIndex - 1}
                                        custom={this.state.techDirection}
                                        variants={left}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.5 }
                                        }}
                                    >
                                        { this.state.techIndex - 1 >= 0 ? Technologies[this.state.techIndex - 1].icon: '' }
                                    </motion.div>

                                    <motion.div 
                                        className="center"
                                        key={this.state.techIndex}
                                        custom={this.state.techDirection}
                                        variants={center}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            opacity: { duration: 0.2 },
                                        }}
                                    >
                                        { Technologies[this.state.techIndex].icon }
                                    </motion.div>

                                    <motion.div
                                        onClick={ () => this.techHandler(1) }
                                        className="right"
                                        key={this.state.techIndex + 1}
                                        custom={this.state.techDirection}
                                        variants={right}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}>
                                        { this.state.techIndex + 1 < Technologies.length && Technologies[this.state.techIndex + 1].icon }
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="technology-name">
                                { Technologies[this.state.techIndex].name }
                            </div>
                        </div>
                        <div id="stats-pane">
                            <div className="pane-title">
                                <span>Stats</span>
                                <div className="info-icon">
                                    <InfoIcon />
                                    <div className="tooltip">
                                        <span style={{ marginRight: '.3rem' }}><strong>Lvl = </strong>Level</span>
                                        <span><strong>Exp = </strong>Experience</span>
                                    </div>
                                </div>
                                <div className="container-hole bottom-right"></div>
                            </div>
                            <div className="stats">
                                <div className="stats-lvl">
                                    <div className="lvl-title">Lvl:</div>
                                    <div className="stat-bars">
                                        { [ ...Array(6)].map((value, index) => {
                                            if (index < Technologies[this.state.techIndex].lvl) {
                                                return (
                                                    <motion.div key={index} className="stat-bar"
                                                        custom={index}
                                                        animate="fill"
                                                        variants={bar}
                                                    >
                                                    </motion.div>
                                                )
                                            } else {
                                                return (
                                                    <div className="stat-bar"></div>
                                                )
                                            }})
                                        }
                                    </div>
                                </div>
                                <div className="stats-exp">
                                    <div className="exp-title">Exp:</div>
                                    <div className="stat-bars">
                                        { [ ...Array(6)].map((value, index) => {
                                            if (index < Technologies[this.state.techIndex].exp) {
                                                return (
                                                    <motion.div key={index} className="stat-bar"
                                                        custom={index}
                                                        animate="fill"
                                                        variants={bar}
                                                    >
                                                    </motion.div>
                                                )
                                            } else {
                                                return (
                                                    <div className="stat-bar"></div>
                                                )
                                            }})
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-three"> 
                        <div className="dot"></div>
                        <div className="line"></div>
                    </div>
                </div>  
            </div>
        );
    }
}
