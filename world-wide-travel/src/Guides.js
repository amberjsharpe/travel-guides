import React from 'react';
import './App.css';
import json from './Guides.json';
import tropical from './images/tropical.jpg'
import { Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardImg, 
  Button } from 'reactstrap';
  import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';  

function Guides(){
    return ( 
      <Router>    
      <React.Fragment>
      {json.guides.map((j, i) => {
        return <div key={i}>
        <Card className="card">
          <CardImg className="card-img" src={tropical} alt="Card image cap" />
          <CardBody>
            <CardTitle>{j.title}</CardTitle>
            <CardTitle>{j.type}</CardTitle>
            <CardText>{j.price}</CardText>
            <Button><Link to={`/${i}`}>View Guides</Link></Button>
          </CardBody>
        </Card>
      </div>     
      })}
      </React.Fragment>
      </Router>
    ) 
}

export default Guides