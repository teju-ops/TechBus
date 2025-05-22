 import React from 'react';
import { CheckCircle } from 'lucide-react';          // icon library
import './styles/TripPlanning.css';

// Images
import planTrip1 from '../images/Tripplan2.png';
import planTrip2 from '../images/Tripplan1.png';
import planTrip3 from '../images/Tripplan3.png';

/* ───────────────────────── Vertical timeline ───────────────────────── */
const VerticalTimeline = ({ steps }) => (
  <div className="timeline" aria-hidden="true">
    {steps.map((completed, i) => (
      <React.Fragment key={i}>
        {/* Connector (skip the first one) */}
        {i !== 0 && <span className="timeline-line" />}
        {/* Dot */}
        <span className={`timeline-dot ${completed ? 'completed' : ''}`}>
          <CheckCircle className="timeline-icon" />
        </span>
      </React.Fragment>
    ))}
  </div>
);

/* ───────────────────────── Main section ───────────────────────── */
const TripPlanning = () => {
  // true = step completed / highlighted
  const stepStatus = [true, false, false];

  return (
    <section className="trip-planning">
      <div className="container">
        {/* Header */}
        <header className="planning-header">
          <h1 className="planning-title">How Do I Plan My Trip?</h1>
          <p className="planning-subtitle">
            Discover places, explore traveler stories, and customize your adventure — all in one
            place.
          </p>
          <button className="planning-button">
            Start Planning now <span className="arrow">→</span>
          </button>
        </header>

        {/* Timeline + Steps */}
        <div className="timeline-wrapper">
          {/* vertical line + icons */}
          <VerticalTimeline steps={stepStatus} />

          {/* right / left staggered cards */}
          <div className="planning-steps">
            {/* ── Step 1 ── */}
            <div className="step step-right">
              <div className="step-block image-side first-img">
                <img src={planTrip1} alt="Explore destinations" />
              </div>
              <div className="step-block text-side">
                <h3>Explore Destinations</h3>
                <ul>
                  <li>Browse cities, nature escapes, or offbeat spots</li>
                  <li>Filter by vibe: Solo, Scenic, Foodie, Cultural</li>
                </ul>
              </div>
            </div>

            {/* ── Step 2 ── */}
            <div className="step step-left">
              <div className="step-block image-side second-img">
                <img src={planTrip2} alt="Create itinerary" />
              </div>
              <div className="step-block text-side">
                <h3>Create Your Itinerary</h3>
                <ul>
                  <li>Add must-see places, food stops, and hidden gems</li>
                  <li>Customize based on your interests &amp; time</li>
                </ul>
              </div>
            </div>

            {/* ── Step 3 ── */}
            <div className="step step-right">
              <div className="step-block image-side third-img">
                <img src={planTrip3} alt="Chat with experts" />
              </div>
              <div className="step-block text-side">
                <h3>Chat with Local Experts or Past Travelers</h3>
                <ul>
                  <li>Ask real travelers or local hosts for tips</li>
                  <li>Connect securely through our platform (no number needed)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;
