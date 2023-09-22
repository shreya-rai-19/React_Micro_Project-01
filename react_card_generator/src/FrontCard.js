import "./FrontCard.css";
import React from "react";

const FrontCard = ({ cardholder, cardNumber, expMonth, expYear }) => {
  return (
    <div className="front-card">
      <div className="content">
        <div className="card-number">{cardNumber || "0000 0000 0000"}</div>

        <div className="card-info">
          <span className="cardholder">{cardholder || "JANE APPLESEED"}</span>
          <span className="valid-month">{expMonth || "00"} / </span>
          <span className="valid-year">{expYear || "00"}</span>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
