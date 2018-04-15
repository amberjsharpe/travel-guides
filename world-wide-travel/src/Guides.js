import React, { Component } from 'react';
import './App.css';
import json from './Guides.json';
  import {
  Route,
} from 'react-router-dom';  
import GuideCard from './GuideCard';

class Guides extends Component {
  render(){
        return ( 
          <div className="guide-display">
            {json.guides.map((j, sub) => {
              return <div key={sub}>
              <GuideCard guide={j} index={sub}/>
              <Route exact path={`${this.props.match.path}/:sub`} render={(props) => (
                <GuideCard guide={j} index={sub} />
              )}/>
            </div>
            })}
            </div>
        ) 
    }
}  
export default Guides