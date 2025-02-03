import React, { useState } from "react";
import "./PhotoStack.css";

const PhotoStack = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="photo-stack" onClick={nextPhoto}>
      {photos.map((photo, index) => {
        const position = (index - currentIndex + photos.length) % photos.length;

        return (
          <div
            key={index}
            className={`photo-wrapper position-${position}`}
            style={{
              zIndex: photos.length - position,
            }}
          >
            <img src={photo.src} alt={photo.alt} className="photo" />
            <div className="photo-credit">Photo Credit: {photo.credit}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoStack;