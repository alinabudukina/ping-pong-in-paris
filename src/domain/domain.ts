import { LatLngExpression, LatLngTuple } from "leaflet";

export interface PingPongTables {
  type: string;
  geometry: {
    type: string;
    coordinates: LatLngExpression;
  };
  properties: {
    spotName: string;
    spotType: string;
    location: string;
    description?: string;
  };
}
