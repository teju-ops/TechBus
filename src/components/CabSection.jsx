import React, { useState } from "react";
import "./styles/CabSection.css";
import cabImage from "../images/cab_image.jpg";
import VerifyDet from "./VerifyDet";
import PaymentSec from "./PaymentSec";

const cabData = Array(10).fill({
  name: "Indica, Swift",
  type: "Hatchback",
  features: "AC • 4 Seats • 57 Kms included",
  rating: "4.2/5",
  ratingText: "206 ratings",
  price: "1,647",
  originalPrice: "2,567",
  imageUrl: cabImage,
});

const filters = {
  cabType: ["HATCHBACK", "SEDAN", "SUV"],
  fuelType: ["CNG", "DIESEL", "SUV"],
  cabModel: ["Toyota Innova", "Innova Crysta"],
};

const FilterSidebar = () => (
  <div className="filter-sidebar">
    <h3>Select filters</h3>
    <div className="filter-group">
      <p className="filter-label">Cab type</p>
      {filters.cabType.map((type, i) => (
        <label key={i}>
          <input type="checkbox" /> {type} <span className="count">(10)</span>
        </label>
      ))}
    </div>
    <div className="filter-group">
      <p className="filter-label">Fuel Type</p>
      {filters.fuelType.map((type, i) => (
        <label key={i}>
          <input type="checkbox" /> {type} <span className="count">(10)</span>
        </label>
      ))}
    </div>
    <div className="filter-group">
      <p className="filter-label">Cab Model</p>
      {filters.cabModel.map((model, i) => (
        <label key={i}>
          <input type="checkbox" /> {model} <span className="count">(10)</span>
        </label>
      ))}
    </div>
  </div>
);

const CabCard = ({ cab, onBookNow }) => (
  <div className="cab-card">
    <img src={cab.imageUrl} alt={cab.name} className="cab-image" />
    <div className="cab-details">
      <div className="cab-name">
        {cab.name} <span className="cab-similar">or similar</span>
        <span className="cab-rating-badge">{cab.rating}</span>
        <span className="cab-rating-count">{cab.ratingText}</span>
      </div>
      <div className="cab-meta">
        {cab.type} • {cab.features}
      </div>
      <div className="cab-tags">
        <div className="tag-column">
          <label><input type="checkbox" /> Extra Km fare</label>
          <label><input type="checkbox" /> Fuel type</label>
          <label><input type="checkbox" /> Cancellation</label>
        </div>
        <div className="tag-column">
          <label><input type="checkbox" /> 14.5/Km after 57 Km</label>
          <label><input type="checkbox" /> CNG with refill breaks</label>
          <label><input type="checkbox" /> Free till 1 hour of departure</label>
        </div>
      </div>
    </div>
    <div className="cab-price-section">
      <div className="cab-discount">13% off</div>
      <div className="cab-original-price">₹{cab.originalPrice}</div>
      <div className="cab-price">₹{cab.price}</div>
      <div className="cab-tax-note">+608 (Taxes & Charges)</div>
      <button className="book-btn" onClick={onBookNow}>Book Now</button>
    </div>
  </div>
);

// Use only App-level state for payment and booking
const CabSection = ({ setIsBookingActive, isBookingActive, isPaymentActive, setIsPaymentActive }) => {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  const handleVerifyClose = () => {
    setIsVerifyOpen(false);
    setIsBookingActive && setIsBookingActive(false);
  };

  const handlePayNow = () => {
    setIsVerifyOpen(false);
    setIsPaymentActive(true);
  };

  const handleBookNow = () => {
    setIsBookingActive && setIsBookingActive(true);
    setIsVerifyOpen(true);
  };

  const handlePaymentBack = () => {
    setIsPaymentActive(false);
    setIsVerifyOpen(true);
  };

  return (
    <div className="page-wrapper">
      {!isVerifyOpen && !isPaymentActive && (
        <>
          <FilterSidebar />
          <div className="cab-section-wrapper">
            <div className="cab-section">
              <div className="free-cancellation-banner">
                ✅ Free Cancellation before 17 Apr, 2025. 09:00 AM IST
              </div>
              {cabData.map((cab, index) => (
                <CabCard key={index} cab={cab} onBookNow={handleBookNow} />
              ))}
              <div className="load-more-container">
                <button className="load-more-btn">Load More</button>
              </div>
            </div>
          </div>
        </>
      )}

      {isVerifyOpen && (
        <VerifyDet
          onClose={handleVerifyClose}
          onPayNow={handlePayNow}
        />
      )}

      {isPaymentActive && (
        <PaymentSec
          onClose={handleVerifyClose}
          onBack={handlePaymentBack}
        />
      )}
    </div>
  );
};

export default CabSection;
