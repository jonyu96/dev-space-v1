import * as React from 'react';

import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import { Home } from 'components/Home';
import { About } from 'components/About';
import { Experience } from 'components/Experience';
import { Projects } from 'components/Projects';
import { Loading } from 'components/Loading';
import { Links } from 'components/Links';
import { motion } from 'framer-motion';

import './App.css';

export interface AppState {
  isLoading: boolean,
  display: boolean
}

export class App extends React.Component<{}, AppState> {
  public constructor(props = {}) {
    super(props);
    this.state = { isLoading: true, display: false };

    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  handler() {
    this.setState({ display: true });
  }

  render() {

    return (
      <div className="App">
        <Router>

          { ['/', '/home'].map((path: string, index: number) => 
            <Route key={ index } exact path={ path }>
              { this.state.isLoading ? <Loading /> : <Home onComplete={ this.handler }></Home> }
            </Route>
          )}

          <Route exact path="/about"> 
            <About></About>
          </Route>

          <Route exact path="/experience">
            <Experience></Experience>
          </Route>

          <Route exact path="/projects">
            <Projects></Projects>
          </Route>

          {
            this.state.display && 
            <React.Fragment>
              <Links></Links>

              <motion.div 
                className="App-signature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -10 }}>
                <b>Developed</b> & <b>Designed</b> by <div className="App-tag"> JY </div>
              </motion.div>
            </React.Fragment>
          }
        </Router>
      </div>
    );
  }
}
