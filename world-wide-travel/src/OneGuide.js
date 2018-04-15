import React, { Component } from 'react';
import tropical from './images/tropical.jpg'
import './App.css';
import json from './Guides.json';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardImg,
    Button
} from 'reactstrap';
import { 
    Link, 
    Route } from 'react-router-dom';
class OneGuide extends Component {
    render() {
        const guide = json.guides[this.props.match.params.guideId];

    return <div> 
        <Card className="card">
            <CardImg className="card-img" src={tropical} alt="Card image cap" />
            <CardBody>
                <CardTitle>{guide.title}</CardTitle>
                <CardTitle>{guide.type}</CardTitle>
                <CardText>{guide.price}</CardText>
                <Button><Link to={`/guides`}>Back to Home</Link></Button>
            </CardBody>
        </Card>
        <Route exact path={`${this.props.match}/:guideId`} component={OneGuide} />
    </div>
    }
}
export default OneGuide