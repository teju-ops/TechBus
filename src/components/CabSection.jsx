import React from "react";
import "./styles/CabSection.css";
import cabImage from "../images/cab_image.jpg";

const cabData = Array(10).fill({
  name: "Indica, Swift",
  type: "Hatchback",
  features: "AC • 4 Seats • 57 Kms included",
  rating: "4.2/5",
  ratingText: "206 ratings",
  price: "1,647",
  originalPrice: "2,567",
  imageUrl: cabImage
});

const filters = {
  cabType: ["HATCHBACK", "SEDAN", "SUV"],
  fuelType: ["CNG", "DIESEL", "SUV"],
  cabModel: ["Toyota Innova", "Innova Crysta"]
};

const FilterSidebar = () => (
  <div className="filter-sidebar">
    <h3>Select filters</h3>

    <div className="filter-group">
      <p className="filter-label">Cab type</p>
      {filters.cabType.map((type, i) => (
        <label key={i}><input type="checkbox" /> {type} <span className="count">(10)</span></label>
      ))}
    </div>

    <div className="filter-group">
      <p className="filter-label">Fuel Type</p>
      {filters.fuelType.map((type, i) => (
        <label key={i}><input type="checkbox" /> {type} <span className="count">(10)</span></label>
      ))}
    </div>

    <div className="filter-group">
      <p className="filter-label">Cab Model</p>
      {filters.cabModel.map((model, i) => (
        <label key={i}><input type="checkbox" /> {model} <span className="count">(10)</span></label>
      ))}
    </div>
  </div>
);

const CabCard = ({ cab }) => (
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
      <button className="book-btn">Book Now</button>
    </div>
  </div>
);

const CabSection = () => {
  return (
    <div className="page-wrapper">
      <FilterSidebar />
      <div className="cab-section-wrapper">
        <div className="cab-section">
          <div className="free-cancellation-banner">
            ✅ Free Cancellation before 17 Apr, 2025. 09:00 AM IST
          </div>
          {cabData.map((cab, index) => (
            <CabCard cab={cab} key={index} />
          ))}
          <div className="load-more-container">
            <button className="load-more-btn">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabSection;
