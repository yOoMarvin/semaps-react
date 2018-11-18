import React, { Component } from "react";
import About from "../components/About";
import Legend from "../components/Legend";
import Popup from "reactjs-popup";

export default class ModalButtons extends Component {
  handleOnClick() {
    window.open("https://github.com/yOoMarvin/semaps-react", "_blank");
  }
  render() {
    return (
      <div id="modal-buttons-child">
        <Popup
          trigger={<button className="button"> About semaps 🌍 </button>}
          modal
          closeOnDocumentClick
        >
          <About />
        </Popup>

        <Popup
          trigger={<button className="button"> Legend 🎨 </button>}
          modal
          closeOnDocumentClick
        >
          <Legend />
        </Popup>

        <button className="button" onClick={this.handleOnClick}>
          Open Source 👨‍💻
        </button>
      </div>
    );
  }
}
