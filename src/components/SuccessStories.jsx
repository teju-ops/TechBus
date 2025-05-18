import React from 'react';
import './styles/SuccessStories.css';

// Importing local images
import S1 from '../images/S4.jpg';
import S2 from '../images/S2.jpg';
import S3 from '../images/S3.jpg';
import S4 from '../images/S1.jpg';
import VideoIcon from '../images/Video Clip.png'; // Assuming it's placed in src/icons/

const stories = [
  {
    // img: S1,
    title: 'Lorem ipsum dolor sit amet consectetur. Porttitor molestie.',
    views: '170K views',
  },
  {
    // img: S2,
    title: 'Lorem ipsum dolor sit amet consectetur. Sed montes magna.',
    views: '170K views',
  },
  {
    // img: S3,
    title: 'Lorem ipsum dolor sit amet consectetur. Porttitor molestie.',
    views: '170K views',
  },
  {
    // img: S4,
    title: 'Lorem ipsum dolor sit amet consectetur. Porttitor molestie.',
    views: '170K views',
  },
];

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="container">
        <h2>Hear <span>Travel success stories</span></h2>
        <p>Only travelers who have travelled those cities can help you get answers</p>

        <div className="video-stories">
          {stories.map((story, index) => (
            <div className="video-item" key={index}>
              <div className="image-wrapper">
                <img src={story.img} alt={`story-${index + 1}`} />
                <img className="video-icon" src={VideoIcon} alt="Video Icon" />
              </div>
              <p>{story.title}</p>
              <span>{story.views}</span>
            </div>
          ))}
        </div>

        <button className="browse-videos">Browse All Videos</button>
      </div>
    </section>
  );
};

export default SuccessStories;
