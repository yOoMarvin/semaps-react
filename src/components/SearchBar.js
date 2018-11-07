import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div style={searchBarStyle}>
        <div> </div>
        <div style={searchTextStyle}>{this.props.city}</div>
        <div style={searchTextStyle}>🔍</div>
      </div>
    );
  }
}

const searchBarStyle = {
  backgroundColor: "white",
  padding: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const searchTextStyle = {
  fontWeight: "bold",
  fontSize: "16pt"
};
