import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #cecece;
    width: 100%;
    height: 100vh;
    color: #000000;
    display: flex;
    align-items: center;
`
const InnerText = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 3rem 9rem;
`
const Main = styled.div`
    font-size: 3.3rem;
    text-align: center;
    font-weight: 700;
    align-items: center;
`
const Minibio = styled.p`
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
`

const Banner = () => {
  return (
    <Container>
        <InnerText>
          <Main>
            Hi, I'm Muhammad Firdaus Iqbal <br/>
            <Minibio>
              A beginner JavaScript developer with a particular focus on backend development using Node.js. 
            </Minibio>
          </Main>
        </InnerText>
    </Container>
  )
}



export default Banner
