import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React from "react";

export default function Map() {
  // Default coordinates set to Paris center
  const position: LatLngExpression = [48.864716, 2.349014];
  const zoom: number = 11;

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        // Placeholder, I'll put my current points here
      }
    </MapContainer>
  );
}
