import React, { Component } from "react";
import BackgroundMap from "../components/BackgroundMap";

const mannheim = [49.487457, 8.46604];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "Mannheim" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    alert("A city was submitted: " + this.state.city);
    event.preventDefault();
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
        <BackgroundMap center={mannheim} />
      </div>
    );
  }
}
