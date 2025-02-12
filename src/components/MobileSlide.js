import React, { useEffect, useRef } from "react";
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
import pinkhighlighter from  "../images/pinkhighighter.gif";
import pizzaquarter from "../images/pizzaquarter.svg";
import record from "../images/record.svg";
import pinkpostit from "../images/pinkpostit.svg";
import threequartpizza from "../images/threequartpizza.svg";
import mail from "../images/mail.svg";
import animation from "../images/animation.gif";
import PhotoStack from "./PhotoStack";

function MobileSlide({ slides, photoStackOne, photoStackTwo, photoStackThree, photoStackFour, photoStackFive, photoStackSix, photoStackImages }) {
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className="paper"
          ref={(el) => (papersRef.current[index] = el)}
        >
          
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
                  top: 120,
                  left: -100,
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
                  bottom: "42%",
                  right: "-22%",
                  width: "30%",
                  height: "auto",
                  zIndex: 10,
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
                  height: "auto",
                  zIndex: 10,
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
                  height: "auto",
                  zIndex: 10,
                }}
              />
            </>
          )}
          {index === 1 && <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "0%", right: "0%", width: "40%", height: "auto", zIndex: 10 }} />}
         
          {index === 1 && <img src={sticky_note} alt="StickyNote Background" style={{ position: "absolute", top: "30%", left: "-35%", width: "45%", height: "auto", zIndex: 10 }} />}
          {index === 1 && 
          <>
           <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackOne} />
              </div>
            </div>
          <img src={animation} alt="Animation Gif" style={{ position: "absolute", top: "40%", right: "-25%", width: "40%", height: "auto", zIndex: 10 }} />
          <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", bottom: "10%", left:"-50%", width: "60%", height: "auto", zIndex: 10, transform: "rotate(270deg)"}} />
          <img src={mail} alt="Mail Background" style={{ position: "absolute", bottom: "0%", right: "-30%", width: "60%", height: "auto", zIndex: 10 }} />
          </>
          }

          {index === 2 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "0%", left: "-10%", width: "25%", height: "auto", zIndex: 10 }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "11%", left: "-20%", width: "25%", height: "auto", zIndex: 10, transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-3%", right: "-25%", width: "60%", height: "auto", zIndex: 10 , transform: "rotate(10deg)"}} />
              <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackTwo} />
              </div>
            </div>
              <img src={yellowpen} alt="Yellow Pen Background" style={{ position: "absolute", top: "35%", right: "-25%", width: "50%", height: "auto", zIndex: 10 , transform: "rotate(10deg)"}} />
              <img src={coffee} alt="Coffee Background" style={{ position: "absolute", top: "60%", left:"-35%", width: "85%", height: "auto", zIndex: 10, transform: "rotate(90deg)"}} />
            </>
          )}

          {index === 3 && (
            <>
              <img src={pizzaslice} alt="Pizza Background" style={{ position: "absolute", top: "6%", left: "-40%", width: "35%", height: "auto", zIndex: 10 }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "30%", right: "-20%", width: "25%", height: "auto", zIndex: 10, transform: "rotate(20deg)" }} />
              <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackThree} />
              </div>
            </div>
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "60%", left: "-20%", width: "40%", height: "auto", zIndex: 10 }} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "10%", right: "-20%", width: "35%", height: "auto", zIndex: 10 }} />
            </>
          )}

          {index === 4 && (
            <>
              <img src={pizzaquarter} alt="Pizza Background" style={{ position: "absolute", top: "0%", right: "-30%", width: "50%", height: "auto", zIndex: 10 }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "37%", left: "-20%", width: "20%", height: "auto", zIndex: 10, transform: "rotate(40deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "45%", left: "-30%", width: "20%", height: "auto", zIndex: 10, transform: "rotate(10deg)" }} />
              <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackFour} />
              </div>
            </div>
              <img src={pinkhighlighter} alt="Pink Highlighter Background" style={{ position: "absolute", top: "10%", left: "-45%", width: "65%", height: "auto", zIndex: 10, transform: "rotate(0deg)" }} />
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-30%", width: "35%", height: "auto", zIndex: 10, transform: "rotate(0deg)" }} />
            </>
          )}

          {index === 5 && (
            <>
              <img src={pizzaslice} alt="Pizza Background" style={{ position: "absolute", top: "0%", left: "-20%", width: "35%", height: "auto", zIndex: 10, transform: "rotate(-20deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "45%", left: "-20%", width: "20%", height: "auto", zIndex: 10, transform: "rotate(10deg)" }} />
              <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackFive} />
              </div>
            </div>
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "60%", left: "-20%", width: "40%", height: "auto", zIndex: 10 }} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "22%", left: "-20%", width: "35%", height: "auto", zIndex: 10, transform: "rotate(-20deg)" }} />
              <img src={pencil} alt="Pencil Background" style={{ position: "absolute", top: 50, right: "-20%", width: "40%", height: "auto", zIndex: 10 }} />
            </>
          )}

          {index === 6 && (
            <>
              <img src={coffee} alt="Coffee Background" style={{ position: "absolute", top: "-20%", left: "-60%", width: "75%", height: "auto", zIndex: 10, transform: "rotate(-20deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "-5%", left: "30%", width: "15%", height: "auto", zIndex: 10, transform: "rotate(10deg)" }} />
              <div style={{ top: "10%", left: "-30%", width: "10%", height: "auto", zIndex: 1, float: "left", marginRight: "20px" }}>
              <div className="photo-stack-container">
                <PhotoStack images={photoStackSix} />
              </div>
            </div>
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "72%", left: "-25%", width: "35%", height: "auto", zIndex: 10, transform: "rotate(20deg)" }} />
              <img src={pencil} alt="Pencil Background" style={{ position: "absolute", top: "75%", right: "-15%", width: "40%", height: "auto", zIndex: 10, transform: "rotate(100deg)" }} />
              <img src={pinkpostit} alt="Pink Post It Background" style={{ position: "absolute", top: "25%", right: "-30%", width: "60%", height: "auto", zIndex: 10, transform: "rotate(10deg)" }} />
            </>
          )} 


          {index === 7 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "-2%", right: "-20%", width: "25%", height: "auto", zIndex: 10, transform: "rotate(30deg)" }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "10%", right: "-25%", width: "25%", height: "auto", zIndex: 10, transform: "rotate(20deg)" }} />
              
              <img src={stain} alt="Stain Background" style={{ position: "absolute", top: "5%", left: "-25%", width: "40%", height: "auto", zIndex: 10 }} />
              <img src={note} alt="Note Background" style={{ position: "absolute", top: "70%", right: "-30%", width: "35%", height: "auto", zIndex: 10 }} />
            </>
          )} 


          {index === 8 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "60%", left: "-10%", width: "25%", height: "auto", }} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "70%", left: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-5%", right: "-40%", width: "60%", height: "auto", transform: "rotate(30deg)"}} />
             
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-35%", width: "35%", height: "auto", transform: "rotate(10deg)"}} />
              <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", top: "-10%", left:"-12%", width: "40%", height: "auto", transform: "rotate(-90deg)"}} />
            </>
          )}


          {index === 9 && (
            <>
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "60%", left: "-10%", width: "25%", height: "auto"}} />
              <img src={ticket2} alt="Full Ticket Background" style={{ position: "absolute", top: "70%", left: "-20%", width: "25%", height: "auto", transform: "rotate(20deg)" }} />
              <img src={broken_pencil} alt="Broken Pencil Background" style={{ position: "absolute", top: "-5%", right: "-40%", width: "60%", height: "auto", transform: "rotate(30deg)"}} />
              
              <img src={record} alt="Record Background" style={{ position: "absolute", top: "45%", right: "-35%", width: "35%", height: "auto", transform: "rotate(10deg)"}} />
              <img src={threequartpizza} alt="Pizza Background" style={{ position: "absolute", top: "-10%", left:"-12%", width: "40%", height: "auto", transform: "rotate(-90deg)"}} />
            </>
          )}
          <div 
  className="text-content" 
  style={{
    overflow: "hidden", 
    marginTop: "5px" 
  }}
>
  {slide.split('<p>').map((line, index) => (
    <p 
      key={index}
      style={{
        marginBottom: "10px", 
        textAlign: "justify", 
        fontSize: "16px", 
        lineHeight: "1.5", 
      }}
    >
      {line}
    </p>
  ))}
</div>
        </div>
      ))}
    </div>
  );
}

export default MobileSlide;
