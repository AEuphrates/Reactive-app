import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <section className="bmi-index">
      <div className="bmi-container">
        <h2>BMI Calculator</h2>
        <input
          type="number"
          placeholder="Your Height in cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate</button>
        {bmi && <p>Your BMI is {bmi}</p>}
      </div>
    </section>
  );
};

export default BMICalculator;
