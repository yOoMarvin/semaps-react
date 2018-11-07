import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

export default class BackgroundMap extends Component {
  render() {
    return (
      <Map id="map" center={this.props.center} zoom={14} zoomControl={false}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}
