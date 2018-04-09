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
        <Card>
          <CardImg className="card-img" src={tropical} alt="Card image cap" />
          <CardBody>
            <CardTitle>{j.title}</CardTitle>
            <CardSubtitle>{j.type}</CardSubtitle>
            <CardText>{j.price}</CardText>
            <Button outline color="success">Button</Button>
          </CardBody>
        </Card>
      </div>     
      })}
      </React.Fragment>
    )
}

export default Guides