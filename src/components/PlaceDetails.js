import React, { useEffect } from 'react';

function PlaceDetails({ placeId, setPlaceDetails }) {
  useEffect(() => {
    if (placeId) {
      fetch(
        `https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&polygon_geojson=1&format=json`
      )
        .then((response) => response.json())
        .then((data) => setPlaceDetails(data))
        .catch((error) => console.log(error));
    }
  }, [placeId, setPlaceDetails]);

  return <></>;
}

export default PlaceDetails;
