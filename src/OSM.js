import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ coordinates }) => {

  const mapRef = useRef(null);

  useEffect(() => {
    // Create map instance
    mapRef.current = L.map('map', {
      center: [50.03, 22.005],
      zoom: 15,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

    // Create polygon layer and add it to the map
    const polygon = L.polygon(coordinates).addTo(mapRef.current);

    // Fit the map to the polygon bounds
    mapRef.current.fitBounds(polygon.getBounds());
  }, []);

  return <div id="map" style={{ width: '100%', height: '700px' }} />;
};

const App = () => {
  const coordinates = [
    [50.0303577, 22.0052045],
    [50.0303064, 22.0053269],
    [50.0299377, 22.0062174],
    [50.0298429, 22.006499],
  ];

  return (
    <div>
      <h1>OpenStreetMap Polygon</h1>
      <Map coordinates={coordinates} />
    </div>
  );
};

export default App;
