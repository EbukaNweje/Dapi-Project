import React from 'react'
import Styled from "styled-components"

import Img from "../img/landing-logo.png"

function FooterPage() {
    return (
        <ContainerFooter>
                <Logo src={Img} />
            <HeaderLink>
                <NavLinks>
                    <span>Github</span>
                </NavLinks>
                <NavLinks>
                    <span>Twitter</span>
                </NavLinks>
                <NavLinks>
                    <span>Changelog</span>
                </NavLinks>
                <NavLinks>
                    <span>Pricing</span>
                </NavLinks>
                <NavLinks>
                    <span>Contact</span>
                </NavLinks>
                <NavLinks>
                    <span>Private Private Privacy</span>
                </NavLinks>
            </HeaderLink>
        </ContainerFooter>
    )
}

export default FooterPage

const ContainerFooter = Styled.div`
    margin-top: 150px;
    width: 100%;
    // background-color: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const Logo = Styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-right: 10px;
    margin-bottom: -30px;
`
const HeaderLink = Styled.div`
    display: flex;
    margin: 25px;  
`
const NavLinks = Styled.div`
    margin: 20px;
    span{
        color: #8792a2;
        font-size: 16px;
        font-weight: 100;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont;

        :hover{
            color: #2c2c2c;
            transform: scale(1);
            transition: all 0.2s ease-out 0s;
        }
    }
`