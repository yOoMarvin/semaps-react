import React, { Component } from "react";
import BackgroundMap from "../components/BackgroundMap";
import ModalButtos from "./ModalButtons";
import axios from "axios";
import Popup from "reactjs-popup";
import defaultData from "../utils/linked-open-data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Mannheim",
      center: [49.487457, 8.46604],
      data: defaultData,
      key: "default"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.fetchJSON = this.fetchJSON.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    // change center in state to long and let from city input
    // Fetch Data
    // Need to do this async
    this.cityToCoordinates(this.state.city, () => {
      this.fetchJSON();
    });
    event.preventDefault();
  }

  // Function to fetch geo JSON from Server and pass it to state, so that the map is re-rendered
  fetchJSON() {
    const long = this.state.center[1];
    const lat = this.state.center[0];
    const BASE_URL = "https://shielded-cove-84167.herokuapp.com/cluster";

    axios
      .get(BASE_URL, {
        params: {
          algorithm: "simple",
          dataorigin: "dbpedia",
          latitude: lat,
          longitude: long
        },
        headers: {
          crossDomain: true,
          mode: "cors",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        // Set data in state to geo json
        this.setState({
          data: response.data,
          // change the key to random, then the map refreshes... don't ask me why
          key: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5)
        });
      })
      .catch(error => {
        window.alert(
          "An Error happened! We're moving to Mannheim again. Here the world is ok 🙏"
        );
        this.setState({
          city: "Mannheim",
          center: [49.487457, 8.46604],
          data: defaultData
        });
        console.log("Error!");
        console.log(error);
      });
  }

  // Function to get the lon and lat based on the city. Always choose the first result in search
  cityToCoordinates(city, callback) {
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
        //place for the callback
        callback();
      })
      .catch(function(error) {
        console.log("Error!");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="modal-buttons">
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
            <ModalButtos />
          </div>
        </div>
        <BackgroundMap
          center={this.state.center}
          data={this.state.data}
          key={this.state.key}
        />
      </div>
    );
  }
}
