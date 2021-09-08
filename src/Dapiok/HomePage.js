import React from 'react'
import Styled from "styled-components"
import HeaderPage from './HeaderPage'
import TopPage from './TopPage'
import FirstImage from './FirstImage'
import ApiPage from "./ApiPage"
import FooterPage from "./FooterPage"

function HomePage() {
    return (
        <Container>
            < HeaderPage />
            <TopPage />
            <FirstImage />
            <ApiPage />
            <FooterPage />
        </Container>
    )
}

export default HomePage

const Container = Styled.div`
    width: 100%;
    // height: 100vh;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    background-color: #000;
`
