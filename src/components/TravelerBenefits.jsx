import React from 'react';
import './styles/TravelerBenefits.css';
import tripImage from '../images/travel0.png';     // Optional main image
// import tripImage1 from '../images/travel1.png';   // Avatar ring image

const TravelerBenefits = () => {
  return (
    <section className="traveler-benefits">
      <div className="benefits-left">
        <h1>
          10,000+ travelers <br />
          have discovered <br />
          unforgettable <br />
          journeys on <br />
          Triplane
        </h1>
      </div>

      <div className="benefits-right">
        {/* Avatar ring background */}
        <div className="benefits-second">
          {/* <img src={tripImage1} alt="Traveler Highlights" /> */}
        </div>

        {/* Optional main image in foreground (remove if not used) */}
        <img src={tripImage} alt="Trip Highlights" className="trip-image" />

        {/* Highlight cards */}
         {/* <div className="highlight highlight1">
          Aarav found offbeat <br />
          hill stations with <br />
          fewer crowds
        </div>  */}

        {/* <div className="highlight highlight2">
          Mira planned her <br />
          entire food trail <br />
          across South India in <br />
          15 minutes
        </div> */} 
      </div>
    </section>
  );
};

export default TravelerBenefits;
