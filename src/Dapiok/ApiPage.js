import React from 'react'
import Styled from "styled-components"

function ApiPage() {
    return (
        <ContainerTOp>
            <Wrapper>
                <HeaderTOp>
                Ready to work on your API?
                    <span>Dapi keeps everyone in the dev team aligned. Backend, Frontend
                    and PM, collaborative working in one platform.</span>
                </HeaderTOp>
                <Button>Try FREE Now</Button>
            </Wrapper>
        </ContainerTOp>
    )
}

export default ApiPage

const ContainerTOp = Styled.div`
    margin: 120px 0;
    width: 100%;
    // background-color: red;
`
const Wrapper = Styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const HeaderTOp = Styled.div`
    font-size: 60px;
    margin-top: 70px;
    text-align: center;
    width: 60%;
    font-weight: 700;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    span{
        color: #8792a2;
        font-size: 1.25rem;
        text-align: center;
        font-weight: 100;
        width: 67%;
        margin: 20px 0px 0px;
        font-family: -apple-system, BlinkMacSystemFont;
        margin-bottom: 40px;
    }
`

const Button = Styled.div`
    margin-top: 30px;
    background-color: #568ef2;
    padding: 14px 80px;
    border-radius: 0.5rem;
    display: block;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    

    :hover{
        transition: all 0.2s ease-out 0s;
        background-color: #18499e;
    }
`