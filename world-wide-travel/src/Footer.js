import React from 'react';
import './App.css';

function Footer(props){
    return (
            <h3><a href="{props.url}">{props.destination}</a></h3>
    )
}

export default Footer

