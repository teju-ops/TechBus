import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/TripPlanning.css';

// Images
import planTrip1 from '../images/Tripplan2.png';
import planTrip2 from '../images/Tripplan1.png';
import planTrip3 from '../images/Tripplan3.png';

/* ───────────────────────── Animation variants ───────────────────────── */
const timelineDotVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 300 }
  }),
};

const timelineLineVariants = {
  hidden: { scaleY: 0 },
  visible: (i) => ({
    scaleY: 1,
    transition: { delay: i * 0.15 + 0.1, duration: 0.3 }
  }),
};

/* ───────────────────────── Vertical timeline ───────────────────────── */
const VerticalTimeline = ({ steps, progress, timelineRef }) => {
  const dotCount = steps.length;

  // Calculate dot height percent based on actual timeline height
  let dotHeightPercent = 0;
  if (timelineRef && timelineRef.current) {
    dotHeightPercent = (70 / timelineRef.current.offsetHeight) * 100; // 70px is your dot height
  }

  return (
    <div className="timeline" aria-hidden="true">
      {/* Filler line (orange animated) */}
      <span
        className="timeline-fill"
        style={{ height: `${Math.max(progress, 0.5)}%`, opacity: 1 }}
      />
      {steps.map((completed, i) => {
        const dotPercent = (i / (dotCount - 1)) * 100;
        const isLast = i === dotCount - 1;
        // The bottom of the dot in percent of the timeline
        const dotBottomPercent = dotPercent + dotHeightPercent;
        const isActive =
          i === 0 ||
          (isLast ? progress >= 99.9 : progress >= dotBottomPercent);
        return (
          <React.Fragment key={i}>
            {i !== 0 && (
              <motion.span
                className="timeline-line"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.7 }}
                custom={i}
                variants={timelineLineVariants}
                style={{ transformOrigin: 'top' }}
              />
            )}
            <motion.span
              className={`timeline-dot ${completed ? 'completed' : ''} ${isActive ? 'active' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.7 }}
              custom={i}
              variants={timelineDotVariants}
            >
              {completed ? (
                <span className="custom-checkmark-circle">
                  <span className="custom-checkmark"></span>
                </span>
              ) : (
                <CheckCircle className="timeline-icon" />
              )}
            </motion.span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

/* ───────────────────────── Main section ───────────────────────── */
const TripPlanning = () => {
  const stepStatus = [true, true, true];
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
          <VerticalTimeline steps={stepStatus} progress={progress} timelineRef={timelineRef} />

          <div className="planning-steps">
            <div className="step step-right">
              <div className="step-block image-side first-img">
                <img src={planTrip1} alt="Explore destinations" />
              </div>
              <div className="step-block text-side">
                <div className="mobile-stepper">
                 <span className="mobile-stepper-dot" />
                 <span className="mobile-stepper-line" />
                 <span className="mobile-stepper-line" />
                 <span className="mobile-stepper-arrow">&#8595;</span>
                </div>
                <h3>Explore Destinations</h3>
                <ul>
                  <li className="checked">Browse cities, nature escapes, or offbeat spots</li>
                  <li className="checked">Filter by vibe: Solo, Scenic, Foodie, Cultural</li>
                </ul>
              </div>
            </div>

            <div className="step step-left">
              <div className="step-block image-side second-img">
                <img src={planTrip2} alt="Create itinerary" />
              </div>
              <div className="step-block text-side">
                <div className="mobile-stepper1">
                 <span className="mobile-stepper-dot1" />
                 <span className="mobile-stepper-line1" />
                 <span className="mobile-stepper-line1" />
                 <span className="mobile-stepper-arrow1">&#8595;</span>
                </div>
                <h3>Create Your Itinerary</h3>
                <ul>
                  <li className="checked">Add must-see places, food stops, and hidden gems</li>
                  <li className="checked">Customize based on your interests & time</li>
                </ul>
              </div>
            </div>

            <div className="step step-right">
              <div className="step-block image-side third-img">
                <img src={planTrip3} alt="Chat with experts" />
              </div>
              <div className="step-block text-side">
                <div className="mobile-stepper2">
                 <span className="mobile-stepper-dot2" />
                 <span className="mobile-stepper-line2" />
                 <span className="mobile-stepper-line2" />
                 <span className="mobile-stepper-arrow2">&#8595;</span>
                </div>
                <h3>Chat with Local Experts or Past Travelers</h3>
                <ul>
                  <li className="checked">Ask real travelers or local hosts for tips</li>
                  <li className="checked">Connect securely through our platform (no number needed)</li>
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
