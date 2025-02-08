import React from "react";
import styled from "styled-components";


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
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;


const Credits = styled.div`
  background: #4F2F1C;
  color: white;
  width: 100%;
  padding: 1em;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28.91px;

`;

const Landing = ({landing, credits}) => {
    
    return (
        <>
            <Container>
                {/*<Image src={Video} alt="Landing image" />*/}
                <Image/>
                <Credits>ILO CREDITS </Credits> {/*landing.landing_credits*/}
            </Container>
            
            
        </>
    );
}
export default Landing;