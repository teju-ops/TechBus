import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import './styles/TripPlanning.css';

// Images
import planTrip1 from '../images/Tripplan2.png';
import planTrip2 from '../images/Tripplan1.png';
import planTrip3 from '../images/Tripplan3.png';

/* ───────────────────────── Vertical timeline ───────────────────────── */
const VerticalTimeline = ({ steps, progress }) => (
  <div className="timeline" aria-hidden="true">
    {/* Filler line (orange animated) */}
    <span
      className="timeline-fill"
      style={{ height: `${progress}%` }}
    />
    {steps.map((completed, i) => (
      <React.Fragment key={i}>
        {i !== 0 && <span className="timeline-line" />}
        <span className={`timeline-dot ${completed ? 'completed' : ''}`}>
          <CheckCircle className="timeline-icon" />
        </span>
      </React.Fragment>
    ))}
  </div>
);

/* ───────────────────────── Main section ───────────────────────── */
const TripPlanning = () => {
  const stepStatus = [true, false, false];
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const { top, height } = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = Math.min(
        Math.max((windowHeight - top) / height, 0),
        1
      );

      setProgress(visible * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="trip-planning">
      <div className="container">
        <header className="planning-header">
          <h1 className="planning-title">How Do I Plan My Trip?</h1>
          <p className="planning-subtitle">
            Discover places, explore traveler stories, and customize your adventure — all in one place.
          </p>
          <button className="planning-button">
            Start Planning now <span className="arrow">→</span>
          </button>
        </header>

        <div className="timeline-wrapper" ref={timelineRef}>
          <VerticalTimeline steps={stepStatus} progress={progress} />

          <div className="planning-steps">
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

            <div className="step step-left">
              <div className="step-block image-side second-img">
                <img src={planTrip2} alt="Create itinerary" />
              </div>
              <div className="step-block text-side">
                <h3>Create Your Itinerary</h3>
                <ul>
                  <li>Add must-see places, food stops, and hidden gems</li>
                  <li>Customize based on your interests & time</li>
                </ul>
              </div>
            </div>

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
