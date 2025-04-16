import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="page-content cart-page">
      <h2 className="section-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-thumb" />
              <div className="cart-item-text">
                <h3>{item.title}</h3>
                {item.size && <p className="cart-item-size">Size: {item.size}</p>}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.slug)}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
