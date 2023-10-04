import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'

const BikeQuotePage = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    vehicleType: 'bike', // Default value
    vehicleModelName: '',
    purchaseDate: '',
    ownerContactNumber: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure ownerContactNumber is a valid number with max 10 digits
    if (name === 'ownerContactNumber' && !/^\d*$/.test(value)) {
      return; // Do not update the state if the input is invalid
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server
    console.log('Bike Form submitted:', formData);
    navigate('/bike-premium');
  };

  return (
    <div>
      <h2>Bike Insurance Quote</h2>
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
            type="tel" // Use type "tel" for telephone numbers
            name="ownerContactNumber"
            pattern="\d*" // Allow only digits
            maxLength="10" // Set maximum length to 10
            value={formData.ownerContactNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button type="submit">Get Bike Quote</button>
      </form>
    </div>
  );
};

export default BikeQuotePage;
