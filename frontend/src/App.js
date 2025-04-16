import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Jeans from './pages/jeans';
import TShirts from './pages/tshirts';
import Hoodies from './pages/hoodies';
import More from './pages/more';
import ContactPage from './pages/contact';
import ProductDetail from './pages/ProductDetail';
import Product from './components/Product';
import CartPage from './pages/Cart';
import { CartProvider, useCart } from './context/CartContext';

function AppWrapper() {
  return (
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  );
}

function App() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.2);
  const { cartItems } = useCart();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      const tryPlay = () => {
        audio.muted = false;
        audio.play().catch(() => {});
        document.removeEventListener('click', tryPlay);
      };
      document.addEventListener('click', tryPlay);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <div className="logo">logo</div>
          <div className="volume-slider inline">
            <label htmlFor="volume">🔊</label>
            <input
              type="range"
              id="volume"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <div className="header-center">
          <h1 className="title">Kyyl9</h1>
        </div>

        <nav className="nav header-right">
          <Link to="/">Home</Link>
          <Link to="/jeans">Jeans</Link>
          <Link to="/tshirts">T-Shirts</Link>
          <Link to="/hoodies">Hoodies</Link>
          <Link to="/more">More</Link>
          <Link to="/cart" className="cart-link">
            Cart{cartItems.length > 0 && ` (${cartItems.length})`}
          </Link>
        </nav>
      </header>

      <audio ref={audioRef} src="/bg-music.mp3" autoPlay loop muted preload="auto" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/tshirts" element={<TShirts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/more" element={<More />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function Home() {
  const bestsellers = [
    {
      title: "'Invisible' Jeans",
      slug: 'invisible-jeans',
      image: '/products/invisible-jeans.png',
    },
    {
      title: "'Sigil Wash' Tee",
      slug: 'sigil-wash',
      image: '/products/sigil-wash.png',
    },
    {
      title: "'Coreghost' Hoodie",
      slug: 'coreghost',
      image: '/products/coreghost.png',
    },
  ];

  return (
    <main className="bestsellers-section">
      <h2 className="section-title">Bestsellers</h2>
      <div className="product-row">
        {bestsellers.map((product, idx) => (
          <Link to={`/product/${product.slug}`} key={idx} style={{ textDecoration: 'none' }}>
            <Product title={product.title} image={product.image} />
          </Link>
        ))}
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>2025 © Kyyl9 — All rights reserved.</p>
      <Link to="/contact" className="footer-contact-button">Contact</Link>
    </footer>
  );
}

export default AppWrapper;
