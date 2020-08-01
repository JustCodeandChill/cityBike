import Validate from "./Validator";
import {
  getAvailableCountries,
  getAvailableCities,
} from "../utils/getAvailableCountryandCityFromCityBike";
import React, { useState } from "react";

function ValidateList() {
    let [display, setDisplay] = useState(false);

  return (
    <div className="row grey lighten-2" onClick={() => setDisplay(!display)}>
      <div className="col m12 l12 blue lighten-2 white-text">
        <h6>Find out if your city or country have citybike service</h6>
      </div>

      <div className={`${display ? "display" : "not-display"}`}>
        <div className="col m5 l6">
          <Validate
            placeholder="City Name. Ex: new york, ny Or moscow"
            validateFunction={getAvailableCities}
          />
        </div>
        <div className="col m5 l6">
          <Validate
            placeholder="Country shortname. Ex: us"
            validateFunction={getAvailableCountries}
          />
        </div>
      </div>
    </div>
  );
};

export default ValidateList;
