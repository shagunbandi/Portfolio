import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './stylesheet/App.css';
import './stylesheet/github1.css';
import './stylesheet/github2.css';

import Navbar from './components/layout/Navbar';
import MainLayout from './components/mainComponents'

import store from './store';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="logged-in env-production page-responsive page-profile">
            <Navbar />
            <MainLayout />
            <Footer/>
            {/* <Route path="/album" component={AlbumLanding} />
            <Route path='/photos' component={PhotosLanding} /> */}
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
