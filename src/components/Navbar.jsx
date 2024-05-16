import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    align-items: center;
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
    <Left>
      <Me>Firdaus Iqbal</Me>
    </Left>
    <Right>
      <About>About</About>
      <Contact>Contact</Contact>
      <Projects>Projects</Projects>
    </Right>
    
   </Container>
  )
}

export default Navbar
