import React from 'react';
import './App.css';
import json from './Guides.json';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

function Guides(props){
  console.log(json);
    return (
      <React.Fragment>
      {json.guides.map(j => {
        return <Card className="card">
          <CardBody>
            <CardTitle>{j.title}</CardTitle>
            <CardText>{j.type}</CardText>
            <CardText>{j.price}</CardText>
          </CardBody>
        </Card>        
      })}
      </React.Fragment>
    )
}

export default Guides