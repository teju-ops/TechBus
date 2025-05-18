import React from 'react';
import './styles/TripPlanning.css';
import planTrip1 from '../images/plantrip1.png';
import planTrip2 from '../images/plantrip2.png';
import planTrip3 from '../images/plantrip3.png';

const TripPlanning = () => {
  return (
    <section className="trip-planning">
      <div className="container">
        <div className="planning-header">
          <h1 className="planning-title">How Do I Plan My Trip?</h1>
          <p className="planning-subtitle">
            Discover places, explore traveler stories, and customize your adventure — all in one place.
          </p>
          <button className="planning-button">
            Start Planning Now <span className="arrow">→</span>
          </button>
        </div>

        <div className="planning-steps">
          <div className="step step-right">
            <div className="first-img">
              <div className="step-image">
                <img src={planTrip1} alt="Explore destinations" />
              </div>
            </div>
            <div className="step-content1">
              <h3>Explore Destinations</h3>
              <ul>
                <li>Browse cities, nature escapes, or offbeat spots</li>
                <li>Filter by vibe: Solo, Scenic, Foodie, Cultural</li>
              </ul>
            </div>
          </div>

          <div className="step step-left">
            <div className="second-img">
              <div className="step-image">
                <img src={planTrip2} alt="Create itinerary" />
              </div>
            </div>
            <div className="step-content2">
              <h3>Create Your Itinerary</h3>
              <ul>
                <li>Add must-see places, food stops, and hidden gems</li>
                <li>Customize based on your interests & time</li>
              </ul>
            </div>
          </div>

          <div className="step step-right">
            <div className="third-img">
              <div className="step-image">
                <img src={planTrip3} alt="Chat with experts" />
              </div>
            </div>
            <div className="step-content3">
              <h3>Chat with Local Experts or Past Travelers</h3>
              <ul>
                <li>Ask real travelers or local hosts for tips</li>
                <li>Connect securely through our platform (no number needed)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;
