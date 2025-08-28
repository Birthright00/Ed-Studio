import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import './PhotoGrid.css';

const PhotoGrid = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={photo.id} className="stagger-item">
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
