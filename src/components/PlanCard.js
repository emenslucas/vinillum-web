import React from 'react';

const PlanCard = ({ type, price, duration, features, isPaid }) => {
  return (
    <div id={`${isPaid ? 'paid-card' : 'free-card'}`}>
      <div className="card-title">
        <span className="plan-type">{type}</span>
        <h3>{price}</h3>
        <span className="card-time">{duration}</span>
      </div>
      <div className="card-info">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.includes('+') ? 'active' : 'inactive'}>
              {feature.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;