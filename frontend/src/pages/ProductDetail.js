// src/pages/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useCart } from '../context/CartContext';

const productData = {
  // 👖 Jeans
  'invisible-jeans': {
    title: "'Invisible' Jeans",
    image: '/products/invisible-jeans.png',
    description: 'Fades into shadow. Built for silence.',
  },
  'static-fade': {
    title: "'Static Fade' Jeans",
    image: '/products/static-fade.png',
    description: 'Wears like a memory. Never quite there.',
  },
  'shadowstitch': {
    title: "'Shadowstitch' Jeans",
    image: '/products/shadowstitch.png',
    description: 'Dark-threaded and ghost-marked.',
  },
  'ashcut': {
    title: "'Ashcut' Jeans",
    image: '/products/ashcut.png',
    description: 'Soft-char. Touched by ruin.',
  },
  'dreamloop-denim': {
    title: "'Dreamloop Denim' Jeans",
    image: '/products/dreamloop-denim.png',
    description: 'Drifts like sleep, feels like fiction.',
  },
  'washed-losts': {
    title: "'Washed Losts' Jeans",
    image: '/products/washed-losts.png',
    description: 'Faded. Timeworn. Gone and back again.',
  },

  // 👕 T-Shirts
  'void-script': {
    title: "'Void Script' Tee",
    image: '/products/void-script.png',
    description: 'Ink drawn from digital dreams. Echoes of code and dust.',
  },
  'angelcore': {
    title: "'Angelcore' Tee",
    image: '/products/angelcore.png',
    description: 'Lightborn threads with divine glitch embroidery.',
  },
  'sigil-wash': {
    title: "'Sigil Wash' Tee",
    image: '/products/sigil-wash.png',
    description: 'Worn like a memory. Marked with faded symbols.',
  },
  'circuit-halo': {
    title: "'Circuit Halo' Tee",
    image: '/products/circuit-halo.png',
    description: 'Loops and auras—shaped for electric saints.',
  },
  'faded-ritual': {
    title: "'Faded Ritual' Tee",
    image: '/products/faded-ritual.png',
    description: 'Lost rites printed in grayscale dimension.',
  },
  'synthetic-bloom': {
    title: "'Synthetic Bloom' Tee",
    image: '/products/synthetic-bloom.png',
    description: 'Floral wire fractals on decomposed cotton.',
  },

  // 🧥 Hoodies
  'ashen-drape': {
    title: "'Ashen Drape' Hoodie",
    image: '/products/ashen-drape.png',
    description: 'Worn by dusk. Heavyweight comfort in ruin.',
  },
  'shroudtech': {
    title: "'ShroudTech' Hoodie",
    image: '/products/shroudtech.png',
    description: 'Urban-coded layers with ciphered warmth.',
  },
  'fadecloak': {
    title: "'Fadecloak' Hoodie",
    image: '/products/fadecloak.png',
    description: 'Glitched dye. Warped reality.',
  },
  'coreghost': {
    title: "'Coreghost' Hoodie",
    image: '/products/coreghost.png',
    description: 'Ghost-printed. High collar and low profile.',
  },
  'softvoid': {
    title: "'Softvoid' Hoodie",
    image: '/products/softvoid.png',
    description: 'Pale black fleece with forgotten logos.',
  },
  'coldsigil': {
    title: "'Cold Sigil' Hoodie",
    image: '/products/cold-sigil.png',
    description: 'Faint marks from lost guilds.',
  },

  // 🕶️ More
  'tarnished-sigil-ring': {
    title: "'Tarnished Sigil' Ring",
    image: '/products/tarnished-sigil.png',
    description: 'Relic of a cult that never was.',
  },
  'artifact-chain': {
    title: "'Artifact Chain'",
    image: '/products/artifact-chain.png',
    description: 'Forged from lost tech. Each link unique.',
  },
  'arcane-glasses': {
    title: "'Arcane Glasses'",
    image: '/products/arcane-glasses.png',
    description: 'Sight beyond style. Lens-coded.',
  },
  'static-charm': {
    title: "'Static Charm'",
    image: '/products/static-charm.png',
    description: 'Buzzes when unseen. Lucky? Maybe.',
  },
  'glyph-cuff': {
    title: "'Glyph Cuff'",
    image: '/products/glyph-cuff.png',
    description: 'Engraved with symbols no longer in use.',
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug];
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return <div className="page-content"><h2>Product not found</h2></div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    addToCart({
      title: product.title,
      image: product.image,
      slug,
      size: selectedSize,
    });
  };

  return (
    <div className="page-content product-detail">
      <h2 className="section-title">{product.title}</h2>
      <div className="detail-content">
        <img src={product.image} alt={product.title} className="detail-image" />
        <p className="detail-description">{product.description}</p>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="size" className="size-label">Size:</label>
          <select
            id="size-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{
              fontSize: '1.2rem',
              padding: '10px',
              fontFamily: 'GothicWar',
              backgroundColor: 'black',
              color: 'white',
              border: '1px solid white',
              borderRadius: '10px',
              marginLeft: '10px'
            }}
          >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
