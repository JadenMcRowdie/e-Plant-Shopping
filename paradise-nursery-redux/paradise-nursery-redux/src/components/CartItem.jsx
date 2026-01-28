import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Coming Soon: Checkout functionality will be implemented in the next phase!');
  };

  return (
    <div className="cart-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => navigate('/')}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#2d5016" 
              strokeWidth="2"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span className="navbar-brand">Paradise Nursery</span>
          </div>

          {/* Nav Links */}
          <div className="navbar-links">
            <button className="nav-link" onClick={() => navigate('/')}>Home</button>
            <button className="nav-link" onClick={() => navigate('/products')}>Plants</button>
            <button className="nav-link active cart-link">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="cart-content">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="empty-cart">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ccc" 
              strokeWidth="1.5"
            >
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-text">Add some beautiful plants to get started!</p>
            <button className="btn-primary" onClick={handleContinueShopping}>
              Browse Plants
            </button>
          </div>
        ) : (
          // Cart with Items
          <>
            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="summary-item">
                <h3 className="summary-label">Total Items</h3>
                <p className="summary-value">{totalQuantity}</p>
              </div>
              <div className="summary-item">
                <h3 className="summary-label">Total Cost</h3>
                <p className="summary-value">${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="cart-item-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Thumbnail */}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                  
                  {/* Item Details */}
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">Unit Price: ${item.price}</p>
                    <p className="cart-item-total-price">
                      Total: ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="cart-item-controls">
                    {/* Decrease Button */}
                    <button
                      className="quantity-btn decrease-btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      >
                        <path d="M5 12h14"/>
                      </svg>
                    </button>
                    
                    {/* Quantity Display */}
                    <span className="quantity-display">{item.quantity}</span>
                    
                    {/* Increase Button */}
                    <button
                      className="quantity-btn increase-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      >
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                      </svg>
                    </button>
                    
                    {/* Delete Button */}
                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        <line x1="10" x2="10" y1="11" y2="17"/>
                        <line x1="14" x2="14" y1="11" y2="17"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="cart-actions">
              <button className="btn-secondary" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
