import fb from "../images/socials/fb.svg";
import insta from "../images/socials/insta.svg";
import twitter from "../images/socials/twitter.svg";
import tiktok from "../images/socials/tiktok.svg";
import email from "../images/socials/email.svg";

import styled from "styled-components";
import { mediaQueries } from "../shared/config";

// Container for the footer
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

// Social media icons
const Socials = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    margin: 0 20px;
  }

  p {
    margin: 80px 20px;
    ${mediaQueries.mobile} {
      margin: 50px 20px;
    }
  }
`;

// Overlay for the fade effect
const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Black background with transparency */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  opacity: 0;
  visibility: hidden;
  z-index: 1000; /* Ensure it appears above other content */
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

// Footer component
const Footer = () => {
  return (
    <>
      {/* Fade overlay */}
      <FadeOverlay className="fade-overlay">
        <h1>Convallis pulvinar, justo nulla eleifend augue.</h1>
      </FadeOverlay>

      {/* Footer content */}
      <Container>
        <h1>DAILY BRUIN</h1>
        <Socials>
          <a
            href="https://www.instagram.com/dailybruin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/dailybruin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href="https://www.twitter.com/dailybruin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.tiktok.com/@dailybruin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} alt="TikTok" />
          </a>
          <a
            href="http://eepurl.com/cFEiZX"
            target="_blank"
            rel="noreferrer"
          >
            <img src={email} alt="Email" />
          </a>
          <p>
            Built with Suzy’s ♥ in Kerckhoff 118 by [developers]. Designed by
            [designers].
          </p>
        </Socials>
      </Container>
    </>
  );
};

export default Footer;
