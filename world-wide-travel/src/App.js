import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Background from './Background';
import Footer from './Footer';
import Guides from './Guides';
import Weather from './Weather';


class App extends Component {
  render() {
    return (
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
          <div className="guide-display">
            <Guides />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
