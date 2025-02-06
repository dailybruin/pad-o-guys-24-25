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
      </LandingSection>

      {/* Page Contents */}
      <ContentSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec id justo. Praesent porttitor...
        </p>
        {/* Add additional content here */}
      </ContentSection>
    </>
  );
};

export default Header;
