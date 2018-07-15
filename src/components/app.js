import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h3>Charts shows the forecast for the next 5 days and the number 
        below is the average for 5 days</h3>
        <WeatherList />
      </div>
    );
  }
}
