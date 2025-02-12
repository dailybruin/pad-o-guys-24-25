import React from "react";
import fb from "../images/socials/fb.svg";
import insta from "../images/socials/insta.svg";
import twitter from "../images/socials/twitter.svg";
import tiktok from "../images/socials/tiktok.svg";
import email from "../images/socials/email.svg";

import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  height: auto;
  color: white;
  padding: 60px 0 10px 0;
  text-align: center;

  h1 {
    margin: 0;
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
  }
`;

const Socials = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    margin: 0 20px;
  }

  p {
    margin: 80px 20px;
  }
`;

const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

const Text = styled.div`
  font-family: 'Courier Prime', monospace;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 1.15;
  letter-spacing: 0.05em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    line-height: 1.2;
    letter-spacing: 0.04em;
  }
`

const Footer = () => {
  return (
    <>
      <FadeOverlay className="fade-overlay">
        <Text>“I talk to students who are looking up on the stage to see someone giving them advice. The inconvenient truth is that the guy on the stage would give anything to be sitting where they are ... at the start of something, and all those things lying ahead of you. Your first sale, your first preview, your first premiere – all those things. To be part of a group of friends.
Now we’re friends, but it’s different. We’re still together, but it’s not about getting into a business anymore.” - Shane Black.</Text>
      </FadeOverlay>

      <Container>
        <h1>DAILY BRUIN</h1>
        <Socials>
          <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer">
            <img src={email} alt="Email" />
          </a>
          <p>
          Built with Suzy’s <span className="heart">♥</span> in Kerckhoff 118 by Kirsten Reign Cabalonga, Sahil Sheth, Evelyn Cho, Armaan Bassi, Jennifer Lee, Henry Nguyen, Max Fukuhara, Ritvik Irigireddy, and Sakshi Thoutireddy. Designed by Armaan Dhillon. Illustrated by Helen Juwon Park.
          </p>
        </Socials>
      </Container>
    </>
  );
};

export default Footer;
