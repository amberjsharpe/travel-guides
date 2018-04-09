import React, { Component } from 'react';
import './App.css';

class Weather extends Component {


    constructor(props){
        super(props);

        this.state = {
            weatherLoaded: false,
            ObjResult: {},
            showResult: false,
            error: null
        }
    }    

    componentDidMount() {
        this.getWeather();
    }
    

    getWeather() {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=94040&APPID=a7b11aec4edad73d31377b8d5f385ffa")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    weatherLoaded: true,
                    ObjResult:result
                })
                console.log(result)
            }
        )
    }
    render() {
        const {error, weatherLoaded, ObjResult, showResult} = this.state;

        if (error) {
        return(
            <div>
                <div>Error:{error.message}</div>
            </div>
        )
        } else if (!weatherLoaded) {
            return <div>Loading...</div>
        } else {
            return (<div>
                <Weather 
                weatherloaded={weatherLoaded}
                ObjResult={ObjResult.main.temp}
                showResult={showResult}
                />
            </div>)
        }
    }
}
export default Weather