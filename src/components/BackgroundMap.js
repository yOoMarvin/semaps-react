import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import data from "../utils/geo.json";

function getAreaColor(feature) {
  console.log(feature);
  switch (feature.properties.name) {
    case "Area One":
      return "blue";
    case "Area Two":
      return "yellow";
      break;
  }
}

export default class BackgroundMap extends Component {
  getStyle(feature, layer) {
    return {
      fillColor: getAreaColor(feature),
      opacity: 0.65,
      color: "white"
    };
  }
  render() {
    return (
      <Map id="map" center={this.props.center} zoom={14} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={data} style={this.getStyle} />
      </Map>
    );
  }
}
