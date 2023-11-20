// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import Home component
import CarList from './CarList';
import BikeList from './BikeList';
import CarDetails from './CarDetails';
import BikeDetails from './BikeDetails';
import Login from './Login';
import cars from './carData';
import bikes from './bikeData'; // Import bikes data

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/car-list" element={<CarList />} />
          <Route path="/bike-list" element={<BikeList />} />
          <Route path="/car-details/:id" element={<CarDetails cars={cars} />} />
          <Route path="/bike-details/:id" element={<BikeDetails bikes={bikes} />} />
          <Route path="/bikedetails/:id" element={<BikeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
