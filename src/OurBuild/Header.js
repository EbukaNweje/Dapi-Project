import React from 'react'
import styled from 'styled-components';
import Styled from 'styled-components';

// import Img from "../img/1 copy.jpg"
import Img1 from "../img/desktop-icon.svg"

function Header() {
    return (
        <Container>
            <Image src={Img1}/>
            <Content>
                <Place>Overview</Place>
                <Place>Release Note</Place>
                <Place>Help</Place>
            </Content>


            <ContentGit>
                <Git>GitHub Desktop</Git>
                <GitText>Focus on what matters instead of fighting with Git. 
                    Whether you're new to Git or a seasoned user, GitHub Desktop 
                    simplifies your development workflow.</GitText>
                <GitButton>Download for Windows (64bit)</GitButton>

                <GitSmall1>Download for <Sp>macOS</Sp> or <Sp>Windows (msi)</Sp></GitSmall1>
                <GitSmall2>By downloading, you agree to the <Sp>Open Source Applications Terms.</Sp></GitSmall2>

            </ContentGit>
        </Container>
    )
}

export default Header

const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding-top: 50px

`
const Image = Styled.img`
    width: 100px;
    height: 100px;
    border-radius: 60px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    border: 3px solid black;
    object-fit: cover;
`
const Content = Styled.div`
    display: flex;
    margin-top: 10px;
`
const Place = Styled.div`
    margin: 10px;
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    latter-spacing: 1.2px;
    transform: scale(1);
    position: relative;

    
    :after{
        content: "";
        position: absolute;
        height: 2px;
        background-color: white;
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

const ContentGit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin-top: 30px;
`
const Git = styled.div`
    font-size: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    aling-items: center;
    color: rgb(148, 148, 148);
    // margin: 10px;
`
const GitText = styled.div`
    width: 62%;
    text-align: center;
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 200;
    color: rgb(177, 177, 177);
`
const GitButton = styled.div`
    width: 300px;
    padding: 15px;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    background-color: #812790;

    :hover{
        background-color: #812799;
        cursor: pointer;
    }
`
const GitSmall1 = styled.div`
    width: 500px;
    display: flex;
    font-size: 12px;
    justify-content: center;
    margin: 5px;
    // background-color: blue;
    align-items: center;

`
const Sp = styled.div`
    color: #812790;
    margin: 7px;
   
    :hover{
        cursor: pointer;
        text-decoration: underline; 
    }
`
const GitSmall2 = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-top: -15px;

`
