import React, { useEffect, useRef } from "react";
import "../App.css";

function ScrollingEffect({ slides }) {
  const papersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        document.body.classList.add("show-fade");
      } else {
        document.body.classList.remove("show-fade");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSlide = (index) => {
    if (papersRef.current[index]) {
      papersRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-container">
      <div className="sidebar">
        {slides.map((_, index) => (
          <div
            key={index}
            className="sidebar-circle"
            onClick={() => handleScrollToSlide(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="4"
              />
            </svg>
          </div>
        ))}
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className="paper"
          ref={(el) => (papersRef.current[index] = el)}
        >
          <div className="text-content">
            <p>{slide}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingEffect;
