import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.image_url} alt={photo.title} className="photo-card-image" />
      <h3 className="photo-card-title">{photo.title}</h3>
      <p className="photo-card-description">{photo.description}</p>
    </div>
  );
};

export default PhotoCard;
