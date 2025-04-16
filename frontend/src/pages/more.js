// src/pages/more.js
import React from 'react';
import Product from '../components/Product';
import '../components/Product.css';
import { Link } from 'react-router-dom';

const moreProducts = [
  {
    title: "'Tarnished Sigil' Ring",
    slug: 'tarnished-sigil-ring',
    image: '/products/tarnished-sigil.png',
  },
  {
    title: "'Artifact Chain'",
    slug: 'artifact-chain',
    image: '/products/artifact-chain.png',
  },
  {
    title: "'Arcane Glasses'",
    slug: 'arcane-glasses',
    image: '/products/arcane-glasses.png',
  },
  {
    title: "'Static Charm'",
    slug: 'static-charm',
    image: '/products/static-charm.png',
  },
  {
    title: "'Glyph Cuff'",
    slug: 'glyph-cuff',
    image: '/products/glyph-cuff.png',
  },
];

const More = () => {
  return (
    <div className="page-content">
      <h2 className="section-title">More</h2>
      <div className="product-row">
        {moreProducts.map((product, idx) => (
          <Link key={idx} to={`/product/${product.slug}`} style={{ textDecoration: 'none' }}>
            <Product title={product.title} image={product.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default More;
