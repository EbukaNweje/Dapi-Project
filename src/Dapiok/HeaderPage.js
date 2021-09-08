import React from 'react'
import Styled from "styled-components"

import Img from "../img/landing-logo.png"

function HeaderPage() {
    return (
        <ContainerHeader>
            <LogoContainer>
                <Logo src={Img} />
                <span>Dapi</span>
                </LogoContainer>
            
            <HeaderLink>
                <NavLinks>
                    <span>Changelog</span>
                </NavLinks>
                <NavLinks>
                    <span>Pricing</span>
                </NavLinks>
                <NavLinks>
                    <span>Contact</span>
                </NavLinks>
            </HeaderLink>
            <SignContainer>
                <Login>Login</Login>
                <SignUp>Sign Up</SignUp>
            </SignContainer>
        </ContainerHeader>
    )
}

export default HeaderPage

const ContainerHeader = Styled.div`
    width: 100%;
    // background-color: #000;
    display: flex;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(5px);
`
const LogoContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    span{
    font-weight: bold;
}
`

const Logo = Styled.img`
    padding-left: 90px;
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-right: 10px;
`
const HeaderLink = Styled.div`
    display: flex;
    flex: 1;  
    margin: 25px;  
`
const NavLinks = Styled.div`
    margin: 20px;
    span{
        color: #f7f8f8;
        font-size: 16px;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont;

        :hover{
            color: #727171;
            transform: scale(1);
            transition: all 0.2s ease-out 0s;
        }
    }
`
const SignContainer = Styled.div`
    display: flex;
    width: px;
    margin-right: 150px;
    justify-content: center;
    align-items: center;
`
const Login = Styled.div`
    color: #568ef2;
    font-weight: bold;
    cursor: pointer;
    margin: 30px;

    :hover{
        color: #002566;
        transform: scale(1);
        transition: all 350ms ease-out 0s;
    }
`
const SignUp = Styled.div`
    background-color: #568ef2;
    padding: 5px;
    width: 90px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    :hover{
        background-color: #002566;
        transform: scale(1);
        transition: all 350ms ease-out 0s;
    }
`