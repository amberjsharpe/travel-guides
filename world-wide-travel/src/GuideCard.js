import React, { Component } from 'react';
import tropical from './images/tropical.jpg'
import './App.css';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardImg,
    Button
} from 'reactstrap';
import {
    Route,
    Link,
} from 'react-router-dom';

class GuideCard extends Component {
    render() {
        console.log(this.props);
        const guide = this.props.guide;

        if (!this.props.guide) {
            return <div></div>;
        }

        return <Card className="card">
            <CardImg className="card-img" src={tropical} alt="Card image cap" />
            <CardBody>
                <CardTitle>{guide.title}</CardTitle>
                <CardTitle>{guide.type}</CardTitle>
                <CardText>{guide.price}</CardText>
                <Button><Link to={`/guides/${this.props.index}`}>View Guides</Link></Button>
            </CardBody>
        </Card>
    }
}
export default GuideCard