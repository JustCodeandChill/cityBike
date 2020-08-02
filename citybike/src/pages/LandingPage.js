import React from "react";
import "../styles/LandingPage.css";
//utils
import {generateStationIdWithCountryandCitySpecifically} from '../utils/getStationIdThatMatchCountryandCitySearch';
//components
import Validate from '../components/FindCityandCountry';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      city: "",
    };
  }

  componentDidMount = async () => {
    console.log(generateStationIdWithCountryandCitySpecifically());
    let state = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("in nat", this);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        state.setState({
          longitude: long,
          latitude: lat,
        });
      })
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Welcome to FindACityBike</h3>
        <p className="inform-paragraph">
          Please turn on your Wifi and input the city where you want to find a
          nearest citybike station. If error occurs, please reload and enable
          location asking
        </p>
        <Validate />
        <div className="dashboard-input">
          <input type="text" placeholder="City Name. Ex: New York" />
        </div>
        <button className="dashboard-search-button">
          {" "}
          <i className="material-icons">search</i>Search
        </button>
        <h5>
          Current location: {this.state.latitude ? this.state.latitude : "null"}{" "} <br/>
          {this.state.longitude ? this.state.longitude : "null"}
        </h5>
      </div>
    );
  }
}

export default LandingPage;
