import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hotel from '../components/Hotel';
import LocalExpert from '../components/LocalExpert';
import PaymentSec from '../components/PaymentSec';
import SuccessStories from '../components/SuccessStories';
import TravelerBenefits from '../components/TravelerBenefits';
import TravelerGuide from '../components/TravelerGuide';
import TripPlanning from '../components/TripPlanning';
import CabSection from '../components/CabSection';
import VerifyDet from '../components/VerifyDet';

const Home = ({ transportType, setTransportType }) => {
  const location = useLocation();

  // New state to track if booking is active (i.e., Book Now clicked)
  const [isBookingActive, setIsBookingActive] = useState(false);

  return (
    <div className="home-page" style={{ color: 'black', padding: '20px' }}>
      {/* Pass isBookingActive to Header */}
      <Header isBookingActive={isBookingActive} />

      {transportType === 'Cabs' ? (
        <>
          {/* Pass setIsBookingActive to CabSection so it can notify when Book Now clicked */}
          <CabSection setIsBookingActive={setIsBookingActive} />
          {/* Show VerifyDet only if booking is active */}
          {isBookingActive && <VerifyDet />}
          <PaymentSec />
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
