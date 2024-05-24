import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
    padding: 0 5rem;
    background-color: #1d1d1d;
`
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8rem 0;
    color: white;
    
`
const Main_left = styled.div`
    width: 30%;
`
const Main_right = styled.div`
    text-align: center;
`

const Head = styled.h1`
    margin-bottom: 1rem;
`
const Paragraph = styled.p`
    font-weight: 200;
    letter-spacing: 0.1rem;
`
const IconContainer = styled.div``
const Icon = styled.i`
    font-size: 2rem;
    margin: 0 1rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Footer = () => {
  return (
    <Container>
        <Main>
            <Main_left>
                <Head>
                    FIRDAUS IQBAL
                </Head>
                <Paragraph>
                    A beginner JavaScript developer with a particular focus on backend development using Nodejs.
                </Paragraph>
            </Main_left>
            <Main_right>
                <Head>
                    Social Media
                </Head>
                <IconContainer>
                    <StyledLink to={'https://instagram.com/firdausiqball'}>
                        <Icon className='fa-brands fa-instagram'></Icon>
                    </StyledLink>
                    <StyledLink to={'https://instagram.com/firdausiqball'}>
                        <Icon className='fa-brands fa-whatsapp'></Icon>
                    </StyledLink>
                    <StyledLink to={'https://github.com/FirdausIqbal'}>
                        <Icon className='fa-brands fa-github'></Icon>
                    </StyledLink>
                    <StyledLink to={'https://linkedin.com/in/mfirdausiqbalr'}>
                        <Icon className='fa-brands fa-linkedin'></Icon>
                    </StyledLink>
                    
                </IconContainer>
            </Main_right>
        </Main>
    </Container>
  )
}

export default Footer
