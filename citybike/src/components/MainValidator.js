import React from "react";
import {
  getStationIdThatMatchCountryAndCitySearch,
  getStationIdThatMatchCountrySearch,
  getStationIdThatMatchCitySearch
} from "../utils/getStationIdThatMatchCountryandCitySearch";

class MainValidator extends React.Component {
  render() {
    console.log("in main validator", this.props.country, this.props.city);
    {
      console.log(
        getStationIdThatMatchCountryAndCitySearch(
          this.props.country,
          this.props.city
        )
      );

      console.log(
        getStationIdThatMatchCountrySearch(
          this.props.country
        )
      );

      console.log(
        getStationIdThatMatchCitySearch(
          this.props.city
        )
      );
    }
    return <div>Main Validator</div>;
  }
}

export default MainValidator;
