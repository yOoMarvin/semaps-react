import React, { Component } from "react";
import BackgroundMap from "../components/BackgroundMap";
import axios from "axios";

export default class App extends Component {
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
        this.setState({ center: [response.data[0].lat, response.data[0].lon] });
        console.log(this.state);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <div id="content">
          <h1>Hi 👋 this is Semaps 🌍 a semantic approach to maps 🗺</h1>
          <form onSubmit={this.handleSubmit} id="search-bar">
            <div> </div>
            <input
              id="search-text"
              onChange={this.handleChange}
              value={this.state.city}
            />
            <button id="submit-button" type="submit">
              🔍
            </button>
          </form>
        </div>
        <BackgroundMap center={this.state.center} />
      </div>
    );
  }
}
