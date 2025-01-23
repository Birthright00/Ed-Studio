// src/components/Portfolio/Portfolio.js
import React from 'react';
import PortfolioCategory from '../PortfolioCategory/PortfolioCategory';  // Importing PortfolioCategory
import './Portfolio.css';

const categories = [
  {
    name: 'Physique',
    images: [
      '/images/physique1.jpg',
      '/images/physique2.jpg',
      '/images/physique3.jpg',
    ],
  },
  {
    name: 'Modeling',
    images: [
      '/images/modeling1.jpg',
      '/images/modeling2.jpg',
      '/images/modeling3.jpg',
    ],
  },
  {
    name: 'Cosplay',
    images: [
      '/images/cosplay1.jpg',
      '/images/cosplay2.jpg',
      '/images/cosplay3.jpg',
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {categories.map((category) => (
          <PortfolioCategory
            key={category.name}
            name={category.name}
            images={category.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
