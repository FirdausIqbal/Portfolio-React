import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-image: url("/Images/bg.png");
  width: 100%;
  height: 100vh;
  color: #000000;
  display: flex;
  align-items: center;
`;
const InnerText = styled.div`
  background-color: #ffffffcf;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  ${mobile({
    padding: '0 1rem'
  })}
`;
const Main = styled.div`
  font-size: 3.3rem;
  text-align: center;
  font-weight: 700;
  align-items: center;
  ${mobile({
    fontSize: "2rem",
  })}
`;
const Minibio = styled.p`
  /* padding-top: 1rem; */
  font-size: 1.5rem;
  font-weight: 400;
  ${mobile({
    fontSize: "1rem",
  })}
`;

const Banner = () => {
  return (
    <Container>
      <InnerText>
        <Main>
          Hi, I'm Muhammad Firdaus Iqbal <br />
          <Minibio>Fullstack JavaScript developer.</Minibio>
        </Main>
      </InnerText>
    </Container>
  );
};

export default Banner;
