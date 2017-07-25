import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import GoogleMap from '../components/googleMaps';

class WeatherList extends Component {
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const lat = cityData.city.coord.lat ;
    const lon = cityData.city.coord.lon;

    const temperature = cityData.list.map((data) => {
      return data.main.temp;
    });
    const humidity = cityData.list.map((data) => {
      return data.main.humidity;
    });
    const pressure = cityData.list.map((data) => {
      return data.main.pressure;
    });
    return (
      <tr key={cityName} >
        <td><GoogleMap lat={lat} lon={lon} cityName={cityName} /></td>
        <td>
          <Chart data={temperature} color='red' units='K' />
        </td>
        <td>
          <Chart data={humidity} color='blue' units='hpa' />
        </td>
        <td>
          <Chart data={pressure} color='brown' units='%' />
        </td>
      </tr>
    );
  };

  render(){
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weatherData.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({weatherData}){
  return { weatherData };
};

export default connect(mapStateToProps)(WeatherList);
