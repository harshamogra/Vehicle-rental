// src/CarDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CarDetails.css'; // Import the CSS file

const UseDropdown = (label, defaultState, options) => {
  const [state, setState] = React.useState(defaultState);
  const id = `id_${label}`;

  const Dropdown = () => (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option value="">Select {label}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );

  return [state, Dropdown];
};

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id, 10));

  const [pickupLocation, PickupLocationDropdown] = UseDropdown('Pickup Location', '', [
    'Malleshwaram Showroom',
    'Kormangala Showroom',
    'JP Nagar Showroom',
    'RR Nagar Showroom',
    'Yelahanka Showroom',
  ]);

  const [dropLocation, DropLocationDropdown] = UseDropdown('Drop Location', '', [
    'Malleshwaram Showroom',
    'Kormangala Showroom',
    'JP Nagar Showroom',
    'RR Nagar Showroom',
    'Yelahanka Showroom',
  ]);

  const [paymentMode, PaymentModeDropdown] = UseDropdown('Payment Mode', '', [
    'Credit Card',
    'Debit Card',
    'Cash',
  ]);

  const [pickupDate, setPickupDate] = React.useState(null);
  const [dropDate, setDropDate] = React.useState(null);

  const calculatePrice = () => {
    if (pickupDate && dropDate) {
      const numberOfDays = Math.ceil((dropDate - pickupDate) / (24 * 60 * 60 * 1000));
      return numberOfDays * car.cost;
    }
    return 0;
  };

  const confirmBooking = () => {
    if (pickupLocation && dropLocation && paymentMode && pickupDate && dropDate) {
      const totalPrice = calculatePrice();
      alert(`Booking confirmed! Total Price: Rs${totalPrice}`);
    } else {
      alert('Please fill in all details before confirming booking.');
    }
  };

  return (
    <div className="container">
      <h1>BOOKING</h1>

      <img src={car.imageSrc} alt={`${car.company} ${car.model}`} />
      <h2>{`${car.company} ${car.model}`}</h2>
      <p>Manufactured Year: {car.year}</p>
      <p>Rental Cost: Rs{car.cost}/day</p>

      {/* Date pickers */}
      <div className="row-container date-picker-container">
        <div>
          <label>Pickup Date</label>
          <DatePicker selected={pickupDate} onChange={(date) => setPickupDate(date)} />
        </div>
        <div>
          <label>Drop Date</label>
          <DatePicker selected={dropDate} onChange={(date) => setDropDate(date)} />
        </div>
      </div>

      {/* Dropdowns */}
      <div className="row-container dropdown-container">
        <div>
          
          <PickupLocationDropdown />
        </div>
        <div>
          
          <DropLocationDropdown />
        </div>
        <div>
          
          <PaymentModeDropdown />
        </div>
      </div>

      {/* Price display */}
      <div className="row-container price-container">
        <p>Total Price:</p>
        <p className="price-value">Rs{calculatePrice()}</p>
      </div>

      <button onClick={confirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default CarDetails;