import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import { SubNavBar } from './components/layout/NavbarComponents/SubNavBar';
import SideBar from './components/layout/SidebarComponent'
import Navbar from './components/layout/Navbar';
import store from './store';
import Footer from './components/layout/Footer';
import SkillsAndAchievement from './components/SkillsAndAchievement';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Project';

import './stylesheet/App.css';
import './stylesheet/github1.css';
import './stylesheet/github2.css';
import { Summary } from './components/Summary';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="logged-in env-production page-responsive page-profile">
            <Navbar />
            <div className="application-main " data-commit-hovercards-enabled>
              <main id="js-pjax-container" data-pjax-container>
                <div className="container-xl clearfix px-3 mt-4">
                  <SideBar />
                  <div className="col-lg-9 col-md-8 col-12 float-md-left pl-md-2" style={{padding:"0px"}}>

                    <SubNavBar />

                    <div className="position-relative">
                      <Switch>
                        <Route path="/skills">
                          <SkillsAndAchievement />
                        </Route>
                        <Route path="/workex">
                          <WorkExperience />
                        </Route>
                        <Route path="/projects">
                          <Projects />
                        </Route>
                        <Route path="/overview">
                          <Summary />
                        </Route>
                      </Switch>

                      </div>

                  </div>
                </div>
              </main></div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
