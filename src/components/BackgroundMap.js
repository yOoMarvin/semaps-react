import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import data from "../utils/geo.json";

function getAreaColor(feature) {
  console.log(feature);
  switch (feature.properties.name) {
    // Education
    case "http://linkedgeodata.org/ontology/University":
      return "dodgerblue";
    case "http://linkedgeodata.org/ontology/School":
      return "deepskyblue";
    // Nature and Leisure
    case "http://linkedgeodata.org/ontology/Leisure":
      return "green";
    // Sports
    case "http://linkedgeodata.org/ontology/SportThing":
      return "yellow";
    // Hospital
    case "http://linkedgeodata.org/ontology/Hospital":
      return "red";
    // Shopping
    case "http://linkedgeodata.org/ontology/Shop":
      return "orange";
    // Tourist and Historic
    case "http://linkedgeodata.org/ontology/TourismThing":
      return "purple";
    case "http://linkedgeodata.org/ontology/HistoricThing":
      return "purple";
    // Misc.
    case "http://linkedgeodata.org/ontology/ManMadeThing":
      return;
    case "http://linkedgeodata.org/ontology/RailwayThing":
      return;

      break;
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
      layer.bindPopup(feature.properties.name);
    }
  }
  render() {
    return (
      <Map id="map" center={this.props.center} zoom={14} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={data}
          style={this.getStyle}
          onEachFeature={this.onEachFeature}
        />
      </Map>
    );
  }
}
