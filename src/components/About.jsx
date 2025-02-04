import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100%;
  background-color: #ebebeb;
  /* padding: 4rem; */
`;
const Head = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  padding-top: 5rem;
`;
const Decoration = styled.div`
  text-align: center;
  background-color: #29489c;
  margin: 1rem auto 3rem;
  width: 3%;
  height: 5px;
  border-radius: 10px;
  ${mobile({
    width: "10%",
  })}
`;

const Bodytext = styled.div`
  padding: 0 3rem 6rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  ${mobile({
    flexDirection: "column",
    padding: '0 1rem 3rem'
  })}
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Paragraphme = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;
`;
const Subhead = styled.div`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 700;
  ${mobile({
    fontSize: "1.2rem",
  })}
`;
const Itemcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Itemskills = styled.div`
  padding: 1rem 2rem;
  border-radius: 20px;
  background-color: #dadada;
  font-weight: 500;
  color: #636363;
  ${mobile({
    fontSize: "0.8rem",
    padding: "0.7rem 1rem",
  })}
`;

const StyleLink = styled(Link)`
  position: relative;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 10px;
  background-color: #29489c;
  color: white;
`;

const DataSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "NodeJS",
  "Express",
  "PostgreSQL",
  "GIT",
  "Github",
  "Linux Terminal",
  "React",
  "Java"
];
const About = () => {
  return (
    <Container id="about">
      <Head>ABOUT ME</Head>
      <Decoration />
      <Bodytext>
        <Left>
          <Subhead>Come get to know me closer!</Subhead>
          <Paragraphme>
            I am a full-stack JavaScript developer with a bachelor's degree in
            Informatics Engineering from Institut Sains dan Teknologi Nasional.
            My primary expertise lies in developing dynamic and scalable
            applications using technologies such as Node.js and Express for the
            backend, and React for building responsive user interfaces. My
            strong foundation in HTML and CSS allows me to create clean,
            efficient, and visually appealing web applications.
            <br />
            <br />
            Throughout my career, I have gained hands-on experience in designing
            and deploying full-stack solutions that meet both functional and
            user-experience requirements. I have a deep understanding of how to
            build, optimize, and maintain RESTful APIs, along with modern
            frontend architectures that ensure scalability and performance. This
            comprehensive skill set has enabled me to successfully deliver
            projects from conception to production.
            <br />
            <br />I am currently open to new opportunities where I can apply my
            expertise in JavaScript development to contribute to innovative
            projects. I am excited to collaborate with forward-thinking teams
            and continue growing in a dynamic environment.
          </Paragraphme>
          <StyleLink to={"/"}>More...</StyleLink>
        </Left>
        <Right>
          <Subhead>My Skills.</Subhead>
          <Itemcontainer>
            {DataSkills.map((item, index) => (
              <Itemskills key={index}>{item}</Itemskills>
            ))}
          </Itemcontainer>
        </Right>
      </Bodytext>
    </Container>
  );
};

export default About;
