import React from "react";
import _ from 'lodash';
import '../styles/Validator.css';
import {
  getStationIdThatMatchCountryAndCitySearch,
  getStationIdThatMatchCountrySearch,
  getStationIdThatMatchCitySearch,
} from "../utils/getStationIdThatMatchCountryandCitySearch";
import {Link} from 'react-router-dom';

class MainValidator extends React.Component {
     constructor(props){
        super(props);
        this.state = {
            city : "",
            country :"",
            stationIdMatchesCityandCountry: [],
            stationIdMatchesCountry: [],
            stationIdMatchesCities: [],
          };
    }

check = async () => {
    let dataMatchesCountryandCity = await getStationIdThatMatchCountryAndCitySearch(
        this.props.country,
        this.props.city
      )
    let dataMatchesCountry = await  getStationIdThatMatchCountrySearch(this.props.country);
    let dataMatchesCities = await  getStationIdThatMatchCitySearch(this.props.city);

    if (this.state.country !== this.props.country && this.state.city !== this.props.city) {
        this.setState({
            city: this.props.city,
            country : this.props.country,
            stationIdMatchesCityandCountry: dataMatchesCountryandCity,
            stationIdMatchesCountry : dataMatchesCountry,
            stationIdMatchesCities : dataMatchesCities
          });
    }
}

  render() {
    console.log('before main vali check', this.props, this.state);
      this.check();
      console.log('after main vali check', this.props, this.state);
    return (<div>
        <h3>Result </h3>
        <h4>Station in your city</h4>
        <div className="grid">
            {_.map( this.state.stationIdMatchesCities, (station) => {
                console.log('in map', station)
                return <div className="flex-item" key={station}><Link to={`station/${station}`}>{station}</Link></div>
            })}
        </div>

        <br/>
        <h4>Station in your country</h4>
        <div className="grid">
            {_.map( this.state.stationIdMatchesCountry, (station) => {
                console.log('in map', station)
                return <div className="flex-item" key={station}><Link to={`station/${station}`}>{station}</Link></div>
            })}
        </div>
        </div>)
  }
}

export default MainValidator;
