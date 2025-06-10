import React, { useState } from "react";
import "./styles/PaymentSec.css";
import creditCardIcon from "../images/creditcard.png"; 
import NetbankingIcon from "../images/netbanking.png"; 
import WalletsIcon from "../images/Wallet.png";
import phonepayIcon from "../images/phonepay.png";
import amazonpayIcon from "../images/amazonpay.png";
import promoIcon from "../images/promoicon.png"; 
import CabImage from "../images/cab_image.jpg"; 

const banks = [
  { name: "SBI", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/SBI-logo-blue.svg" },
  { name: "HDFC", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/HDFC_Bank_Logo.svg" },
  { name: "ICICI", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/ICICI_Bank_Logo.svg" },
  { name: "Axis", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Axis_Bank_logo.svg" },
  { name: "Kotak", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kotak_Mahindra_Bank_logo.svg" },
  { name: "Yes bank", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Yes_Bank_logo.svg" }
];

const PaymentSec = ({ onClose }) => {
  const [selectedBank, setSelectedBank] = useState("SBI");

  return (
    <div className="payment-main-wrapper payment-white-bg">
      <div className="payment-header-custom">
        <div className="payment-logo-placeholder-custom"></div>
        <nav className="payment-nav-custom">
          <ul>
            <li className="active">
              Home
              <span className="nav-underline-custom"></span>
            </li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </nav>
        <button className="payment-login-btn-custom">Login/Signup</button>
      </div>
      <div className="payment-content">
        <div className="payment-left">
          <div className="payment-title-row">
            <h2>
              Pay 2756 to confirm the booking
            </h2>
            <span className="payment-timer">
              Time Left <span className="timer-dot"></span> 19:30
            </span>
          </div>
          <div className="booking-summary-card-custom">
            <img src={CabImage} alt="cab" className="booking-summary-img-custom"/>
            <div className="booking-summary-details-custom">
              <div className="booking-summary-route-custom">
                <b>Zirakpur, Punjab, India to Kasauli, Himachal pradesh, India</b>
              </div>
              <div className="booking-summary-meta-custom">
                One way | Pickup: Thu, 17 Apr ‘25, 10:00 AM
              </div>
              <div className="booking-summary-user-custom">
                Ritik Singh | ritik2singhrajput@gmail.com | +917807806307
              </div>
            </div>
            <span className="booking-summary-link-custom">Show details</span>
          </div>
          <div className="payment-options-section-custom">
            <div className="payment-options-title-custom">Payment options</div>
            {/* Credit/Debit Cards */}
            <div className="payment-group-custom">
              <div className="payment-group-header-custom">
                <span className="payment-group-icon-custom cards">
                  <img src={creditCardIcon} alt="Creditcard" className="creditcard-name" />
                </span>
                <span className="payment-group-label-custom">Credit/Debit Cards</span>
                <span className="payment-group-arrow-custom">▼</span>
              </div>
            </div>
            <hr className="payment-divider-custom" />

            {/* Net Banking */}
            <div className="payment-group-custom">
              <div className="payment-group-header-custom">
                <span className="payment-group-icon-custom netbanking">
                  <img src={NetbankingIcon} alt="Netbanking" className="netbanking-name" />
                </span>
                <span className="payment-group-label-custom">Net Banking</span>
                <span className="payment-group-arrow-custom">▲</span>
              </div>
            </div>
            <hr className="payment-divider-custom" />

            {/* Wallets */}
            <div className="payment-group-custom">
              <div className="payment-group-header-custom">
                <span className="payment-group-icon-custom wallets">
                  <img src={WalletsIcon} alt="Wallets" className="wallets-name" />
                </span>
                <span className="payment-group-label-custom">Wallets</span>
                <span className="payment-group-arrow-custom">▼</span>
              </div>
            </div>
            <hr className="payment-divider-custom" />

            {/* UPI */}
            <div className="payment-group-custom">
              <div className="payment-group-header-custom">
                <span className="payment-group-icon-custom upi">
                  <img src={WalletsIcon} alt="Wallets" className="wallets-name" />
                </span>
                <span className="payment-group-label-custom">UPI</span>
                <span className="payment-group-arrow-custom">▼</span>
              </div>
              <div className="upi-options-custom">
                <div className="upi-option-custom">
                  <img src={phonepayIcon} alt="Phone pay" className="upi-icon-custom" />
                  <span className="upi-label-custom">Phone pay</span>
                  <input type="radio" name="upi" defaultChecked className="upi-radio-custom" />
                </div>
                <div className="upi-option-custom">
                  <img src={amazonpayIcon} alt="Amazon pay" className="upi-icon-custom" />
                  <span className="upi-label-custom">Amazon pay</span>
                  <input type="radio" name="upi" className="upi-radio-custom" />
                </div>
                <div className="upi-option-custom">
                  <img src={phonepayIcon} alt="Phone pay" className="upi-icon-custom" />
                  <span className="upi-label-custom">Phone pay</span>
                  <input type="radio" name="upi" className="upi-radio-custom" />
                </div>
                <div className="upi-option-custom">
                  <img src={amazonpayIcon} alt="Amazon pay" className="upi-icon-custom" />
                  <span className="upi-label-custom">Amazon pay</span>
                  <input type="radio" name="upi" className="upi-radio-custom" />
                </div>
              </div>
            </div>

            {/* Promo code */}
            <div className="promo-section-custom">
              <div className="promo-label-row-custom">
                <span className="promo-icon-custom">
                  <img src={promoIcon} alt="promo" className="promo-icon-name" />
                </span>
                <span className="promo-label-custom"><strong>Apply Promo Code</strong></span>
              </div>
              <div className="promo-sub-label-custom">Avail offers and discounts on your order</div>
              <div className="promo-code-row-custom">
                <label className="promo-code-label-custom">Promo code</label>
                <input className="promo-code-input-custom" placeholder="Enter promo code" />
                <button className="promo-add-btn-custom">Add</button>
              </div>
            </div>
            <div className="promo-view-more-custom">
              View more coupons and offers <span className="promo-arrow-custom">›</span>
            </div>
          </div>
        </div>
        <div className="payment-right">
          <div className="payment-summary-card">
            <div className="summary-row">
              <span className="summary-label">Grand Total</span>
              <span className="summary-value green">$2756</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Fare</span>
              <span className="summary-value">$2756</span>
            </div>
          </div>
          <div className="cab-driver-details-card">
            <div className="cab-driver-title">Cab & Driver details</div>
            <div className="cab-driver-desc">
              Will be shared by 30 Apr 2025 at 09:00 AM
            </div>
          </div>
          <div className="included-benefits-card">
            <div className="benefit-title">Included Benefetts</div>
            <div className="benefit-row">
              <span className="benefit-dot green"></span>
              <span>Free Cancellation</span>
            </div>
            <div className="benefit-desc">Til 30 Apr, 2025: 09:00 AM</div>
            <div className="benefit-row">
              <span className="benefit-dot green"></span>
              <span>Free Waiting</span>
            </div>
            <div className="benefit-desc">Upto 45 minutes</div>
          </div>
          <div className="scan-to-pay-card">
            <div className="scan-title">Scan to pay</div>
            <div className="scan-placeholder"></div>
          </div>
        </div>
      </div>
      {/* <button onClick={onClose}>Cancel</button> */}
      {/* Optionally add a close/cancel button for user to exit payment */}
    </div>
  );
};


export default PaymentSec;


