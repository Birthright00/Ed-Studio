import React, { useState } from 'react';
import './Portfolio.css';

const photocategories = [
  {
    name: 'Physique',
    images: [
      '/images/physique/physique1.jpg',
      '/images/physique/physique2.jpg',
      '/images/physique/physique3.jpg',
      '/images/physique/physique4.jpg', // Add more images for gallery
      '/images/physique/physique5.jpg',
      '/images/physique/physique6.jpg',
      '/images/physique/physique7.jpg',
    ],
  },
  {
    name: 'Modeling',
    images: [
      '/images/modeling/modeling1.jpg',
      '/images/modeling/modeling2.jpg',
      '/images/modeling/modeling3.jpg',
      '/images/modeling/modeling4.jpg', // Add more images for gallery
      '/images/modeling/modeling5.jpg',
      '/images/modeling/modeling6.jpg',
      '/images/modeling/modeling7.jpg',
    ],
  },
  {
    name: 'Boudoir',
    images: [
      '/images/boudoir/boudoir1.jpg',
      '/images/boudoir/boudoir2.jpg',
      '/images/boudoir/boudoir3.jpg',
      '/images/boudoir/boudoir4.jpg', // Add more images for gallery
      '/images/boudoir/boudoir5.jpg',
      '/images/boudoir/boudoir6.jpg',
      '/images/boudoir/boudoir7.jpg',
    ],
  },
  {
    name: 'Wildlife',
    images: [
      '/images/wildlife/wildlife1.jpg',
      '/images/wildlife/wildlife2.jpg',
      '/images/wildlife/wildlife3.jpg',
      '/images/wildlife/wildlife4.jpg',
      '/images/wildlife/wildlife5.jpg',
      '/images/wildlife/wildlife6.jpg',
      '/images/wildlife/wildlife7.jpg',
    ],
  },
  {
    name: 'Event',
    images: [
      '/images/event/event1.jpg',
      '/images/event/event2.jpg',
      '/images/event/event3.jpg',
      '/images/event/event4.jpg',
      '/images/event/event5.jpg',
      '/images/event/event6.jpg',
      '/images/event/event7.jpg',
    ],
  },
  {
    name: 'Portrait',
    images: [
      '/images/portrait/portrait1.jpg',
      '/images/portrait/portrait2.jpg',
      '/images/portrait/portrait3.jpg',
      '/images/portrait/portrait4.jpg',
      '/images/portrait/portrait5.jpg',
      '/images/portrait/portrait6.jpg',
      '/images/portrait/portrait7.jpg',
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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