import React from 'react';
import { GoogleMap, Polygon } from '@react-google-maps/api';
import { findByLabelText } from '@testing-library/react';

const polygonCoordinates = [
  { lat: 50.030463, lng: 22.0049533 },
  { lat: 50.0303577, lng: 22.0052045 },
  { lat: 50.0303064, lng: 22.0053269 },
  { lat: 50.0299377, lng: 22.0062174 },
  { lat: 50.0298429, lng: 22.006499 },
  { lat: 50.0296017, lng: 22.0073653 },
  { lat: 50.0295123, lng: 22.0076952 },
  { lat: 50.028959, lng: 22.0096747 },
  { lat: 50.0286207, lng: 22.0109703 },
  { lat: 50.0285989, lng: 22.0110534 },
  { lat: 50.0285024, lng: 22.011732 },
  { lat: 50.0284783, lng: 22.0120136 },
  { lat: 50.0284662, lng: 22.0124052 },
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
  { lat: 50.025309, lng: 22.0285197 },
  { lat: 50.0253892, lng: 22.0291606 },
  { lat: 50.0254337, lng: 22.0293808 },
  { lat: 50.0255555, lng: 22.0297891 },
  { lat: 50.0256406, lng: 22.0299955 },
  { lat: 50.0264046, lng: 22.0308043 },
  { lat: 50.0264868, lng: 22.0309183 },
  { lat: 50.0266174, lng: 22.0312017 },
  { lat: 50.0267025, lng: 22.0315545 },
  { lat: 50.0266321, lng: 22.0318187 },
  { lat: 50.0284732, lng: 22.0330359 },
  { lat: 50.0284664, lng: 22.0334209 },
  { lat: 50.0284607, lng: 22.0359395 },
  { lat: 50.0285227, lng: 22.036499 },
  { lat: 50.028785, lng: 22.0385198 },
  { lat: 50.0287756, lng: 22.0388059 },
  { lat: 50.028707, lng: 22.0391065 },
  { lat: 50.0283097, lng: 22.0403805 },
  { lat: 50.0282749, lng: 22.0406422 },
  { lat: 50.0284557, lng: 22.0420356 },
  { lat: 50.0284698, lng: 22.0422281 },
  { lat: 50.0289717, lng: 22.0421682 },
  { lat: 50.0291916, lng: 22.0421177 },
  { lat: 50.0296793, lng: 22.0419357 },
  { lat: 50.0302336, lng: 22.0417284 },
  { lat: 50.0304061, lng: 22.0417347 },
  { lat: 50.0305697, lng: 22.0417928 },
  { lat: 50.0307352, lng: 22.0413784 },
  { lat: 50.0311536, lng: 22.0406908 },
  { lat: 50.0314565, lng: 22.0402935 },
  { lat: 50.0323328, lng: 22.0398192 },
  { lat: 50.0324412, lng: 22.0416001 },
  { lat: 50.0330339, lng: 22.0414095 },
  { lat: 50.0328572, lng: 22.0394341 },
  { lat: 50.0345638, lng: 22.0390661 },
  { lat: 50.0354019, lng: 22.0388853 },
  { lat: 50.0366116, lng: 22.0386167 },
  { lat: 50.0369126, lng: 22.0385498 },
  { lat: 50.0379277, lng: 22.038452 },
  { lat: 50.037789, lng: 22.0362304 },
  { lat: 50.0376857, lng: 22.0347059 },
  { lat: 50.0374624, lng: 22.0325182 },
  { lat: 50.0374899, lng: 22.0305972 },
  { lat: 50.0378816, lng: 22.0262382 },
  { lat: 50.0382869, lng: 22.0218007 },
  { lat: 50.0386468, lng: 22.0178606 },
  { lat: 50.0388918, lng: 22.0149183 },
  { lat: 50.0381023, lng: 22.0144634 },
  { lat: 50.0372432, lng: 22.0140807 },
  { lat: 50.0363567, lng: 22.0137626 },
  { lat: 50.0350281, lng: 22.0131911 },
  { lat: 50.0346935, lng: 22.0129837 },
  { lat: 50.0341997, lng: 22.0125235 },
  { lat: 50.0338034, lng: 22.0120178 },
  { lat: 50.0334493, lng: 22.0113148 },
  { lat: 50.0331082, lng: 22.010369 },
  { lat: 50.0326468, lng: 22.0091198 },
  { lat: 50.032348, lng: 22.0082297 },
  { lat: 50.0319711, lng: 22.0073093 },
  { lat: 50.0314448, lng: 22.0063079 },
  { lat: 50.0309868, lng: 22.0056302 },
  { lat: 50.030463, lng: 22.0049533 },

];

const mapContainerStyle = {
  width: '100vw',
  height: '80vh',
};

const center = { lat: 50.0301, lng: 22.005 };

function Map() {
  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
      <Polygon paths={polygonCoordinates}
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