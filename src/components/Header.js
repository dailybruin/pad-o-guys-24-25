import styled from "styled-components";
import DBLogo from "../images/DailyBruinLogo.svg";

const LandingSection = styled("div")`
  height: 100vh; /* Full viewport height */
  background: #fffaf0; /* Match the Figma background color */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "ITC Century";
  font-size: 36px;
  font-weight: bold;
  color: black;
  position: relative; /* Needed for positioning the credits */
`;

const Credits = styled("div")`
  position: absolute; /* Anchor it within the LandingSection */
  bottom: -100px; /* Default position below the LandingSection */
  right: 5%; /* Use percentage for consistent alignment */
  font-family: "ITC Century";
  font-size: 12px;
  color: white;
  z-index: 1000;

  @media (max-width: 1024px) {
    bottom: -80px; /* Adjust for smaller screens like tablets */
    font-size: 11px; /* Slightly smaller font */
  }

  @media (max-width: 768px) {
    bottom: -60px; /* Adjust for even smaller screens */
    font-size: 10px; /* Smaller font for mobile */
  }

  @media (max-width: 480px) {
    bottom: -40px; /* For very small screens (mobile portrait) */
    font-size: 9px;
  }
`;

const DBHeader = styled("div")`
  z-index: 2001;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: black;
  width: 100%;
  padding: 0.2em 0;
  color: white;
  font-family: "ITC Century";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
`;

const ContentSection = styled("div")`
  padding: 2em;
  background: #fffaf0; /* Match the rest of the page */
  font-family: "ITC Century";
  color: black;
  line-height: 1.6;
`;

const Header = () => {
  return (
    <>
      {/* Sticky Header */}
      <DBHeader>
        <a href="https://dailybruin.com">
          <img src={DBLogo} alt="Daily Bruin" />
        </a>
      </DBHeader>

      {/* Landing Section */}
      <LandingSection>
        <h1>illo landing</h1>
        {/* Credits Section */}
        <Credits>ILLO CREDIT/Daily Bruin</Credits>
      </LandingSection>

      {/* Page Contents */}
      <ContentSection>
        {/* Existing page content starts here */}
      </ContentSection>
    </>
  );
};

export default Header;
