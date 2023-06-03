import React from 'react';
import { GoogleMap, Polygon } from '@react-google-maps/api';
import { findByLabelText } from '@testing-library/react';
import FormattedCoordinates from './FormattedCoordinates';


const polygonCoordinates = [
  { lat: 50.030463, lng: 22.0049533 },
  { lat: 50.0303577, lng: 22.0052045 },
  { lat: 50.0303064, lng: 22.0053269 },
  { lat: 50.0284611, lng: 22.0133467 },
  { lat: 50.02848, lng: 22.0169033 },
  { lat: 50.0284805, lng: 22.0188529 },
  { lat: 50.0284581, lng: 22.0192419 },
  { lat: 50.0283874, lng: 22.0200063 },
  { lat: 50.0274156, lng: 22.0221712 },
  { lat: 50.0268218, lng: 22.0234221 },
  { lat: 50.025143, lng: 22.0266735 },
  { lat: 50.0250953, lng: 22.0269496 },
  { lat: 50.0251952, lng: 22.0275553 },

];
// polygonCoordinates = formattedCoordinates;

// function changeData(formattedCoordinates) {
//   polygonCoordinates.push(formattedCoordinates);
//   console.log("wnetrze funkcji changedata");

// };


const mapContainerStyle = {
  width: '100%',
  height: '90vh',
  bottom: '0px',
  position: 'fixed',

};

const center = { lat: 50.0301, lng: 22.005 };
//polygonCoordinates
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
