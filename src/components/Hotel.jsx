import React from 'react';
import './styles/Hotel.css';

import hotel1 from '../images/h1.png';
import hotel2 from '../images/h2.png';
import hotel3 from '../images/h4.png';
import hotel4 from '../images/h3.png';
import hotel5 from '../images/h5.png';
import hotel6 from '../images/h6.png';
import hotel7 from '../images/h7.png';
import hotel8 from '../images/h1.png';

const hotels = [
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom', image: hotel1 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom', image: hotel2 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom', image: hotel3 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Nottingham, United Kingdom', image: hotel4 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom', image: hotel5 },
  { name: 'Lorem ipsum dolor sit amet', location: 'York, United Kingdom', image: hotel6 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom', image: hotel7 },
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom', image: hotel8 },
];

const HotelsSection = () => {
  return (
    <section className="hotels-section-alt">
      <div className="container">
        <div className="header">
          <div className="text-content">
            <h2>Top <span>Hotels in UK</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi tempor proin rhoncus malesuada pharetra. Tellus et.</p>
          </div>
          <button className="btn-outline">Browse All Hotels</button>
        </div>

        <div className="grid">
          {hotels.map((hotel, idx) => (
            <div className="card" key={idx}>
              <img src={hotel.image} alt={hotel.name} className="card-img" />
              <div className="card-content">
                <p className="card-title">{hotel.name}</p>
                <p className="card-location">{hotel.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
