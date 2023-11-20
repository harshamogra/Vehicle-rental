// src/BikeList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BikeList.css';
import bikeData from './bikeData';

const BikeList = () => {
  const bikes = bikeData; // Assuming bikeData is exporting the 'bikes' array
  const navigate = useNavigate();

  const handleBookNow = (bike) => {
    // Navigate to the BikeDetails page with the bike id as a parameter
    navigate(`/bikedetails/${bike.id}`);
  };

  return (
    <div>
      <h2>CHOOSE A RIDE</h2>
      <div className="bike-list">
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageSrc} alt={`${bike.brand} ${bike.model}`} />
            <div className="bike-details">
              <h3>{`${bike.brand} ${bike.model}`}</h3>
              <p>Manufactured Year: {bike.year}</p>
              <p>Rental Cost: Rs{bike.cost}/day</p>
              <button onClick={() => handleBookNow(bike)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeList;
