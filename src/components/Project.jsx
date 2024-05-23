import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    
`
const Main = styled.div`
    display: flex;
    margin: 3rem 0;
    gap: 3rem;
    justify-content: center;
`
const Left = styled.div`
    text-align: right;
`
const Right = styled.div`
    width: 20%;
`
const Head = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem 0;
`

const Project = () => {
  return (
    <Container>
        <Head>My Projects.</Head>
        <Main>
            <Left>2023</Left>
            <Right>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum minus in exercitationem! Laudantium, labore commodi ipsa sint officia ad tempore veniam? Quaerat, perspiciatis eaque neque ab omnis veniam impedit!</Right>
        </Main>
        <Main>
            <Left>2023</Left>
            <Right>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum minus in exercitationem! Laudantium, labore commodi ipsa sint officia ad tempore veniam? Quaerat, perspiciatis eaque neque ab omnis veniam impedit!</Right>
        </Main>
    </Container>
  )
}

export default Project
