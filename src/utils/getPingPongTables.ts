import * as geojson from "geojson";

export const getPingPongTables = () => {
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
  return listOfTables;
};
