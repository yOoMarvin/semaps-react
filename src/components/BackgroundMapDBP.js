import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import data from "../utils/dp-pedia.json";

function getAreaColor(feature) {
  switch (feature.properties.name) {
    // Education
    case "http://dbpedia.org/ontology/Building":
      return "lightgrey";
    case "http://dbpedia.org/ontology/ArchitecturalStructure":
      return "purple";
    case "http://dbpedia.org/ontology/Company":
      return "orange";
    case "http://dbpedia.org/ontology/University":
      return "dodgerblue";
    case "http://dbpedia.org/ontology/Museum":
      return "purple";
    case "http://dbpedia.org/ontology/Stadium":
      return "yellow";

      break;
  }
}

export default class BackgroundMapDBP extends Component {
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
          data={data}
          style={this.getStyle}
          onEachFeature={this.onEachFeature}
        />
      </Map>
    );
  }
}
