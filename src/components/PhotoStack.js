import React, { useState } from "react";
import "./PhotoStack.css";

//import local images for testing
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const PhotoStack = () => {
  const photos = [
    //can change "photo1" etc. to link to photo assets
    { src: photo1, alt: "Photo 1", credit: "Armaan Bassi" },
    { src: photo2, alt: "Photo 2", credit: "Jane Smith" },
    { src: photo3, alt: "Photo 3", credit: "John Doe" },
    { src: photo4, alt: "Photo 4", credit: "Emily Brown" },
  ];

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