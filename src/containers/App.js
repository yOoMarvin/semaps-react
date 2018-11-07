import React, { Component } from "react";
import BackgroundMap from "../components/BackgroundMap";

const mannheim = [49.487457, 8.46604];

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <h1>Hi 👋 this is Semaps 🌍 a semantic approach to maps 🗺</h1>
        </div>
        <BackgroundMap center={mannheim} />
      </div>
    );
  }
}
