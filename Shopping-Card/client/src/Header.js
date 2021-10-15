import React from "react";
import styled from "styled-components";
import header from "./images/header.jpeg";

const Header = () => {
  return (
    <MainContainer>
      <h1>Shopping Card <br/> Wel Come</h1>
      
    </MainContainer>
  );
};
export default Header;

const MainContainer = styled.header`
  background: url(.${header}) no-repeat center/cover;
  height:250px;
  h1 {
    transform: translate(-50%, -50%);
    font-weight: 900;
    position: absolute;
    top: 15%;
    left: 50%;
    text-align:center;
  }
`;
