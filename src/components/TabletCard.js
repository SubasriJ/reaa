import React from 'react';

const TabletCard = ({ tablet }) => {
  return (
    <div className="tablet-card">
      <h2>{tablet.name}</h2>
      <p>{tablet.description}</p>
      <p>{tablet.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default TabletCard;
