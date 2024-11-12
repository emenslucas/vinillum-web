import React from 'react';

const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;