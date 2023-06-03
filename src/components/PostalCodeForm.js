import React from 'react';

function PostalCodeForm({ postalCode, setPostalCode, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Podaj kod pocztowy: 
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </label>
      <input type="submit" value="Znajdź" />
    </form>
  );
}

export default PostalCodeForm;
