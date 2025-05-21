import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import CabSection from './components/CabSection';
import Header from './components/Header';
import Footer from './components/Footer';
import TravelerBenefits from './components/TravelerBenefits';

const CabPage = () => (
  <>
    <Header />
    <CabSection />
    <TravelerBenefits />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabs" element={<CabPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
