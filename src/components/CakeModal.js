import React from "react";

function CakeModal({ name, image, description, price, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
}

export default CakeModal;
