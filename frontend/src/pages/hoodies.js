// src/pages/hoodies.js
import React from 'react';
import Product from '../components/Product';
import '../components/Product.css';
import { Link } from 'react-router-dom';

const hoodieProducts = [
  {
    title: "'Ashen Drape' Hoodie",
    slug: 'ashen-drape',
    image: '/products/ashen-drape.png',
  },
  {
    title: "'ShroudTech' Hoodie",
    slug: 'shroudtech',
    image: '/products/shroudtech.png',
  },
  {
    title: "'Fadecloak' Hoodie",
    slug: 'fadecloak',
    image: '/products/fadecloak.png',
  },
  {
    title: "'Coreghost' Hoodie",
    slug: 'coreghost',
    image: '/products/coreghost.png',
  },
  {
    title: "'Softvoid' Hoodie",
    slug: 'softvoid',
    image: '/products/softvoid.png',
  },
  {
    title: "'Cold Sigil' Hoodie",
    slug: 'coldsigil',
    image: '/products/cold-sigil.png',
  },
];

const Hoodies = () => {
  return (
    <div className="page-content">
      <h2 className="section-title">hoodies</h2>
      <div className="product-row">
        {hoodieProducts.map((product, idx) => (
          <Link to={`/product/${product.slug}`} key={idx} style={{ textDecoration: 'none' }}>
            <Product title={product.title} image={product.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hoodies;
