import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bikeData from './bikeData';
import './BikeDetails.css';

const BikeDetails = () => {
  const { id } = useParams();
  const bike = bikeData.find((bike) => bike.id === parseInt(id, 10));

  // Default values for state
  const initialPickupDate = new Date();
  const initialDropDate = new Date();

  // Dropdown state
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(initialPickupDate);
  const [dropDate, setDropDate] = useState(initialDropDate);

  // Ensure bike is not null before rendering
  if (!bike) {
    return <p>Bike not found!</p>;
  }

  // Calculate total price based on pickup and drop locations
  const calculatePrice = () => {
    if (pickupDate && dropDate) {
      const numberOfDays = Math.ceil((dropDate - pickupDate) / (24 * 60 * 60 * 1000));
      return numberOfDays * bike.cost;
    }
    return 0;
  };

  // Handle Confirm Booking
  const confirmBooking = () => {
    if (pickupLocation && dropLocation && pickupDate && dropDate) {
      const totalPrice = calculatePrice();
      alert(`Booking confirmed! Total Price: Rs${totalPrice}`);
    } else {
      alert('Please fill in all details before confirming booking.');
    }
  };

  // Render the component
  return (
    <div>
      <h1>{`${bike.brand} ${bike.model} Details`}</h1>
      <img src={bike.imageSrc} alt={`${bike.brand} ${bike.model}`} />
      <p>Manufactured Year: {bike.year}</p>
      <p>Rental Cost: Rs{bike.cost}/day</p>

      {/* Dropdowns and Date pickers */}
      <div>
        <label>Pickup Location</label>
        <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
          <option value="">Select Pickup Location</option>
          <option value="Malleshwaram Showroom">Malleshwaram Showroom</option>
          <option value="JP Nagar Showroom">JP Nagar Showroom</option>
          <option value="Kormangala Showroom">Kormangala Showroom</option>
          <option value="RR Nagar Showroom">RR Nagar Showroom</option>
          <option value="Yelahanka Showroom">Yelahanka Showroom</option>
        </select>
      </div>

      <div>
        <label>Drop Location</label>
        <select value={dropLocation} onChange={(e) => setDropLocation(e.target.value)}>
          <option value="">Select Drop Location</option>
          <option value="Malleshwaram Showroom">Malleshwaram Showroom</option>
          <option value="JP Nagar Showroom">JP Nagar Showroom</option>
          <option value="Kormangala Showroom">Kormangala Showroom</option>
          <option value="RR Nagar Showroom">RR Nagar Showroom</option>
          <option value="Yelahanka Showroom">Yelahanka Showroom</option>
        </select>
      </div>

      <div>
        <label>Pickup Date</label>
        <DatePicker selected={pickupDate} onChange={(date) => setPickupDate(date)} />
      </div>

      <div>
        <label>Drop Date</label>
        <DatePicker selected={dropDate} onChange={(date) => setDropDate(date)} />
      </div>

      {/* Price display */}
      <div>
        <p>Total Price:</p>
        <p className="price-value">Rs{calculatePrice()}</p>
      </div>

      {/* Confirm Booking button */}
      <button onClick={confirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BikeDetails;
