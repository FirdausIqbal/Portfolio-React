import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    background-color: #ebebeb;
    padding: 5rem 0;
`
const Head = styled.h1`
    text-align: center;
    
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
`
const Decoration = styled.div`
    text-align: center;
    background-color: #29489c;
    margin: 1rem auto 3rem;
    width: 3%;
    height: 5px;
    border-radius: 10px;
`

const Bodytext = styled.div`
    padding: 0 6rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`
const Left = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const Paragraphme = styled.p`
    line-height: 1.5;
`
const Subhead = styled.h2`
    margin-bottom: 2rem;
`
const Itemcontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
const Itemskills = styled.div`
    padding: 1rem 2rem;
    border-radius: 20px;
    background-color: #dadada;
    font-weight: 500;
    color: #636363;
`
const DataSkills = ["HTML", "CSS", "JavaScript", "NodeJS", "Express", "PostgreSQL", "GIT", "Github", "Linux Terminal", "React"];
const About = () => {
  return (
    <Container id='about'>
        <Head>ABOUT ME</Head>
        <Decoration></Decoration>
        <Bodytext>
            <Left>
                <Subhead>Come get to know me closer!</Subhead>
                <Paragraphme>
                    I'm  a novice backend developer specializing in Node.js. I recently embarked on my programming journey, and I am dedicated to building robust and scalable server-side applications.
                    <br/><br />
                    With a background in Informatics Engineering from Institut Sains dan Teknologi Nasional, I have developed a strong foundation in programming and problem-solving. My focus is on improving my skills in Node.js, databases, and API development.
                    <br /><br />
                    Outside of work, I enjoy learn new things and occasionally play games, which helps me stay creative and motivated. Check out my portfolio to see what I've been working on. Let's connect and collaborate! 
                </Paragraphme>
            </Left>
            <Right>
                <Subhead>My Skills.</Subhead>
                <Itemcontainer>
                    {DataSkills.map(item=>
                        <Itemskills>{item}</Itemskills>
                    )}
                </Itemcontainer>
            </Right>
        </Bodytext>
    </Container>
  )
}

export default About
