import React from "react";
import PropTypes from "prop-types";
import "../styles/CakeCard.css";

function CakeCard({ image, name, description, price }) {
  return (
    <div className="cake-card">
      <img src={image} alt={name} className="cake-card-image" />
      <div className="cake-card-info">
        <h3 className="cake-card-name">{name}</h3>
        <p className="cake-card-description">{description}...</p>
        <div className="cake-card-price-container">
          <span className="cake-card-price-label">Price:</span>
          <span className="cake-card-price">{price}</span>
        </div>
        <button className="cake-card-button">Add to Cart</button>
      </div>
    </div>
  );
}

CakeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CakeCard;
