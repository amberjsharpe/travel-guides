import React, { Component } from 'react';
import './App.css';
import down from './images/down.png';

class Weather extends Component {

    constructor(props){
        super(props);

        this.state = {
            weatherLoaded: false,
            ObjResult: {},
            showResult: false,
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getWeather();
    }

    getWeather(){
        console.log('getWeather');
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=a7b11aec4edad73d31377b8d5f385ffa`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("get weather result: ", result);
                this.setState({
                weatherLoaded: true,
                temperature: result.main.temp,
                city: result.name,
                value: '' 
            }); console.log(result.name);
            },
            (error) => {
                console.log('get weather error: ', error);
            }
        )

    } 
    
    render(props){
        return <div>
        <h2>Get weather</h2>
        <img className="down-arrow" src={down} alt="down arrow" />     
        <form onSubmit={this.handleSubmit}>
            <h3>Input zip code:</h3>
            <input className="weather-input" value={this.state.value} onChange={this.handleChange} type="text"></input>
            <button className="submit-btn" type="submit">Submit</button>
        </form>
        
        <div className="temp-render">
            <div>{this.state.city}</div>
            <div>{this.state.temperature}</div>
        </div>
        
        </div>
    }
}

export default Weather