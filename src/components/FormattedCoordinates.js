import React from 'react';
import Map from './Map';

let newCenter = [];
function FormattedCoordinates({ response }) {

  const formatCoordinates = () => {
    // console.log("typeof: response.centroid.coordinates |" + typeof(response.centroid.coordinates));
    // console.log("typeof: response.geometry.coordinates[0] |" + typeof(response.geometry.coordinates[0]));
    //polygonCoordinates.push({ lat: 50.025123, lng: 22.027789 });
    newCenter = { lat: response.centroid.coordinates[1], lng: response.centroid.coordinates[0] };
    // newCenter = response.centroid.coordinates[1];
    // console.log("newCenter: " + newCenter[0]);
    // console.log("center-before: " + response.centroid.coordinates);
    // console.log ("newerCenter-after: " + newCenter);
    const coordinates = response.geometry.coordinates[0];

    // console.log("cordy: " + response.geometry.coordinates[0]);
    return coordinates.map(([lng, lat]) => ({ lat, lng }));
  };

  const formattedCoordinates = formatCoordinates();


  const componentStyle = {
    width: '100%',
    height: '80vh',
    bottom: '0px',
    position: 'fixed',
  };

  return (
    <div>
      <Map cords={formattedCoordinates} center={newCenter} style={componentStyle} />
      {/* <h1>Formatted Coordinates:</h1>
      <ul>
        {formattedCoordinates.map((coordinate, index) => (
          <li key={index}>{`{ lat: ${coordinate.lat}, lng: ${coordinate.lng} },`}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FormattedCoordinates;
