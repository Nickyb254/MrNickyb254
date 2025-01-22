import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InfoCarousel = ({ info }) => {
  const infoRef = useRef([]);  // To store references to each card

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: 0, repeatDelay: 1 });  // Infinite repeat with a delay

    // Animate each card one by one
    infoRef.current.forEach((card, index) => {
      timeline.fromTo(
        card,
        { opacity: 0, y: 50 }, // Start off-screen and invisible
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index , // Stagger delay between cards
        }
      );
    });
  }, []);

  return (
    <div className="carousel-container" style={{ display: 'flex', overflow: 'hidden', justifyContent: 'start' }}>
      <div className="cards-wrapper" style={{ display: 'flex' }}>
        {info.map((text, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => infoRef.current.push(el)}
            style={{
              margin: '0 20px',
              padding: '10px',
              
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              opacity: 0, // Initial opacity
              transform: 'translateY(50px)', // Initial position off-screen
            }}
          >
            <p className='text-gray-700 font-semibold'> {text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCarousel;
