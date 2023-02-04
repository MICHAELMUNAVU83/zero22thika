import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { HiLocationMarker } from "react-icons/hi";
const Maps = () => {
  return (
    <Map
      style={{
        margin: "auto",
     
        marginBottom: "20px",
        height: "400px",
        cursor: "pointer",
        width: "80%",

        borderRadius: "5px",
      }}
      initialViewState={{
        latitude: -1.038757,
        longitude: 37.083375,
        zoom: 12,
      }}
      mapboxAccessToken={
        "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
      } // This is the token we got from Mapbox
      mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
    >
      <Marker
        latitude={-1.034864}
        longitude={37.073487}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <HiLocationMarker className="text-5xl text-red-600" />
      </Marker>
    </Map>
  );
};

export default Maps;
