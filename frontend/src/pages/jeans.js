// src/pages/jeans.js
import React from 'react';
import Product from '../components/Product';
import '../components/Product.css';
import { Link } from 'react-router-dom';

const Jeans = () => {
  const jeanProducts = [
    {
      title: "'Invisible' Jeans",
      slug: 'invisible-jeans',
      image: '/products/invisible-jeans.png',
    },
    {
      title: "'Static Fade' Jeans",
      slug: 'static-fade',
      image: '/products/static-fade.png',
    },
    {
      title: "'Shadowstitch' Jeans",
      slug: 'shadowstitch',
      image: '/products/shadowstitch.png',
    },
    {
      title: "'Ashcut' Jeans",
      slug: 'ashcut',
      image: '/products/ashcut.png',
    },
    {
      title: "'Dreamloop Denim' Jeans",
      slug: 'dreamloop-denim',
      image: '/products/dreamloop-denim.png',
    },
    {
      title: "'Washed Losts' Jeans",
      slug: 'washed-losts',
      image: '/products/washed-losts.png',
    },
  ];

  return (
    <div className="page-content">
      <h2 className="section-title">jeans</h2>
      <div className="product-row">
        {jeanProducts.map((product, idx) => (
          <Link key={idx} to={`/product/${product.slug}`} style={{ textDecoration: 'none' }}>
            <Product title={product.title} image={product.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jeans;
