import React from 'react'
import styled from 'styled-components';

function HomePage() {
    return (
        <Container>
            <Wrapper>
                THis is the Home Page
            </Wrapper>
            
        </Container>
    )
}

export default HomePage

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    font-size: 30px;
    font-weight: bold;
`
