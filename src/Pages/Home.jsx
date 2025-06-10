import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hotel from '../components/Hotel';
import LocalExpert from '../components/LocalExpert';
import SuccessStories from '../components/SuccessStories';
import TravelerBenefits from '../components/TravelerBenefits';
import TravelerGuide from '../components/TravelerGuide';
import TripPlanning from '../components/TripPlanning';
import CabSection from '../components/CabSection';

const Home = ({ transportType, setTransportType }) => {
  const location = useLocation();
  const [isBookingActive, setIsBookingActive] = useState(false);

  return (
    <div className="home-page" style={{ color: 'black' }}>
      <Header
        isBookingActive={isBookingActive}
        transportType={transportType}
        setTransportType={setTransportType}
      />

      {/* Hide custom-booking-container if on /cabs route */}
      {location.pathname !== '/cabs' && transportType !== 'Cabs' && (
        <div className="custom-booking-container">
          {/* ...your booking form or content... */}
        </div>
      )}

      {transportType === 'Cabs' ? (
        <>
          <CabSection
            setIsBookingActive={setIsBookingActive}
            isBookingActive={isBookingActive}
          />
          <TravelerGuide />
        </>
      ) : (
        <>
          <TravelerGuide />
          <TripPlanning />
          <TravelerBenefits />
          <LocalExpert />
          <Hotel />
          <SuccessStories />
          <Blog />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
