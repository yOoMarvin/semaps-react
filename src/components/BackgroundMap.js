import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";

function getAreaColor(feature) {
  var parts = feature.properties.name.split("/");
  var category = parts.pop() || parts.pop(); // handle potential trailing slash

  switch (category) {
    // Education
    case "University":
      return "dodgerblue";
    case "School":
      return "deepskyblue";
    // Nature and Leisure
    case "Leisure":
      return "green";
    // Sports
    case "SportThing":
      return "yellow";
    case "Stadium":
      return "yellow";
    // Hospital
    case "Hospital":
      return "red";
    // Shopping
    case "Shop":
      return "orange";
    case "Company":
      return "orange";
    // Tourist and Historic
    case "TourismThing":
      return "purple";
    case "HistoricThing":
      return "purple";
    case "ArchitecturalStructure":
      return "purple";
    case "Museum":
      return "purple";
    // Misc.
    case "ManMadeThing":
      return;
    case "RailwayThing":
      return "lightgray";
    case "Building":
      return "lightgray";

      break;
  }
}

export default class BackgroundMap extends Component {
  getStyle(feature, layer) {
    return {
      fillColor: getAreaColor(feature),
      fillOpacity: 0.65,
      color: "none"
    };
  }
  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name.split("/").pop());
    }
  }
  render() {
    return (
      <Map
        className="map"
        center={this.props.center}
        zoom={14}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={this.props.data}
          style={this.getStyle}
          onEachFeature={this.onEachFeature}
          key={this.props.key}
        />
      </Map>
    );
  }
}
