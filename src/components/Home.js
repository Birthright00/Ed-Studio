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
            <pI
              className="fade-in fade-in-delay-1 mt-2"
              style={{
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Photography
            </pI>

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
              Creating atmospheric portraits that capture the essence of beauty
              and character.
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
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  zIndex: 10,
                }}
              >
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Physique
                </h3>
              </div>
            </div>

            {/* Modeling */}
            <div className="image-overlay fade-in fade-in-delay-1">
              <img
                src="/images/modeling/modeling1.jpg"
                alt="Modeling Photography"
                className="atmospheric-image"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  zIndex: 10,
                }}
              >
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Modeling
                </h3>
              </div>
            </div>

            {/* Cosplay */}
            <div className="image-overlay fade-in fade-in-delay-2">
              <img
                src="/images/boudoir/boudoir1.jpg"
                alt="Boudoir Photography"
                className="atmospheric-image"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  zIndex: 10,
                }}
              >
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                  Boudoir
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="fade-in mb-4">Philosophy</h2>
            <p
              className="fade-in fade-in-delay-1"
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: '1.1rem',
                lineHeight: '1.8',
              }}
            >
              Every photograph tells a story. Through careful composition,
              lighting, and an eye for authentic moments, we create images that
              transcend the ordinary. The work focuses on capturing the natural
              beauty, strength, and character that makes each subject unique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
