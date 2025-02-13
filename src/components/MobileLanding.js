import React from "react";
import styled from "styled-components";
import still_video from "../images/still.png";
import ticket from "../images/ticket.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
position: absolute;
bottom: 0px; 
width: 150%;
background: #4F2F1C;
color: white;
padding: 1em;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.91px;
z-index: 1; 
`;

const MobileLanding = ({ credits }) => {
  return (
    <Container>
        <Image src={still_video}/>
      <Credits>{credits}</Credits>
    </Container>
  );
};

export default MobileLanding;
