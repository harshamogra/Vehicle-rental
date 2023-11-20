// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to the Ride Rental Website</h1>
        <p>Choose your vehicle:</p>
      </div>
      <div className="home-links">
        <ul>
          <li>
            <Link to="/car-list" className="nav-link">
              View Car List
            </Link>
          </li>
          <li>
            <Link to="/bike-list" className="nav-link">
              View Bike List
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
