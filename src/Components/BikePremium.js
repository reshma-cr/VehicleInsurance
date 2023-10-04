import React, { useState } from 'react';

function BikeCalculator() {
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [premium, setPremium] = useState(null);
  const calculatePremium = () => {
    const yearPremium = (2023-year) * 100;
    const vehicleValuePremium = vehicleValue / 100;
    const totalPremium = yearPremium + vehicleValuePremium;
    setPremium(totalPremium.toFixed(2));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePremium();
  };

  return (
    <div className="calculator">
    <h2>Bike Insurance Premium</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Year of purchase:</label>
          <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min={2000} max={2023}required/>
        </div>
        <div>
          <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>
          <input type="number" id="vehicleValue" value={vehicleValue} onChange={(e) => setVehicleValue(e.target.value)} required/>
        </div>
        <button type="submit">Calculate Premium</button>
      </form>
      {premium !== null && (
        <div className="result">
          <p>Your premium is: Rs.{premium}</p>
        </div>
      )}
    </div>
  );
}
export default BikeCalculator;