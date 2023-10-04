import React, { useState } from 'react';
import '../App.css';
import { useNavigate} from 'react-router-dom'

const CarQuotePage = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    vehicleType: 'hatchback', // Default value
    vehicleModelName: '',
    purchaseDate: '',
    ownerContactNumber: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    console.log('Form submitted:', formData);
    navigate('/car-premium');
  };

  return (
    <div>
      <h2>Car Insurance Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Registration Number:
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        {/* <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            required
          >
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="muv">MUV</option>
          </select>
        </label>
        <br /> */}

        <label>
          Vehicle Model Name:
          <input
            type="text"
            name="vehicleModelName"
            value={formData.vehicleModelName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        {/* <label>
          Purchase Date:
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br /> */}

        <label>
          Owner Contact Number:
          <input
            type="tel"
            name="ownerContactNumber"
            pattern="\d*"
            maxLength="10"
            value={formData.ownerContactNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button type="submit">Get Car Quote</button>
      </form>
    </div>
  );
};

export default CarQuotePage;

