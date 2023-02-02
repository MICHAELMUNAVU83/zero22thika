import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from "react-map-gl";

function Contact() {
  return (
    <>
      <h1>React Mapbox</h1>
      <Map
        style={{
          margin: "auto",
          width: "500px",
          height: "500px",
          border: "2px solid black",
          borderRadius: "5px",
        }}
        initialViewState={{
          latitude: -1.286389,
          longitude: 36.817223,
          zoom: 10,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
        />
      </Map>
    </>
  );
}

export default Contact;
