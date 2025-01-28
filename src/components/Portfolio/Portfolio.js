// src/components/Portfolio/Portfolio.js
import React from 'react';
import PortfolioCategory from '../PortfolioCategory/PortfolioCategory';  // Importing PortfolioCategory
import './Portfolio.css';

const photocategories = [
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

const aicategories = [
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
      <img 
        src="/images/portfolio-title.gif" 
        alt="My Portfolio" 
        className="portfolio-title-gif" 
      />
      <h2>Photography</h2>
      <div className="portfolio-grid">
        {photocategories.map((category) => (
          <PortfolioCategory
            key={category.name}
            name={category.name}
            images={category.images}
          />
        ))}
      </div>
      <h3>AI</h3>
      <div className="portfolio-grid">
        {aicategories.map((category) => (
          <PortfolioCategory
            key={category.name}
            name={category.name}
            images={category.images}
          />
        ))}
      </div>
      <h4>3D Modelling</h4>
    </div>
  );
};

export default Portfolio;
