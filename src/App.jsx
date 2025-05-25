// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import CabSection from './components/CabSection';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelerBenefits from './components/TravelerBenefits';

const CabPage = () => {
  const [isBookingActive, setIsBookingActive] = React.useState(false);

  return (
    <>
      <Header isBookingActive={isBookingActive} />
      <CabSection setIsBookingActive={setIsBookingActive} />
      {!isBookingActive && <TravelerBenefits />}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabs" element={<CabPage />} />
      </Routes>
    </div>
  );
}

export default App;
