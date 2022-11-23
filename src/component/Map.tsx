import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React from "react";
import { PingPongTables } from "../domain/domain";

export default function Map() {
  // Default coordinates set to Paris center
  const position: LatLngExpression = [48.864716, 2.349014];
  const zoom: number = 13;

  const listOfTables: PingPongTables[] = [
    {
      spotName: "Square Saint-Éloi",
      spotType: "outdoor",
      location: "11 Rue du Colonel Rozanoff, 75012",
      lat: 48.8446,
      lon: 2.387,
      description:
        "A nice park with 2 ping-pong tables and a place for petanque",
    },
    {
      spotName: "Square Philippe-Farine",
      spotType: "outdoor",
      location: "12 Passage Gatbois, 75012",
      lat: 48.84445,
      lon: 2.3791,
    },
  ];

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
      {listOfTables.map((item, index) => (
        <Marker
          icon={iconExample}
          key={index}
          position={[item.lat, item.lon]}
          title={`${item.spotName}`}
        >
          <Popup>
            <strong>{item.spotName}</strong>
            <br />
            <p>{item.location}</p>
            <p>{item.description}</p>
            <p>{item.spotType}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
