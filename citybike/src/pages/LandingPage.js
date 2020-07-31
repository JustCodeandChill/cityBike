import React from "react";
import '../styles/LandingPage.css'
class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Welcome to FindACityBike</h3>
        <p className="inform-paragraph">
          Please turn on your Wifi and input the city where you want to find a
          nearest citybike station
        </p>
        This is a landing page
      </div>
    );
  }
}

export default LandingPage;
