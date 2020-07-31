import React from "react";
import "../styles/LandingPage.css";
class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Welcome to FindACityBike</h3>
        <p className="inform-paragraph">
          Please turn on your Wifi and input the city where you want to find a
          nearest citybike station
        </p>
        <div className="dashboard-input">
          <input type="text" placeholder="City Name. Ex: New York" />
          
        </div>
        <button className="dashboard-search-button"> <i class="prefix material-icons">search</i>Search</button>
      </div>
    );
  }
}

export default LandingPage;
