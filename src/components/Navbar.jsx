import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import Navlink from "./Navlink";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  z-index: 8;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  padding: 1.5rem 3rem;
  ${mobile({
    padding: "1rem 2rem",
  })}
`;
const Me = styled.h1`
  font-size: 1.5rem;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  font-weight: 600;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #161630;
  ${mobile({
    display: "none",
  })}
`;
const MainBar = styled.div`
  display: none;
  ${mobile({
    display: "block",
  })}
`;

const Bar = styled.div`
  display: none;
  font-size: 2rem;
  z-index: 10;
  ${mobile({
    display: "block",
  })}
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Main>
        <Left>
          <Me>Firdaus Iqbal</Me>
        </Left>
        <Right>
          <StyledLink to={"/"}>
            <List>Home</List>
          </StyledLink>
          <StyledLink to="#about">
            <List>About</List>
          </StyledLink>
          <StyledLink to="#project">
            <List>Project</List>
          </StyledLink>
          <StyledLink to="#contact">
            <List>Contact</List>
          </StyledLink>
          <MainBar>
            <Bar
              style={{ display: open ? "none" : "block" }}
              onClick={handleClick}
            >
              <i className="fa-solid fa-bars"></i>
            </Bar>
            <Bar
              style={{ display: open ? "block" : "none" }}
              onClick={handleClick}
            >
              <i className="fa-solid fa-xmark"></i>
            </Bar>
          </MainBar>
        </Right>
      </Main>
      <Navlink props={open} setter={setOpen} />
    </Container>
  );
};

export default Navbar;
