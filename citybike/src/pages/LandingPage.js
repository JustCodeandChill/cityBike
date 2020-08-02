import React from "react";
import "../styles/LandingPage.css";
//utils
import {generateStationIdWithCountryandCitySpecifically} from '../utils/getStationIdThatMatchCountryandCitySearch';
//components
import Validate from '../components/FindCityandCountry';
import Prompt from '../components/Validator';
import MainValidator from '../components/MainValidator';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      city: "",
      country: ""
    };
  }

  componentDidMount = async () => {
    let state = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
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

  handleChange = (e) => {
    let choice = e.target.value || "";
    choice = choice.split(", ")
    let country = choice[0];
    let countryArr = choice.slice(1);
    let  city = countryArr.join(", ")

    console.log('cc', country, city);
    this.setState({
        country : country,
        city : city
    })
  };

  handleClick = (e) => {

  }
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
          <input type="text" placeholder="City Name. Ex: New York" onChange={this.handleChange} />
        </div>
        <button className="dashboard-search-button" onClick={this.handleClick}>
          {" "}
          <i className="material-icons">search</i>Search
        </button>

        <h5>
          Current location: {this.state.latitude ? this.state.latitude : "null"}{" "} <br/>
          {this.state.longitude ? this.state.longitude : "null"}
        </h5>
        <MainValidator {...this.state} />
      </div>
    );
  }
}

export default LandingPage;
