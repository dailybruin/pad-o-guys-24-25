import React, { useState } from "react";
import "./PhotoStack.css";

const PhotoStack = ({images}) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="photo-stack" onClick={nextPhoto}>
      {images.map((photo, index) => {
        const position = (index - currentIndex + images.length) % images.length;

        return (
          <div
            key={index}
            className={`photo-wrapper position-${position}`}
            style={{
              zIndex: images.length - position,
            }}
          >
            <img src={photo.image_url} alt={photo.alt} className="photo" />
            <div className="photo-credit">Photo Credit: {photo.photo_credit}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoStack;