import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import CabSection from './components/CabSection';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelerBenefits from './components/TravelerBenefits';

const CabPage = () => {
  const [isBookingActive, setIsBookingActive] = React.useState(false);
  const [isPaymentActive, setIsPaymentActive] = React.useState(false);

  return (
    <>
      {!isPaymentActive && <Header isBookingActive={isBookingActive} />}

      <CabSection
        setIsBookingActive={setIsBookingActive}
        isBookingActive={isBookingActive}
        isPaymentActive={isPaymentActive}
        setIsPaymentActive={setIsPaymentActive}
      />

      {!isBookingActive && !isPaymentActive && <TravelerBenefits />}
      {!isPaymentActive && <Footer />}
    </>
  );
};

function App() {
  const [transportType, setTransportType] = React.useState('');

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              transportType={transportType}
              setTransportType={setTransportType}
            />
          }
        />
        <Route path="/cabs" element={<CabPage />} />
      </Routes>
    </div>
  );
}

export default App;
