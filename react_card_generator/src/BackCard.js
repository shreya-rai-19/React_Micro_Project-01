import React from 'react';
import './BackCard.css';

const BackCard = ({ cvc }) => {
  return (
    <div className="back-card">
      <div className="cvc">{cvc || '000'}</div>
    </div>
  );
};

export default BackCard;
