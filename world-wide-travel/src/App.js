import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Background from './Background';
import Footer from './Footer';
import Guides from './Guides';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="World Wide Travel" />
        <Background />
        <Guides />
        <footer className="footer">
          <Footer url="https://www.gohawaii.com/" destination="Hawaii"/> 
          <Footer url="https://tahititourisme.com/en-us/" destination="Tahiti"/>
          <Footer url="http://www.visitjamaica.com/" destination="Jamaica"/>        
          <Footer url="https://www.aruba.com/" destination="Aruba"/>
        </footer>
      </div>
    );
  }
}

export default App;
