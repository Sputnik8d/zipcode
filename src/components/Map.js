import React from 'react';
import { GoogleMap, Polygon } from '@react-google-maps/api';


const polygonCoordinates = [
];

const mapContainerStyle = {
  width: '100%',
  height: '90vh',
  bottom: '0px',
  position: 'fixed',
};

const center = { lat: 50.0301, lng: 22.005 };


function Map({cords, center}) {
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
      <Polygon paths={cords}
        options={{
          strokeColor: "#a4004f",
          strokeOpacity: 1,
          strokeWeight: 4,
          fillColor: "#c80063",
          fillOpacity: 0.40,
        }} />
    </GoogleMap>

  );
}

export default Map;
