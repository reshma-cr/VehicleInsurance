import React from 'react';
import InsuranceCard from '../src/Components/InsuranceCard';
import QuoteForm from '../src/Components/QuoteForm';
import './index.css';
import CarQuotePage from './Components/CarQuotePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeQuotePage from './Components/BikeQuotePage';
import Calculator from './Components/CarPremium';
import BikeCalculator from './Components/BikePremium';


function App() {
  return (
    <div className="App">
      <h1>VEHICLE INSURANCE</h1>
      <div className="insurance-container">
        <InsuranceCard type="Car Insurance" description="Get a quote for your car insurance." linkTo="/car-quote"/>
        <InsuranceCard type="Bike Insurance" description="Explore insurance options for your bike." linkTo="/bike-quote"/>
      </div>
      {/*<QuoteForm />*/}
    </div>
  );
}

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/car-quote" element={<CarQuotePage/>}/>
        <Route path="/bike-quote" element={<BikeQuotePage/>}/>
        <Route path="/car-premium" element={<Calculator/>}/>
        <Route path="/bike-premium" element={<BikeCalculator/>}/>
      </Routes>
    </Router>
  )
}

export default Root;
