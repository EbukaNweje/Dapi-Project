import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <LineDiv>
                <Line></Line>
            </LineDiv>

            <Footer1>
            <Content>
                <Place>Terms</Place>
                <Place>Privacy Policy</Place>
                <Place>EULA</Place>
                <Place>Release Notes</Place>
            </Content>

                <Copy>© 2021 GitHub, Inc. All rights reserved.</Copy>
            </Footer1>
            
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
`
const LineDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;    
`
const Line = styled.div`
    border-bottom: 1px solid white;
    width: 5%;
    padding: 80px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Footer1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;  
    flex-direction: column;  
`

const Content = styled.div`
    display: flex;
    margin-top: 10px;
`

const Place = styled.div`
    margin: 10px;
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    latter-spacing: 1.2px;
    transform: scale(1);
    position: relative;
    color: #812790;
    

    
    :after{
        content: "";
        position: absolute;
        height: 2px;
        background-color: #812790;
        width: 100%;
        bottom: -2px;
        left: 0;
        opacity: 0;
        transform: scale(0);
        transform-origin: left;
        transform: all 350ms;

    }

    :hover{
        cursor: pointer;
        color: #812790;
        transform: scale(1.03);

        :after{
            opacity: 1;
            transform: scale(1.05)
        }
    }
`

const Copy = styled.div`
    margin-bottom: 40px;
    font-size: 15px;
    color: rgb(141, 140, 140);
`
