import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="about-us-container">
      {/* Background Image */}
      <div className="background-overlay"></div>
      
      {/* Content */}
      <div className="about-us-content">
        {/* Logo Icon */}
        <div className="logo-icon">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
          </svg>
        </div>

        {/* Company Name */}
        <h1 className="company-name">Paradise Nursery</h1>
        
        {/* Decorative Divider */}
        <div className="divider"></div>
        
        {/* Company Description */}
        <div className="company-description">
          <p>
            Welcome to Paradise Nursery, where nature meets nurture. We cultivate 
            extraordinary houseplants that transform living spaces into vibrant sanctuaries. 
            Each plant is carefully selected and tended, ready to bring life, color, and 
            tranquility to your home.
          </p>
          <p>
            Our mission is to connect people with nature through beautiful, healthy plants. 
            Whether you're a seasoned plant parent or just beginning your green journey, 
            we offer a curated selection that makes it easy to find your perfect companion.
          </p>
        </div>
        
        {/* Get Started Button */}
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
