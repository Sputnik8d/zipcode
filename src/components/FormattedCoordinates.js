import React from 'react';

function FormattedCoordinates({ response }) {
  const formatCoordinates = () => {
    const coordinates = response.geometry.coordinates[0];
    return coordinates.map(([lng, lat]) => ({ lat, lng }));
  };

  const formattedCoordinates = formatCoordinates();

  return (
    <div>
      <h1>Formatted Coordinates:</h1>
      <ul>
        {formattedCoordinates.map((coordinate, index) => (
          <li key={index}>{`{ lat: ${coordinate.lat}, lng: ${coordinate.lng} },`}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormattedCoordinates;
