import React, { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ onSubmit }) => {
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (cardholder.trim() === "") {
      newErrors.cardholder = "Cardholder name required.";
    } else if (!/^[A-Za-z\s]+$/.test(cardholder)) {
      newErrors.cardholder =
        "Cardholder name should only contain letters and spaces.";
    }
    if (cardNumber.trim() === "") {
      newErrors.cardNumber = "Card number required.";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number should be 16 digits.";
    }
    if (expMonth.trim() === "" || expYear.trim() === "") {
      newErrors.expDate = "Expiration date is required.";
    } else if (!/^\d{2}$/.test(expMonth) || !/^\d{2}$/.test(expYear)) {
      newErrors.expDate = "Expiration date should be in MM/YY format.";
    }
    if (cvc.trim() === "") {
      newErrors.cvc = "CVC is required.";
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "CVC should be of 3 digits.";
    } else if (!/^\d+$/.test(cvc)) {
      newErrors.cvc = "CVC should be numeric.";
    }
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ cardholder, cardNumber, expMonth, expYear, cvc });

      toast.success("SUCESS", {
        position: "top-center",
        autoClose: 2000, // Automatically close the toast after 2 seconds
        hideProgressBar: true,
      });
    } else {
      setErrors(newErrors);
    }
  };

  const clearError = (field) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined, // Clear the error for the specified field
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-card">
        <div className="name">
          <label>CARDHOLDER NAME</label>
          <br />
          <input
            placeholder="e.g. Jane Appleseed"
            type="text"
            value={cardholder}
            onChange={(e) => {
              setCardholder(e.target.value);
              clearError("cardholder"); // Clear the error for cardholder
            }}
          />
          {errors.cardholder && <p className="error">{errors.cardholder}</p>}
        </div>
        <br />
        <br />

        <div className="number">
          <label>CARD NUMBER</label>
          <br />
          <input
            placeholder="e.g. 1234 5678 9123 0000"
            type="text"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
              clearError("cardNumber"); // Clear the error for cardNumber
            }}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <br />
        <br />

        <span className="exp-cvc">
          <div className="expiry">
            <label>EXP. DATE(MM/YY)</label>
            <br />
            <input
              className="exp month"
              type="text"
              placeholder="MM"
              value={expMonth}
              onChange={(e) => {
                setExpMonth(e.target.value);
                clearError("expDate"); // Clear the error for expDate
              }}
            />
            <input
              className="exp"
              type="text"
              placeholder="YY"
              value={expYear}
              onChange={(e) => {
                setExpYear(e.target.value);
                clearError("expDate"); // Clear the error for expDate
              }}
            />
            {errors.expDate && <p className="error">{errors.expDate}</p>}
          </div>

          <div className="cvcno">
            <label>CVC</label>
            <br />
            <input
              className="cv"
              placeholder="e.g. 123"
              type="text"
              value={cvc}
              onChange={(e) => {
                setCVC(e.target.value);
                clearError("cvc"); // Clear the error for cvc
              }}
            />
            {errors.cvc && <p className="error">{errors.cvc}</p>}
          </div>
        </span>
        <br />
        <br />

        <button className="btn">Confirm</button>
      </div>
    </form>
  );
};

export default Form;
