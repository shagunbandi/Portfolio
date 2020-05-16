import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './stylesheet/App.css';
import './stylesheet/github1.css';
import './stylesheet/github2.css';

import { SubNavBar } from './components/layout/NavbarComponents/SubNavBar';
import { Skills } from './components/SkillsAndAchievement/Skills/Skills';
import { Timeline } from './components/SkillsAndAchievement/Acheivements/Timeline';
import SideBar from './components/layout/SidebarComponent'


import Navbar from './components/layout/Navbar';
// import MainLayout from './MainLayout'

import store from './store';
import Footer from './components/layout/Footer';
import SkillsAndAchievement from './components/SkillsAndAchievement';

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
                  <div className="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
                    <SubNavBar />

                    <div className="position-relative">

                      <SkillsAndAchievement/>

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
