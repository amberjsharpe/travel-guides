import React from 'react';
import './App.css';
import json from './Guides.json';
import tropical from './images/tropical.jpg'
import { Card, CardText, CardBody,
  CardTitle, CardImg, CardSubtitle, Button } from 'reactstrap';

function Guides(props){
  console.log(json);
    return (
      <React.Fragment>
      {json.guides.map((j, i) => {
        return <div key={i}>
        <Card className="card">
          <CardImg className="card-img" src={tropical} alt="Card image cap" />
          <CardBody>
            <CardTitle>{j.title}</CardTitle>
            <CardTitle>{j.type}</CardTitle>
            <CardText>{j.price}</CardText>
            <Button>View</Button>
          </CardBody>
        </Card>
      </div>     
      })}
      </React.Fragment>
    )
}

export default Guides