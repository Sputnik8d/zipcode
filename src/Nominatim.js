import React, { useState } from 'react';
import PostalCodeForm from './components/PostalCodeForm';
import PlaceDetails from './components/PlaceDetails';
import FormattedCoordinates from './components/FormattedCoordinates';
import './index.css';

const componentStyle = {

  width: '100%',
  height: '100vh',
  position: 'fixed',
  
};

function Nominatim() {
  const [postalCode, setPostalCode] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&format=json&limit=1&addressdetails=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPlaceId(data[0].place_id);
        setError();
      })
      .catch((error) => {
        setError(error);
        setPlaceId();
      })
  };

  const inputStyle = {
    height: '10vh',
    fontsize: '10px'
  };

  return (
    <div className="Nominatim" style={componentStyle}>
      <div style={inputStyle}>
        <PostalCodeForm
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          onSubmit={handleSubmit}
        />
        <section>
          {error && <div>Not found</div>}
          {placeId && <div>Success!</div>}
        </section>

      </div>

      <PlaceDetails placeId={placeId} setPlaceDetails={setPlaceDetails} />
      {placeDetails && (
        <div>
          <FormattedCoordinates response={placeDetails} />
        </div>
      )}
    </div>
  );
}

export default Nominatim;


