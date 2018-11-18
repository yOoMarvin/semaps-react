import React, { Component } from "react";
import About from "../components/About";
import Legend from "../components/Legend";
import Popup from "reactjs-popup";

export default class ModalButtons extends Component {
  render() {
    return (
      <div>
        <Popup
          trigger={<button className="button"> About semaps </button>}
          modal
          closeOnDocumentClick
        >
          <About />
        </Popup>

        <Popup
          trigger={<button className="button"> Legend </button>}
          modal
          closeOnDocumentClick
        >
          <Legend />
        </Popup>

        <a href="https://github.com/yoomarvin/semaps-react" target="_blank">
          <button className="button">Open Source</button>
        </a>
      </div>
    );
  }
}
