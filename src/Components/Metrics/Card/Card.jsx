import React from 'react';
import './style.css';

const Card = ({ title, subtitle, badge, fromPercent }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <p className="cardTitle">{title}</p>
        <p className="cardSubtitle">{subtitle}</p>
      </div>
      <div className="cardInfo">
        <div className={`cardBadge ${badge < 0 ? 'negative' : (badge === 0 ? 'zero' : '')}`}>
          {badge >= 0 ? `+${badge}%` : `${badge}%`}
        </div>
        <p className="cardFromPercent">From {fromPercent}%</p>
      </div>
    </div>
  );
};

export default Card;
