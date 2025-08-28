import React, { useEffect, useRef } from 'react';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      
      // Random starting position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      // Random colors
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#ff9ff3'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      if (particlesRef.current) {
        particlesRef.current.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 5000);
      }
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="floating-particles-container" ref={particlesRef}>
      {/* Sparkle elements */}
      <div className="sparkle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
      <div className="sparkle" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
      <div className="sparkle" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
      <div className="sparkle" style={{top: '30%', left: '70%', animationDelay: '0.5s'}}></div>
      <div className="sparkle" style={{top: '50%', left: '40%', animationDelay: '1.5s'}}></div>
      
      {/* Floating icons */}
      <div className="floating-icon" style={{top: '25%', left: '15%'}}>✨</div>
      <div className="floating-icon" style={{top: '65%', left: '85%'}}>🌟</div>
      <div className="floating-icon" style={{top: '45%', left: '5%'}}>💫</div>
      <div className="floating-icon" style={{top: '75%', left: '90%'}}>⭐</div>
    </div>
  );
};

export default FloatingParticles;