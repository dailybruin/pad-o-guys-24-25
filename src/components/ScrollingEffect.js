import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import coffee from "../images/coffee.svg";
import pencil from "../images/pencil.svg";
import ticket from "../images/ticket.svg";
import pizza from "../images/pizza.svg";
import pen from "../images/pen.svg";
import note from "../images/note.svg";
import stain from "../images/stain.svg";
import sticky_note from "../images/sticky_note.svg";
import broken_pencil from "../images/brokenpencil.svg";
import ticket2 from "../images/ticket2.svg";
import yellowpen from "../images/yellowhighlighter.gif";
import pizzaslice from "../images/pizzaslice.svg";
import pinkhighlighter from "../images/pinkhighighter.gif";
import pizzaquarter from "../images/pizzaquarter.svg";
import record from "../images/record.svg";
import pinkpostit from "../images/pinkpostit.svg";
import threequartpizza from "../images/threequartpizza.svg";
import mail from "../images/mail.svg";
import animation from "../images/animation.gif";
import PhotoStack from "./PhotoStack";

function ScrollingEffect({ slides, photoStackOne, photoStackTwo, photoStackThree, photoStackFour, photoStackFive, photoStackSix}) {
  const papersRef = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);  

  useEffect(() => {
    
    const options = {
      root: null,       
      rootMargin: "0px",
      threshold: 0.5,   
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
          const slideIndex = Number(entry.target.getAttribute("data-index"));
          setActiveSlide(slideIndex);
        }
      });
    }, options);


    papersRef.current.forEach((paper) => {
      if (paper) observer.observe(paper);
    });

  
    return () => {
      papersRef.current.forEach((paper) => {
        if (paper) observer.unobserve(paper);
      });
    };
  }, []);

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
              className={`sidebar-circle-svg ${
                activeSlide === index ? "active-circle" : ""
              }`}
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
          data-index={index}
          ref={(el) => (papersRef.current[index] = el)}
          style={{
            width: '100%', 
            height: '150vh', 
            position: 'relative', 
          }}
        >
          <div className="folder-background">
            {/* Embedded SVG for background */}
            <svg
              width="1304"
              height="915"
              viewBox="0 0 1304 915"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          {index === 0 && (
            <>
              <div className="header">
                <h1>The Pad O’ Guys</h1>
                <p>BY NATALIE RALSTON</p>
              </div>
              <img
                src={coffee}
                alt="Coffee Background"
                style={{
                  position: "absolute",
                  top: "-15%",
                  right: "-25%",
                  width: "20%",
                  height: "auto",
                  zIndex: 10,
                }}
              />
              <img
                src={pencil}
                alt="Pencil Background"
                style={{
                  position: "absolute",
                  top: 50,
                  left: -200,
                  width: "40%",
                  height: "auto",
                  zIndex: 10,
                }}
              />
              <img
                src={ticket}
                alt="Ticket Background"
                style={{
                  position: "absolute",
                  top: 500,
                  left: -350,
                  width: "20%",
                  height: "auto",
                  zIndex: 10,
                }}
              />
              <img
                src={pizza}
                alt="Pizza Background"
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "-30%",
                  width: "45%",
                  height: "auto",
                }}
              />
              <img
                src={note}
                alt="Note Background"
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "-20%",
                  width: "30%",
                  height: "auto"
                }}
              />
              <img
                src={pen}
                alt="Pen Background"
                style={{
                  position: "absolute",
                  top: "25%",
                  right: "-20%",
                  width: "18%",
                  height: "auto"
                }}
              />
            </>
          )}
          {index === 1 && <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "0%", right: "0%", width: "40%", height: "auto", zIndex: 10 }} />}
          {index === 1 && (
            <div
              style={{
                position: "absolute",
                top: "2%",
                left: "-30%",
                width: "45%",
                height: "auto",
                zIndex: 10,
              }}
            >
              <PhotoStack images={photoStackOne} />
            </div>
          )}
          {index === 1 && <img src={sticky_note} alt="StickyNote Background" style={{ position: "absolute", top: "30%", left: "-35%", width: "45%", height: "auto"}} />}
          {index === 1 && 
          <>
          <img src={animation} alt="Animation Gif" style={{ position: "absolute", top: "40%", right: "-30%", width: "50%", height: "auto" }} />
          <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", bottom: "10%", left:"-50%", width: "60%", height: "auto", transform: "rotate(270deg)"}} />
          <img src={mail} alt="Mail Background" style={{ position: "absolute", bottom: "0%", right: "-30%", width: "60%", height: "auto" }} />
          </>
          }

          {index === 2 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "0%", left: "-10%", width: "25%", height: "auto" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "11%", left: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-3%", right: "-25%", width: "60%", height: "auto", transform: "rotate(10deg)"}} />
              <div
              style={{
                position: "absolute", top: "30%", left: "-30%", width: "45%", height: "auto", zIndex: 10
              }}
            >
              <PhotoStack images={photoStackTwo} />
            </div>
              <img src={yellowpen} alt="Yellow Pen Background" style={{ position: "absolute", top: "35%", right: "-25%", width: "70%", height: "auto", transform: "rotate(10deg)"}} />
              <img src={coffee} alt="Coffee Background" style={{ position: "absolute", top: "50%", left:"-75%", width: "45em", height: "auto", zIndex: 10}} />
            </>
          )}

          {index === 3 && (
            <>
              <img src={pizzaslice} alt="Pizza Background" style={{ position: "absolute", top: "6%", left: "-40%", width: "35%", height: "auto" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "30%", right: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <div
              style={{
                position: "absolute", top: "55%", right: "-35%", width: "45%", height: "auto", transform: "rotate(20deg)"
              }}
            >
              <PhotoStack images={photoStackThree} />
            </div>
            
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "60%", left: "-20%", width: "40%", height: "auto"}} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "10%", right: "-20%", width: "35%", height: "auto"}} />
            </>
          )}

          {index === 4 && (
            <>
              <img src={pizzaquarter} alt="Pizza Background" style={{ position: "absolute", top: "0%", right: "-30%", width: "50%", height: "auto",  }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "37%", left: "-20%", width: "20%", height: "auto",  transform: "rotate(40deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "45%", left: "-30%", width: "20%", height: "auto", transform: "rotate(10deg)" }} />
              <div
              style={{
                position: "absolute", top: "55%", left: "-35%", width: "45%", height: "auto", transform: "rotate(0deg)"
              }}
            >
              <PhotoStack images={photoStackFour} />
            </div>
              <img src={pinkhighlighter} alt="Pink Highlighter Background" style={{ position: "absolute", top: "10%", left: "-45%", width: "65%", height: "auto", transform: "rotate(0deg)" }} />
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-30%", width: "35%", height: "auto", transform: "rotate(0deg)" }} />
            </>
          )}

          {index === 5 && (
            <>
              <img src={pizzaslice} alt="Pizza Background" style={{ position: "absolute", top: "0%", left: "-20%", width: "35%", height: "auto", transform: "rotate(-20deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "45%", left: "-20%", width: "20%", height: "auto", transform: "rotate(10deg)" }} />
              <div
              style={{
                position: "absolute", top: "40%", right: "-35%", width: "45%", height: "auto", transform: "rotate(20deg)"
              }}
            >
              <PhotoStack images={photoStackFive} />
            </div>
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "60%", left: "-20%", width: "40%", height: "auto"}} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "22%", left: "-20%", width: "35%", height: "auto", transform: "rotate(-20deg)" }} />
              <img src={pencil} alt="Pencil Background" style={{ position: "absolute", top: 50, right: "-20%", width: "40%", height: "auto"}} />
            </>
          )}

          {index === 6 && (
            <>
              <img src={coffee} alt="Coffee Background" style={{ position: "absolute", top: "-20%", left: "-60%", width: "75%", height: "auto", transform: "rotate(-20deg)" }} />
              <div
              style={{
                position: "absolute", top: "00%", right: "-35%", width: "45%", height: "auto", transform: "rotate(20deg)"
              }}
            >
              <PhotoStack images={photoStackSix} />
            </div>
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "72%", left: "-25%", width: "35%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={pencil} alt="Pencil Background" style={{ position: "absolute", top: "75%", right: "-35%", width: "40%", height: "auto", transform: "rotate(100deg)" }} />
              <img src={pinkpostit} alt="Pink Post It Background" style={{ position: "absolute", top: "25%", right: "-30%", width: "60%", height: "auto", transform: "rotate(10deg)" }} />
            </>
          )} 


          {index === 7 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "-2%", right: "-20%", width: "25%", height: "auto", transform: "rotate(30deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "10%", right: "-25%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "5%", left: "-25%", width: "40%", height: "auto"}} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "70%", right: "-30%", width: "35%", height: "auto"}} />
            </>
          )} 


          {index === 8 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "60%", left: "-10%", width: "25%", height: "auto", }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "70%", left: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-5%", right: "-40%", width: "60%", height: "auto", transform: "rotate(30deg)"}} />
              <div
              style={{
                position: "absolute", top: "75%", right: "-30%", width: "45%", height: "auto"
              }}
            >
              <PhotoStack images={photoStackSix} />
            </div>
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-35%", width: "35%", height: "auto", transform: "rotate(10deg)"}} />
              <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", top: "-5%", left:"-35%", width: "60%", height: "auto",transform: "rotate(-10deg)"}} />
            </>
          )}


          {index === 9 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "60%", left: "-10%", width: "25%", height: "auto"}} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "70%", left: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-5%", right: "-40%", width: "60%", height: "auto", transform: "rotate(30deg)"}} />
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-35%", width: "35%", height: "auto", transform: "rotate(10deg)"}} />
              <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", top: "-5%", left:"-35%", width: "60%", height: "auto", transform: "rotate(-10deg)"}} />
            </>
          )}
          <div className="text-content">
          {slide.split('<p>').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingEffect;
