import React from 'react';
import './Product.css';

const Product = ({ title, slug, image = '/placeholder-product.png' }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Product;
