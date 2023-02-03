import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup } from 'react-map-gl';
import restaurants from './data/restaurants.json';



function Maps() {

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
    <h1>React Mapbox</h1>
      <Map
        style={{
          margin: 'auto',
          width: "500px",
          height: "500px",
          border: "2px solid black",
          borderRadius: "5px"
        }}
        initialViewState={{
          latitude: -1.286389,
          longitude: 36.817223,
          zoom: 10
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >

        <NavigationControl 
        showCompass={true}
        position="bottom-right"
         />
          {
            restaurants.restaurants.map(restaurant => (
              <Marker
                color="red"
                key={restaurant.id}
                latitude={restaurant.latitude}
                longitude={restaurant.longitude}
              >
                <i className="fa-solid fa-map-pin"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedRestaurant(restaurant)
                }}
                ></i>    
              </Marker>
            ))
          }
         {
            selectedRestaurant ? (
                <Popup
                  latitude={selectedRestaurant.latitude}
                  longitude={selectedRestaurant.longitude}
                  onClose={() => {
                    setSelectedRestaurant(null)
                  }}
                 >
                  <div>
                    {selectedRestaurant.name}
                  </div>
                </Popup> 
            ) : null
              
         }

        <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        showUserLocation={true}
        />

       
 
      </Map>
      
    </>
  );
}

export default Maps;