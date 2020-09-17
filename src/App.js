import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from "./components/navbar";
import { Home } from "./components/content/home";
import { About } from "./components/content/about"
import { Timeline } from './components/content/timeline'
import Skills from './components/content/skills'
import { Contact } from './components/content/contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path={["/", "/myportfolio/"]}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Timeline display="Experience" />
        </Route>
        <Route path="/education">
          <Timeline display="Education" />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>

  );
}

export default App;