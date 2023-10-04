import React from 'react';
import {Link} from 'react-router-dom';


const InsuranceCard = ({ type, description, linkTo }) => {
  return (
    <Link underline='none' to={linkTo} className="card insurance-card">
        <div className="card-body">
      <h3 className="card-title">{type}</h3>
      <p className="card-text">{description}</p>
      <i className="fas fa-shield-alt"></i>
      </div>
    </Link>
  );
};

export default InsuranceCard;
