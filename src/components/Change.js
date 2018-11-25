import React, { Component } from "react";
import axios from "axios";

export default class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Mannheim",
      center: [49.487457, 8.46604]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    this.cityToCoordinates(this.state.city);
    event.preventDefault();
  }

  // Function to get the lon and lat based on the city. Always choose the first result in search
  cityToCoordinates(city) {
    axios
      .get("https://nominatim.openstreetmap.org/search", {
        params: {
          city: city,
          format: "json"
        }
      })
      .then(response => {
        // Set state long and let according to result
        this.setState({ center: [response.data[0].lat, response.data[0].lon] });
      })
      .catch(function(error) {
        console.log("Error!");
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    return (
      <div className="content">
        <h2>Change the city here!</h2>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <div> </div>
          <input
            className="search-text"
            onChange={this.handleChange}
            value={this.state.city}
            autoComplete="off"
          />
          <button className="submit-button" type="submit">
            🔍
          </button>
        </form>
      </div>
    );
  }
}
