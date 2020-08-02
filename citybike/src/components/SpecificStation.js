import React from "react";
import axios from "axios";
import _ from "lodash";
import '../styles/Validator.css';
class SpecificStation extends React.Component {
  state = {
    stations: [],
  };
  componentDidMount = async () => {
    let { id } = this.props.match.params;
    let url = `http://api.citybik.es/v2/networks/${id}`;
    let data = await axios.get(url);
    data = data.data.network.stations;

    this.setState({
      stations: data,
    });
    console.log(data, this.state.stations);
  };

  renderInfo = () => {
    if (_.isEmpty(this.state.stations)) return null;
    console.log("before redner", this.state.stations);
    let arr = [];
    for (var i = 0; i < 4; i++) {
      console.log("in redner", this.state.stations[i]);
      let { id, empty_slots, free_bikes } = this.state.stations[i];
      arr.push(
        <div className="flex-item" key={id}>
          <div>Free Bike: {free_bikes}</div>
          <div>Empty Slots: {empty_slots}</div>
        </div>
      );
    }
    return arr;
  };
  render() {
    let { id } = this.props.match.params;
    return (
      <div className="container">
        <h4>Information about stations of {id} company</h4>
        <div className="grid">{this.renderInfo()}</div>
      </div>
    );
  }
}

export default SpecificStation;
