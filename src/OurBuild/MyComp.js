import React from 'react'
import styled from 'styled-components';

const MyComp = ({paragraph, title, chg, clr, img }) => {
    return (
        <Container chg={chg}>
            <Image src={img} />
            <Wrapper>
                <Title clr={clr}>{title}</Title>
                <p>{paragraph}</p>
            </Wrapper>
        </Container>
    )
}

export default MyComp
const Container = styled.div`
    width: 100%;
    display: flex;
    // justify-content: space-around;
    justify-content: center;
    // background-color: blue;
    align-items: center;
    margin: 30px 0;
    flex-direction: ${({chg})=> chg ? "row-reverse": "row"}
`
const Wrapper = styled.div`
    width: 420px;
    font-Size: 11px;
    // display: flex;
    flex-direction: column;
    // justify-content: space-around;
    // background-color: red;
    align-items: center;
    margin-left: 50px;
`
const Image = styled.img`
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 50px;
`
const Title = styled.h2`
    text-transform: uppercase;
`

