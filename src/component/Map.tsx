import L, { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React from "react";
import * as geojson from "geojson";

export default function Map() {
  // Default coordinates set to Paris center
  const position: LatLngTuple = [48.864716, 2.349014];
  const zoom: number = 13;

  const listOfTables: geojson.FeatureCollection<geojson.Point> = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [48.8446, 2.387],
        },
        properties: {
          spotName: "Square Saint-Éloi",
          spotType: "outdoor",
          location: "11 Rue du Colonel Rozanoff, 75012",
          description:
            "A nice park with 2 ping-pong tables and a place for petanque",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [48.84445, 2.3791],
        },
        properties: {
          spotName: "Square Philippe-Farine",
          spotType: "outdoor",
          location: "12 Passage Gatbois, 75012",
        },
      },
    ],
  };

  const { features } = listOfTables;

  const iconExample = L.divIcon({
    className: "ping-pong-icon",
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
  });

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {features.map((item, index) => (
        <Marker
          icon={iconExample}
          key={index}
          position={item.geometry.coordinates}
          title={`${item.properties.spotName}`}
        >
          <Popup>
            <strong>{item.properties.spotName}</strong>
            <br />
            <p>{item.properties.location}</p>
            <p>{item.properties.description}</p>
            <p>{item.properties.spotType}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
