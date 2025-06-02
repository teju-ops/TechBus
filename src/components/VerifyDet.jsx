import React, { useState, useEffect } from "react";
import "./styles/VerifyDet.css";
import cabImage from "../images/cab_image.jpg";
import TravelerBenefits from "./TravelerBenefits";

const initialCabTags = {
  extraKmFare: false,
  fuelType: false,
  cancellation: false,
  after57Km: false,
  cngRefill: false,
  freeTill1Hour: false,
};

const initialInclusive = {
  kms: false,
  stateTaxes: false,
  cancellation: false,
};

const initialExclusive = {
  extraFare: false,
  waitingCharges: false,
};

const initialSpecialRequest = {
  roofCarrier: false,
};

const VerifyDet = ({ onClose, onPayNow }) => {
  const [cabTags, setCabTags] = useState(initialCabTags);
  const [inclusive, setInclusive] = useState(initialInclusive);
  const [exclusive, setExclusive] = useState(initialExclusive);
  const [specialRequest, setSpecialRequest] = useState(initialSpecialRequest);

  useEffect(() => {
    console.log("VerifyDet mounted");
    return () => console.log("VerifyDet unmounted");
  }, []);

  const handleCabTagChange = (e) => {
    const { name, checked } = e.target;
    setCabTags((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleInclusiveChange = (e) => {
    const { name, checked } = e.target;
    setInclusive((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleExclusiveChange = (e) => {
    const { name, checked } = e.target;
    setExclusive((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSpecialRequestChange = (e) => {
    const { name, checked } = e.target;
    setSpecialRequest((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCheckboxClick = (e) => {
    // Example: log the checkbox name and new value
    console.log(`Clicked: ${e.target.name}, will be: ${!cabTags[e.target.name]}`);
  };

  const handleProceedToPayment = () => {
    console.log("Proceeding to payment...");
    if (onPayNow) onPayNow(); // ✅ This is correct!
  };

  return (
    <div className="verify-container">
      <div className="verify-header">
        <h2 className="verify-header-title">Review Booking</h2>
        <div className="verify-header-route-row">
          <span className="verify-header-route-main">
            <b>Zirakpur, Punjab, India to Kasauli, Himachal pradesh, India</b>
          </span>
          <span className="rating-badge">4.2/5</span>
          <span className="verify-header-ratings">206 ratings</span>
        </div>
        <div className="verify-header-meta">
          One way | Pickup: Thu, 17 Apr '25, 10:00 AM
        </div>
      </div>
      <div className="verify-content">
        <div className="cab-info">
          <img src={cabImage} alt="cab" className="cab-image" />
          <div className="cab-details">
            <div className="cab-name">
              Indica, Swift <span className="cab-similar">or similar</span>
              <span className="cab-rating-badge">4.2</span>
              <span className="cab-rating-count">/5</span>
            </div>
            <div className="cab-meta">
              Hatchback • AC • 4 Seats • 57 Kms included
            </div>
            <div className="cab-tags">
              <div className="tag-column">
                <label>
                  <input
                    type="checkbox"
                    name="extraKmFare"
                    checked={cabTags.extraKmFare}
                    onChange={handleCabTagChange}
                    onClick={handleCheckboxClick}
                  />{" "}
                  Extra Km fare
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="fuelType"
                    checked={cabTags.fuelType}
                    onChange={handleCabTagChange}
                    onClick={handleCheckboxClick}
                  />{" "}
                  Fuel type
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="cancellation"
                    checked={cabTags.cancellation}
                    onChange={handleCabTagChange}
                    onClick={handleCheckboxClick}
                  />{" "}
                  Cancellation
                </label>
              </div>
              <div className="tag-column">
                <label>
                  <input
                    type="checkbox"
                    name="after57Km"
                    checked={cabTags.after57Km}
                    onChange={handleCabTagChange}
                  />{" "}
                  14.5/Km after 57 Km
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="cngRefill"
                    checked={cabTags.cngRefill}
                    onChange={handleCabTagChange}
                  />{" "}
                  CNG with refill breaks
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="freeTill1Hour"
                    checked={cabTags.freeTill1Hour}
                    onChange={handleCabTagChange}
                  />{" "}
                  Free till 1 hour of departure
                </label>
              </div>
            </div>
          </div>
          <div className="payment-box">
            <label>
              <input type="checkbox" /> Make part payment now
            </label>
            <p>Pay the rest to their driver</p>
            <p className="price-line">$575</p>
            <label>
              <input type="checkbox" /> Make full payment now
            </label>
            <div className="price-summary">
              <p className="discount">13% off</p>
              <p className="original-price">2,567</p>
              <p className="final-price">1,647</p>
              <p className="tax-note">+608 (Taxes & Charges)</p>
            </div>
            <button
              className="pay-now"
              onClick={() => {
                console.log("Pay Now clicked");
                onPayNow();
              }}
            >
              Pay 567 now
            </button>
            <input type="text" placeholder="eg. CAB789" className="coupon" />
          </div>
        </div>

        <div className="driver-details">
          <h4>Driver and Cab details</h4>
          <div> 
            <strong>Cab operator</strong> will be assigned as soon as booking is
            complete.
            Your cab and driver details will be shared via{" "}
            <strong>WhatsApp & SMS</strong> on your registered mobile number by 30
            Apr 2025 at 09:30 am
          </div>
          <div className="image-tabs">
            <h5>Images of the selected vehicle category</h5>
            <p className="note">
              Car images shown here are for representation purpose only. Actual car
              will belong to the same model but may not be the exact shown in the
              images
            </p>
            <div className="tabs">
              <button className="active">All (4)</button>
              <button>BOOT (1)</button>
              <button>EXTERIOR (1)</button>
              <button>INTERIOR</button>
            </div>
            <div className="img-placeholders">
              <div className="img-box" />
              <div className="img-box" />
              <div className="img-box" />
            </div>
          </div>
        </div>
        {/* Inclusive & Exclusive Section */}
        <div className="inclusive-exclusive-section">
          <div className="inc-exc-title-row">
            <h3>Inclusive & Exclusive</h3>
          </div>
          <div className="inc-exc-content">
            <div className="inc-exc-col">
              <h4>Included in your fare</h4>
              <label>
                <input
                  type="checkbox"
                  name="kms"
                  checked={inclusive.kms}
                  onChange={handleInclusiveChange}
                  onClick={handleCheckboxClick}
                />{" "}
                591 Kms
              </label>
              <label>
                <input
                  type="checkbox"
                  name="stateTaxes"
                  checked={inclusive.stateTaxes}
                  onChange={handleInclusiveChange}
                  onClick={handleCheckboxClick}
                />{" "}
                State Taxes
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cancellation"
                  checked={inclusive.cancellation}
                  onChange={handleInclusiveChange}
                  onClick={handleCheckboxClick}
                />{" "}
                Cancellation
              </label>
            </div>
            <div className="inc-exc-divider"></div>
            <div className="inc-exc-col">
              <h4>Extra charges</h4>
              <label>
                <input
                  type="checkbox"
                  name="extraFare"
                  checked={exclusive.extraFare}
                  onChange={handleExclusiveChange}
                  onClick={handleCheckboxClick}
                />{" "}
                fare beyond 597km: Rs. 17/Km
              </label>
              <label>
                <input
                  type="checkbox"
                  name="waitingCharges"
                  checked={exclusive.waitingCharges}
                  onChange={handleExclusiveChange}
                  onClick={handleCheckboxClick}
                />{" "}
                Waiting charges $10/30 min after 45 min
              </label>
            </div>
          </div>
        </div>
        {/* Inclusive & Exclusive Section END */}

        {/* Special Requests Section */}
        <div className="special-requests-section">
          <div className="special-requests-header">
            <span className="special-requests-title">Special requests</span>
            <span className="special-requests-price">$13</span>
          </div>
          <div className="special-requests-content">
            <div className="special-requests-label">Roof Carrier</div>
            <label className="special-requests-checkbox">
              <input
                type="checkbox"
                name="roofCarrier"
                checked={specialRequest.roofCarrier}
                onChange={handleSpecialRequestChange}
                onClick={handleCheckboxClick}
              />
              <span>Car with roof carrier for extra luggage</span>
            </label>
          </div>
        </div>
        {/* Pickup Address Box */}
        <div className="pickup-address-box">
          <div className="pickup-header">Pickup Address</div>
          <div className="pickup-label">Enter Pick up Location</div>
          <div className="pickup-input-row">
            <input
              className="pickup-input"
              type="text"
              value="bangalore, karnatka, India"
              readOnly
            />
            <span className="pickup-check">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
          <div className="pickup-use-current">Use current address</div>
        </div>
        {/* traveller details card */}

        <div className="traveller-details-card">
          <div className="traveller-details-header">Traveller Details</div>
          <div className="traveller-details-form">
            <div className="traveller-details-row">
              <div className="traveller-details-field">
                <label>Gender</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="traveller-details-field traveller-details-name">
                <label>Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
            </div>
            <div className="traveller-details-row">
              <div className="traveller-details-field phone-field">
                <label>Phone Number</label>
                <div className="phone-input-wrapper">
                  <span className="country-code">+61</span>
                  <input type="text" placeholder="Enter Phone Number" />
                </div>
              </div>
              <div className="traveller-details-field traveller-details-email">
                <label>
                  Email address
                  <span className="email-note">
                    (Your E-ticket will be sent here)
                  </span>
                </label>
                <input type="text" placeholder="Enter full name" />
              </div>
            </div>
            <div className="traveller-details-saved">
              User my saved details
            </div>
          </div>
        </div>
        {/* Cancellation Policy Section */}
        <div className="cancellation-policy-row">
          <span className="cancellation-policy-title">Cancellation Policy</span>
          <span className="cancellation-policy-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 8l3 3 3-3" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        { /* info details */}
        <div className="other-info-row">
          <span className="other-info-title">Other information</span>
          <span className="other-info-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 8l3 3 3-3" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </span>
        </div>
      </div>
      {/* <button className="back-btn" onClick={onClose}>
        ⬅ Back
      </button> */}
      <TravelerBenefits />
    </div>
  );
};

export default VerifyDet;
