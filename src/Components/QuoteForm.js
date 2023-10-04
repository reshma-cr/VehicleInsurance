import React from 'react';

const QuoteForm = () => {
  return (
    <div className="quote-form">
      <h2>Request a Quote</h2>
      {/* Add form fields for user input */}
      <form>
        <label>
          Vehicle Type:
          <select>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuoteForm;