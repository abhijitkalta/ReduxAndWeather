import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Your personal weather api</h1>
          <p>Find weather information across all USA states!!</p>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
