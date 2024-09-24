import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { projectData } from "../data";

const Container = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #ffffff;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  align-items: center;
  margin-top: 4rem;
`;
const Main = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
  ${mobile({
    flexDirection: "column",
    gap: "1rem",
    padding: "0 2rem",
    alignItems: "start",
  })}
`;
const Decoration = styled.div`
  text-align: center;
  background-color: #29489c;
  margin: 1rem auto;
  width: 3%;
  height: 5px;
  border-radius: 10px;
  ${mobile({
    width: "10%",
  })}
`;

const Left = styled.div`
  text-align: right;
  font-weight: 600;
`;
const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mobile({
    width: "100%",
  })}
`;
const Head = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 2rem 0 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  background-color: #29489c;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  text-align: center;
`;

const Project = () => {
  return (
    <Container id="project">
      <Head>My Projects</Head>
      <Decoration />
      <MainContainer>
        {projectData.map((item) => (
          <Main key={item.id}>
            <Left>{item.year}</Left>
            <Right>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              {item.links.map((link, index) => {
                const display = []
                if(link.frontend){
                  display.push(<StyledLink key={`${index}-frontend`} to={link.frontend}>Frontend Link</StyledLink>)
                }
                if(link.backend){
                  display.push(<StyledLink key={`${index}-backend`} to={link.backend}>Code Link</StyledLink>)
                }
                if(link.preview){
                  display.push(<StyledLink key={`${index}-preview`} to={link.preview}>Preview Link</StyledLink>)
                }
                return display.length > 0 ? display : null
              })}
            </Right>
          </Main>
        ))}
      </MainContainer>
    </Container>
  );
};

export default Project;
