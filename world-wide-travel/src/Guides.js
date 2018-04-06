import React from 'react';
import './App.css';
import json from './Guides.json';


function Guides(props){
  console.log(json);
    return (
      <React.Fragment>
      {json.guides.map(j => {
        return <div className="guideCard">
          <p className="guide-type">{j.type}</p>
          <p className="guide-title">{j.title}</p>
          <p className="guide-price">{j.price}</p>
        </div>        
      })}
      </React.Fragment>
    )
}

export default Guides