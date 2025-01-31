import React, { useState, useEffect, useRef, useCallback } from "react";

const ScrollingEffect = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const paperRef = useRef(null); // Reference to the paper box

  const validSlides = Array.isArray(slides) ? slides : [];

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || validSlides.length === 0) return;

      // Check if mouse is inside the `.paper` box
      if (paperRef.current && paperRef.current.contains(event.target)) {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 500);

        if (event.deltaY > 0) {
          setCurrentIndex((prev) => Math.min(prev + 1, validSlides.length - 1));
        } else {
          setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }

        event.preventDefault(); // Prevent page from scrolling
      }
    },
    [isScrolling, validSlides.length]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  if (validSlides.length === 0) {
    return <div className="main-container">No content available.</div>;
  }

  return (
    <div className="main-container">
      <div className="paper" ref={paperRef}>
        <div
          className="slides-container"
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
            transition: "transform 0.6s ease-in-out"
          }}
        >
          {validSlides.map((slideText, i) => (
            <div className="slide" key={i}>
              {slideText}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingEffect;






/*
const Scrolling = ({ article, index }) => {
    const [background, SetBackground] = useState();

    return (
        <>
            <p>{article.article_title}</p>
            <a href={article.article_url} style={{ textDecoration: 'none', color: 'inherit' }}></a>
        </>
    );
};

export default Scrolling;*/