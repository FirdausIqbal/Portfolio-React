import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* display: ${({ open }) => (open ? "block" : "none")}; */
  z-index: 2;
  position: relative;
  top: 1;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #525050;
  transform: ${({ open }) => (open ? "translate(0)" : "translate(100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const Navlink = ({ props, setter }) => {
  return (
    <Container open={props}>
      <Main>
        <StyledLink to={"/"} onClick={() => setter(false)}>
          <span>Home</span>
        </StyledLink>
        <StyledLink to={"#about"} onClick={() => setter(false)}>
          <span>About</span>
        </StyledLink>
        <StyledLink to={"#project"} onClick={() => setter(false)}>
          <span>Project</span>
        </StyledLink>
        <StyledLink to={"#contact"} onClick={() => setter(false)}>
          <span>Contact</span>
        </StyledLink>
      </Main>
    </Container>
  );
};

export default Navlink;
