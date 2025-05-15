import React from 'react';
import './styles/TravelerBenefits.css';
import tripImage from '../images/travel.png';
import tripImage1 from '../images/travel1.png';

const TravelerBenefits = () => {
  return (
    <section className="traveler-benefits">
      <div className="benefits-left">
        <h1>
          10,000+ travelers <br />
          have discovered <br />
          unforgettable <br />
          journeys on <br />
          <span>Triplane</span>
        </h1>
      </div>
      <div className="benefits-right">
        <img src={tripImage} alt="Traveler Highlights" className="trip-image" />
      </div>
      <div className="benefits-second">
        <img src={tripImage1} alt="Traveler Highlights" className="trip-image" />
      </div>
    </section>
  );
};

export default TravelerBenefits;
