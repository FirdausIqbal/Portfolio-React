import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.section`
  background-color: #1d1d1d;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8rem 2rem;
  color: white;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  })}
`;
const MainLeft = styled.div`
  /* width: 30%; */
  flex: 1;
  ${mobile({
    textAlign: "center",
  })}
`;
const MainRight = styled.div`
  flex: 1;
  text-align: center;
`;

const Head = styled.h1`
  margin-bottom: 1rem;
`;
const Paragraph = styled.p`
  font-weight: 200;
  letter-spacing: 0.1rem;
`;
const IconContainer = styled.div``;
const Icon = styled.i`
  font-size: 2rem;
  margin: 0 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Footer = () => {
  return (
    <Container id="contact">
      <Main>
        <MainLeft>
          <Head>FIRDAUS IQBAL</Head>
          <Paragraph>Fullstact JavaScript developer</Paragraph>
        </MainLeft>
        <MainRight>
          <Head>Find Me.</Head>
          <IconContainer>
            <StyledLink to={"https://instagram.com/firdausiqball"}>
              <Icon className="fa-brands fa-instagram"></Icon>
            </StyledLink>
            <StyledLink to={"https://wa.me/081289485764"}>
              <Icon className="fa-brands fa-whatsapp"></Icon>
            </StyledLink>
            <StyledLink to={"https://github.com/FirdausIqbal"}>
              <Icon className="fa-brands fa-github"></Icon>
            </StyledLink>
            <StyledLink to={"https://linkedin.com/in/mfirdausiqbalr"}>
              <Icon className="fa-brands fa-linkedin"></Icon>
            </StyledLink>
          </IconContainer>
        </MainRight>
      </Main>
    </Container>
  );
};

export default Footer;
