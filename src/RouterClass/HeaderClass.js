import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from "../img/Eflex Logo 2.png"
function HeaderClass() {
    return (
        <Container>
            <Logo src={Img}/>
            <Wrapper>
                <NavLinks to="/">
                    <span>Home</span>
                </NavLinks>
                <NavLinks to="About">
                    <span>About</span>
                </NavLinks>
                <NavLinks to="contact">
                    <span>Contact</span>
                </NavLinks>
                <NavLinks to="help">
                    <span>Help</span>
                </NavLinks>
            </Wrapper>
            <AvaterLink>
            <Avater>E</Avater>
                <a
                    onClick={() =>{
                        console.log("You are now logged Out..")
                    }}
                >LogOut</a>
            </AvaterLink>
            
        </Container>
    )
}

export default HeaderClass

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #1b0b75;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    padding-left: 20px;
    width: 100px;
    height: 40px;
    object-fit: contain;
    margin-right: 60px;
`
const Wrapper = styled.div`
    flex: 1;
    display: flex;
`
const NavLinks = styled(Link)
`
    margin: 0 10px;
    text-decoration: none;
    span{
        font-weight: bold;
        text-tranfrom: uppercase;
        font-size: 15px;
        position: relative;
        color: rgba(255, 255, 255, 0.8);

        :after{
            content: "";
            height: 2px;
            position: absolute;
            bottom: -4px;
            left: 0;
            background-color: white;
            width: 100%;
            opacity: 0;
            transition: all 350ms;
            transform: scalex(0);
        }
    }

    :hover{
        span{
            cursor: pointer;
            :after{
                opacity: 1;
                transform: scalex(1.04);
                transform-origin: left;
            }
        }
    }

`
const Avater = styled.div`
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
`
const AvaterLink = styled.div`

    a{
        display: none;
    }

    :hover{
        a{
            display: block; 
            cursor: pointer;
            font-weight: bold;
        }
    }
`
// const Sign = styled.div`
//     display: none;
// `
