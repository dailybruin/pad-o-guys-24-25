import React, { useRef } from "react";
import "../App.css";

function ScrollingEffect({ slides }) {
  const papersRef = useRef([]); // for each slide / paper

  // for sidebar navigation
  const handleScroll = (index) => {
    if (papersRef.current[index]) {
      papersRef.current[index].scrollIntoView({ behavior: "smooth" });
      // counting the index of the paper to navigate
    }
  };

  return (
    <div className="scroll-container">
      <div className="sidebar">
        {slides.map((_, index) => (
          <div key={index} className="sidebar-circle"onClick={() => handleScroll(index)}>
             {/* svg from the Figma */}
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" stroke-opacity="0.7" stroke-width="4"/>
             </svg>
          </div>
        ))}
      </div>

      {/* Paper aka slide being generated */}
      {slides.map((slide, index) => (
        <div key={index} className="paper" ref={(el) => (papersRef.current[index] = el)}>
          <div className="text-content">
            <p>{slide}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingEffect;
