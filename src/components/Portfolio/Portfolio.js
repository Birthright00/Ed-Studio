import React, { useState } from 'react';
import './Portfolio.css';

const photocategories = [
  {
    name: 'Physique',
    images: [
      '/images/physique1.jpg',
      '/images/physique2.jpg',
      '/images/physique3.jpg',
      '/images/physique1.jpg', // Add more images for gallery
      '/images/physique2.jpg',
      '/images/physique3.jpg',
      '/images/physique1.jpg',
      '/images/physique2.jpg',
    ],
  },
  {
    name: 'Modeling',
    images: [
      '/images/modeling1.jpg',
      '/images/modeling2.jpg',
      '/images/modeling3.jpg',
      '/images/modeling1.jpg', // Add more images for gallery
      '/images/modeling2.jpg',
      '/images/modeling3.jpg',
      '/images/modeling1.jpg',
      '/images/modeling2.jpg',
    ],
  },
  {
    name: 'Cosplay',
    images: [
      '/images/cosplay1.jpg',
      '/images/cosplay2.jpg',
      '/images/cosplay3.jpg',
      '/images/cosplay1.jpg', // Add more images for gallery
      '/images/cosplay2.jpg',
      '/images/cosplay3.jpg',
      '/images/cosplay1.jpg',
      '/images/cosplay2.jpg',
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    // Gallery View
    return (
      <>
        <section className="section" style={{paddingTop: '8rem'}}>
          <div className="container">
            <div className="text-center">
              <button 
                onClick={handleBackToCategories}
                className="btn-atmospheric"
                style={{marginBottom: '2rem'}}
              >
                ← Back to Categories
              </button>
              <h1 className="fade-in mb-3">
                {selectedCategory.name}
              </h1>
              <p className="fade-in fade-in-delay-1" style={{
                maxWidth: '600px', 
                margin: '0 auto',
                fontSize: '1.1rem'
              }}>
                A curated collection of {selectedCategory.name.toLowerCase()} photography showcasing artistry and elegance.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section">
          <div className="container">
            <div className="gallery-grid">
              {selectedCategory.images.map((image, index) => (
                <div key={index} className={`gallery-item fade-in fade-in-delay-${Math.min(Math.floor(index / 2) + 1, 3)}`}>
                  <div className="image-overlay">
                    <img src={image} alt={`${selectedCategory.name} ${index + 1}`} className="atmospheric-image" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Category Selection View
  return (
    <>
      {/* Portfolio Header */}
      <section className="section" style={{paddingTop: '8rem'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="fade-in mb-3">
              Portfolio
            </h1>
            <p className="fade-in fade-in-delay-1" style={{
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.1rem'
            }}>
              Select a category to explore the full collection of work.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="section">
        <div className="container">
          <div className="portfolio-categories-grid">
            {photocategories.map((category, index) => (
              <div 
                key={category.name} 
                className={`portfolio-category-card fade-in fade-in-delay-${index + 2}`}
                onClick={() => handleCategorySelect(category)}
              >
                <div className="category-overlay">
                  <img 
                    src={category.images[0]} 
                    alt={category.name} 
                    className="atmospheric-image category-bg-image" 
                  />
                  <div className="category-overlay-content">
                    <h2>{category.name}</h2>
                    <p>{category.images.length} Images</p>
                    <div className="category-arrow">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;