import React, { useState } from 'react';

function Calculator() {
  const [year, setYear] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [premium, setPremium] = useState(null);
  const modAmount=2000;
  const handleAddonChange = (value) =>{
    switch(value){
        case "mod1": modAmount= 2000;break;
        case "mod2": modAmount= 2000 * 3;break;
        case "mod3": modAmount= 2000 * 4;break;
        case "mod4": modAmount= 2000 * 5;break;
        default: break;
    }
  }

  const calculatePremium = () => {
    // Simplified premium calculation formula (for demonstration)
    // Premium = (Age * 10) + (Vehicle Value / 100)
    const yearPremium = (2023-year) * 100;
    const vehicleValuePremium = vehicleValue / 100;
    const totalPremium = yearPremium + vehicleValuePremium + modAmount;
    setPremium(totalPremium.toFixed(2)); // Round to two decimal places
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePremium();
  };

  return (
    <div className="calculator">
        <h2>Car Insurance Premium</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Year of purchase:</label>
          <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} min={2000} max={2023}required/>
        </div>
        <div>
          <label htmlFor="vehicleValue">Vehicle Value (Rs.):</label>
          <input type="number" id="vehicleValue" value={vehicleValue} onChange={(e) => setVehicleValue(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="models">Select the Model:</label>
          <select multiple id="models"  onChange={handleAddonChange()}>
            <option value="mod1">Hatch Back</option>
            <option value="mod2">Sedan</option>
            <option value="mod3">SUV</option>
            <option value="mod4">MUV</option>
          </select>
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
export default Calculator;