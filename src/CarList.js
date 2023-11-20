// src/CarList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CarList.css';

const CarList = () => {
  const cars = [
    {
      id: 1,
      imageSrc: '/Toyota_Camry_Hybrid.jpg',
      company: 'Toyota',
      model: 'Camry',
      year: 2022,
      cost: 5000,
    },
    {
      id: 2,
      imageSrc: '/HONDA_CIVIC.jpg',
      company: 'Honda',
      model: 'Civic',
      year: 2021,
      cost: 4500,
    },
    {
      id: 3,
      imageSrc: '/NISSAN_ALTIMA.jpg',
      company: 'Nissan',
      model: 'Altima',
      year: 2023,
      cost: 4800,
    },
    {
      id: 4,
      imageSrc: '/FORD_MUSTANG.jpg',
      company: 'Ford',
      model: 'Mustang',
      year: 2022,
      cost: 6000,
    },
    {
      id: 5,
      imageSrc: '/CHEVROLET_CAMARO.png',
      company: 'Chevrolet',
      model: 'Camaro',
      year: 2023,
      cost: 5500,
    },
    {
      id: 6,
      imageSrc: '/HYUNDAI_SONATA.png',
      company: 'Hyundai',
      model: 'Sonata',
      year: 2022,
      cost: 4700,
    },
    {
      id: 7,
      imageSrc: '/BMW_3_SERIES.jpg',
      company: 'BMW',
      model: '3 Series',
      year: 2021,
      cost: 6500,
    },
    {
      id: 8,
      imageSrc: '/LAMBORGINI_AVENTADOR.png',
      company: 'Lamborghini',
      model: 'Aventador',
      year: 2023,
      cost: 15000,
    },
    {
      id: 9,
      imageSrc: '/PORSCHE_911.jpeg',
      company: 'Porsche',
      model: '911',
      year: 2022,
      cost: 12000,
    },
    {
      id: 10,
      imageSrc: '/FERRARI_488.avif',
      company: 'Ferrari',
      model: '488 GTB',
      year: 2021,
      cost: 18000,
    },
  ];

  const handleBookNow = (car) => {
    console.log('Book Now clicked for:', car);
    // Placeholder logic for handling the "Book Now" button click
    // Redirect to a new page with details (to be implemented later)
  };

  return (
    <div>
      <h2>CHOOSE A RIDE</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.imageSrc} alt={`${car.company} ${car.model}`} />
            <div className="car-details">
              <h3>{`${car.company} ${car.model}`}</h3>
              <p>Manufactured Year: {car.year}</p>
              <p>Rental Cost: Rs{car.cost}/day</p>
              <Link to={`/car-details/${car.id}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
