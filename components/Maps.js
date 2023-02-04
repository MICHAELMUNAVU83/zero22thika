import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";

const Maps = () => {
  return (
    <Map
      style={{
        margin: "auto",
        width: "100vw",
        marginTop: "20px",
        height: "500px",
        borderRadius: "5px",
      }}
      initialViewState={{
        latitude: -1.102554,
        longitude: 37.013193,
        zoom: 10,
      }}
      mapboxAccessToken={
        "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
      } // This is the token we got from Mapbox
      mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
    >
      <Marker
        latitude={-1.102554}
        longitude={37.013193}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        ></div>
      </Marker>
    </Map>
  );
};

export default Maps;
