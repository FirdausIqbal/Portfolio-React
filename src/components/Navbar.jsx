import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    color: #404044;
`
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;
`
const Me = styled.h1`
  font-size: 1.5rem;
`
const Left = styled.div`
  
`
const Right = styled.div`
  display: flex;
  gap: 2rem;
`

const About = styled.div`
  cursor: pointer;
`
const Contact = styled.div`
  cursor: pointer;
`
const Projects = styled.div`
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Me>Firdaus Iqbal</Me>
        </Left>
        <Right>
          <Link to='#about'>
            <About>About</About>
          </Link>
          <Contact>Contact</Contact>
          <Projects>Projects</Projects>
        </Right>
      </Main>
    </Container>
  )
}

export default Navbar
