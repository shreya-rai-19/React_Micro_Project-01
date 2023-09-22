import Form from "./Form";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="main">
      <div className="card">
        <div className="frontCard">
          <FrontCard {...formData} />
        </div>
        <div className="backCard">
          <BackCard {...formData} />
        </div>
      </div>
      <div className="formCard">
        <Form onSubmit={handleSubmit} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
