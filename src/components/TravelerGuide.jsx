import React from 'react';
import './styles/TravelerGuide.css';

const TravelerGuide = () => {
  return (
    <div className="traveler-guide-container">
      <div className="text-content1">
        <h1>
          Only Real <br /> <span>Travelers can</span> <br /> guide you...
        </h1>
        <p>
          Only people who’ve actually been there <br />
          can help you plan better, smarter, and <br />
          stress-free.
        </p>
      </div>
      <div className="image-content">
        <img src="/path-to-your-image/b59cb396-1d79-47e3-83f4-da28d0ff61e8.png" alt="Diamond Icon" />
      </div>
    </div>
  );
};

export default TravelerGuide;
