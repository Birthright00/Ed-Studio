// src/components/PortfolioCategory/PortfolioCategory.js
import React from 'react';
import './PortfolioCategory.css';

const PortfolioCategory = ({ name, images }) => {
  return (
    <div className="portfolio-category">
      <div className="category-content">
        <h2>{name}</h2>
        <div className="preview-images">
          {/* Only the first image will be displayed by default */}
          <img src={images[0]} alt={`${name} 1`} />
          {/* The second and third images are initially hidden */}
          <img src={images[1]} alt={`${name} 2`} />
          <img src={images[2]} alt={`${name} 3`} />
        </div>
      </div>
      <div className="hover-circle"></div>
    </div>
  );
};

export default PortfolioCategory;
