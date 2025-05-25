import React from "react";
import "./styles/PaymentSec.css";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSec = () => {
  return (
    <div className="payment-sec">
      <h2 className="payment-title">
        Pay <span className="amount-highlight">2756</span> to confirm the booking
      </h2>

      <div className="booking-summary">
        <div className="booking-info">
          <img src="/images/cab_image.jpg" alt="cab" className="cab-thumbnail" />
          <div>
            <strong>Zirakpur, Punjab, India to Kasauli, Himachal pradesh, India</strong>
            <p>One way | Pickup: Thu, 17 Apr '25, 10:00 AM</p>
            <p>Ritik Singh | ritik2singhrajput@gmail.com | +91 7807806307</p>
          </div>
        </div>
        <button className="details-btn">Show details</button>
      </div>

      <div className="payment-options">
        <h3>Payment options</h3>

        <details open>
          <summary className="payment-method-title">Credit/Debit Cards</summary>
          <div className="card-option">[ Card Input Section Placeholder ]</div>
        </details>

        <details open>
          <summary className="payment-method-title">Net Banking</summary>
          <div className="bank-options">
            {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Yes bank"].map((bank, i) => (
              <button key={i} className={`bank-button ${i === 0 ? "selected" : ""}`}>{bank}</button>
            ))}
            <select className="bank-dropdown">
              <option>Select a different bank</option>
            </select>
          </div>
        </details>

        <details>
          <summary className="payment-method-title">Wallets</summary>
        </details>

        <details>
          <summary className="payment-method-title">UPI</summary>
        </details>

        <div className="promo-code">
          <label htmlFor="promo">Apply Promo Code</label>
          <div className="promo-input-group">
            <input type="text" id="promo" placeholder="Enter promo code" />
            <button>Add</button>
          </div>
          <a href="#" className="more-coupons">View more coupons and offers →</a>
        </div>
      </div>

      <div className="payment-summary">
        <div className="total-amount">
          <strong>Grand Total</strong>
          <span className="amount">₹2756</span>
        </div>
        <div className="fare-line">
          <span>Fare</span>
          <span>₹2756</span>
        </div>
        <div className="cab-driver-details">
          Cab & Driver details<br />
          <small>Will be shared by 30 Apr 2025 at 09:00 AM</small>
        </div>

        <div className="included-benefits">
          <h4>Included Benefitts</h4>
          <p><FaCheckCircle className="icon-check" /> Free Cancellation<br /><small>Till 30 Apr, 2025: 09:00 AM</small></p>
          <p><FaCheckCircle className="icon-check" /> Free Waiting<br /><small>Upto 45 minutes</small></p>
        </div>

        <div className="scan-to-pay">
          <h4>Scan to pay</h4>
          <div className="scan-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSec;
