import React from 'react';
import { Link } from 'react-router-dom';
import ProtectedImage from './ProtectedImage';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="text-center">
            <h1 className="fade-in">Ed Studio</h1>
            <p
              className="fade-in fade-in-delay-1 mt-2"
              style={{
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Photography
            </p>

            {/* Auto-scrolling Portfolio Banner */}
            <section className="portfolio-banner-section">
              <div className="portfolio-banner-container">
                <div className="portfolio-banner-track">
                  <ProtectedImage src="/images/landscape/physique1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/modeling1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/cosplay1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/physique2-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/modeling2-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/cosplay2-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/physique3-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/modeling3-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/cosplay3-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  {/* Duplicate images for seamless loop */}
                  <ProtectedImage src="/images/landscape/physique1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/modeling1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                  <ProtectedImage src="/images/landscape/cosplay1-landscape.jpg" alt="Portfolio Work" className="banner-image" />
                </div>
              </div>
              <div className="portfolio-banner-overlay">
                <h2>Featured Work</h2>
                <p>Showcasing my latest photography</p>
              </div>
            </section>

            <p
              className="fade-in fade-in-delay-2 mt-3"
              style={{ maxWidth: '500px', margin: '2rem auto 0' }}
            >
              Specializing in physique, modeling, and boudoir photography.
            </p>
            <div className="fade-in fade-in-delay-3 mt-4">
              <Link to="/portfolio" className="btn-atmospheric">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Preview */}
      <section className="section">
        <div className="container">
          <div className="image-grid grid-three">
            {/* Physique */}
            <div className="image-overlay fade-in">
              <img
                src="/images/physique/physique1.jpg"
                alt="Physique Photography"
                className="atmospheric-image"
              />
              <div className="category-label">
                <h3>Physique</h3>
              </div>
            </div>

            {/* Modeling */}
            <div className="image-overlay fade-in fade-in-delay-1">
              <img
                src="/images/modeling/modeling1.jpg"
                alt="Modeling Photography"
                className="atmospheric-image"
              />
              <div className="category-label">
                <h3>Modeling</h3>
              </div>
            </div>

            {/* Boudoir */}
            <div className="image-overlay fade-in fade-in-delay-2">
              <img
                src="/images/boudoir/boudoir1.jpg"
                alt="Boudoir Photography"
                className="atmospheric-image"
              />
              <div className="category-label">
                <h3>Boudoir</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section Removed */}

    </>
  );
};

export default Home;
