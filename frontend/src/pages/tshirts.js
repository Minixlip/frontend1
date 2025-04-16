// src/pages/tshirts.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Product.css';

const TShirts = () => {
  const tshirtProducts = [
    { title: "'Void Script' Tee", slug: 'void-script', image: '/products/void-script.png' },
    { title: "'Angelcore' Tee", slug: 'angelcore', image: '/products/angelcore.png' },
    { title: "'Sigil Wash' Tee", slug: 'sigil-wash', image: '/products/sigil-wash.png' },
    { title: "'Circuit Halo' Tee", slug: 'circuit-halo', image: '/products/circuit-halo.png' },
    { title: "'Faded Ritual' Tee", slug: 'faded-ritual', image: '/products/faded-ritual.png' },
    { title: "'Synthetic Bloom' Tee", slug: 'synthetic-bloom', image: '/products/synthetic-bloom.png' },
  ];

  return (
    <div className="page-content">
      <h2 className="section-title">T-Shirts</h2>
      <div className="product-row">
        {tshirtProducts.map((product, idx) => (
          <Link to={`/product/${product.slug}`} key={idx} style={{ textDecoration: 'none' }}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TShirts;
