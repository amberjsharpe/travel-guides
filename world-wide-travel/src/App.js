import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Background from './Background';
import Footer from './Footer';
import Guides from './Guides';
import OneGuide from './OneGuide';
import Weather from './Weather';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Travel with Fido" />
          <footer className="footer">
            <Footer url="https://www.gohawaii.com/" destination="Hawaii"/> 
            <Footer url="https://tahititourisme.com/en-us/" destination="Tahiti"/>
            <Footer url="http://www.visitjamaica.com/" destination="Jamaica"/>        
            <Footer url="https://www.aruba.com/" destination="Aruba"/>
          </footer>
          <div className="body">
            <Background />
            <div className="weather-display">
              <Weather />
            </div>
            <h2>Bork! Bork! Need a guide?</h2>
            <Route exact path="/guides" component={Guides}/>
            <Route exact path={`/guides/:guideId`} component={OneGuide} />
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
