import React, { useRef } from "react";
import coffee from "../images/coffee.svg";
import pencil from "../images/pencil.svg";
import ticket from "../images/ticket.svg";
import pizza from "../images/pizza.svg";
import pen from "../images/pen.svg";
import note from "../images/note.svg";
import stain from "../images/stain.svg";
import stack from "../images/stack.svg";
import sticky_note from "../images/sticky_note.svg";
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
          <div className="folder-background">
            {/* Embedded SVG for background */}
            <svg width="1304" height="915" viewBox="0 0 1304 915" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M4.19098 163.742C2.3882 147.272 14.2785 132.459 30.7487 130.656L1147.2 8.45289C1163.67 6.65012 1178.48 18.5404 1180.28 35.0106L1206.46 274.141C1207.69 285.363 1217.78 293.465 1229 292.237C1240.22 291.008 1250.32 299.11 1251.55 310.333L1269.3 472.481C1270.52 483.704 1262.42 493.797 1251.2 495.026C1239.98 496.254 1231.87 506.347 1233.1 517.57L1259.17 755.706C1260.97 772.176 1249.08 786.989 1232.61 788.792L116.162 910.996C99.6922 912.798 84.879 900.908 83.0762 884.438L57.0169 646.36C55.785 635.105 63.91 624.983 75.1646 623.751C86.4193 622.519 94.5443 612.397 93.3124 601.142L75.5768 439.11C74.3449 427.855 64.2226 419.73 52.968 420.962C41.7133 422.194 31.591 414.069 30.3591 402.814L4.19098 163.742Z" 
                fill="#FFE6A7"
              />
              <rect 
                x="578.477" 
                y="70.7034" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 578.477 70.7034)" 
                fill="#FFDC85"
              />
              <rect 
                x="558.596" 
                y="72.8795" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 558.596 72.8795)" 
                fill="#FFDC85"
              />
              <rect 
                x="538.715" 
                y="75.0557" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 538.715 75.0557)" 
                fill="#FFDC85"
              />
            </svg>
          </div>
          {index === 0 && <img src={coffee} alt="Coffee Background" style={{ position: "absolute", top: "-15%", right: -250, width: "45em", height: "auto", zIndex: 10 }} />}
          {index === 0 && <img src={pencil} alt="Pencil Background" style={{ position: "absolute", top: 50, left: -200, width: "40%", height: "auto", zIndex: 10 }} />}
          {index === 0 && <img src={ticket} alt="Ticket Background" style={{ position: "absolute", top: 500, left: -350, width: "20%", height: "auto", zIndex: 10 }} />}
          {index === 0 && <img src={pizza} alt="Pizza Background" style={{ position: "absolute", bottom: "42%", right: "-30%", width: "50%", height: "auto", zIndex: 10 }} />}
          {index === 0 && <img src={note} alt="Note Background" style={{ position: "absolute", top: "20%", right: "-20%", width: "30%", height: "auto", zIndex: 10 }} />}
          {index === 0 && <img src={pen} alt="Pen Background" style={{ position: "absolute", top: "25%", right: "-20%", width: "18%", height: "auto", zIndex: 10 }} />}
          {index === 1 && <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "0%", right: "0%", width: "40%", height: "auto", zIndex: 10 }} />}
          {index === 1 && <img src={stack} alt="Stack Background" style={{ position: "absolute", top: "2%", left: "-30%", width: "45%", height: "auto", zIndex: 10 }} />}
          {index === 1 && <img src={sticky_note} alt="StickyNote Background" style={{ position: "absolute", top: "30%", left: "-35%", width: "45%", height: "auto", zIndex: 10 }} />}


          <div className="text-content">
            <p>{slide}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingEffect;
