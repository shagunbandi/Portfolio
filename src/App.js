import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { SubNavBar } from './components/layout/NavbarComponents/SubNavBar';
import {SideBar} from './components/layout/SidebarComponent'
import Navbar from './components/layout/Navbar';
import store from './store';
import Footer from './components/layout/Footer';
import { SkillsAndAchievment} from './components/SkillsAndAchievement';
import {WorkExperience} from './components/WorkExperience';
import { PersonalProject} from './components/PersonalProject';

import './stylesheet/App.css';
import './stylesheet/github1.css';
import './stylesheet/github2.css';
import { Summary } from './components/Summary';
import {Photography} from './components/Photography';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Navbar />
                <div className="container-xl clearfix px-3 mt-4">
                  <SideBar />
                  <div className="col-lg-9 col-md-8 col-12 float-md-left pl-md-2" style={{ padding: "0px" }}>
                    <SubNavBar />
                    <div className="position-relative">
                      <Switch>
                        <Route path="/skills">
                          <SkillsAndAchievment />
                        </Route>
                        <Route path="/workex">
                          <WorkExperience />
                        </Route>
                        <Route path="/projects">
                          <PersonalProject />
                        </Route>
                        <Route path="/overview">
                          <Summary />
                        </Route>
                        <Route path="/photography">
                          <Photography />
                        </Route>
                        <Route path="/">
                          <Summary />
                        </Route>
                      </Switch>
                    </div>
                  </div>
                </div>
            <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
