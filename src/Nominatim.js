import React, { useState } from 'react';
import PostalCodeForm from './components/PostalCodeForm';
import AddressDetails from './components/AddressDetails';
import PlaceDetails from './components/PlaceDetails';
import FormattedCoordinates from './components/FormattedCoordinates';

function Nominatim() {
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);

  const handleSubmit = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&format=json&limit=1&addressdetails=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setAddress(data[0]);
        setPlaceId(data[0].place_id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Nominatim">
      <PostalCodeForm
        postalCode={postalCode}
        setPostalCode={setPostalCode}
        onSubmit={handleSubmit}
      />
      <AddressDetails address={address} />
      <PlaceDetails placeId={placeId} setPlaceDetails={setPlaceDetails} />
      {placeDetails && (
        <div>
          {/* <h1>Place Details:</h1>
          <p>{JSON.stringify(placeDetails)}</p> */}
          <h1>Place Details:</h1>
          <p>{JSON.stringify(placeDetails)}</p>
          <FormattedCoordinates response={placeDetails} />


        </div>
      )}
    </div>
  );
}

export default Nominatim;


