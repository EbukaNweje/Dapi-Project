import React from 'react';
import Styled from 'styled-components';
import Ourslider from './Ourslider';
import Header from './Header';
import MyComp from './MyComp';
import MyDiv from './MyDiv';
import Footer from './Footer';

import img1 from "../img/use1.png";
import img2 from "../img/use2.png";
import img3 from "../img/use3.png";

function HomeScreen() {
    return (
        <>
            <Header/>
            
            <Container>
                <Ourslider/>
            </Container>

            <MyComp 
            title="Attribute commits with collaborators easily"
            paragraph="
            Attribute commits with collaborators easily
            Quickly add co-authors to your commit. Great for pairing and excellent 
            for sending a little love/credit to that special someone who helped fix
             that gnarly bug of yours. See the attribution on the history page, 
             ndo an accidental attribution, and see the co-authors on github.com"
             img={img1}
            />
            <MyComp 
            chg
            title="Checkout branches with pull requests and view CI statuses"
            paragraph="
            See all open pull requests for your repositories and check them out as if 
            they were a local branch, even if they're from upstream branches or forks. 
            See which pull requests pass commit status checks, too!"
             img={img2}
            />
            <MyComp 
            title="Attribute commits with collaborators easily"
            paragraph="
            Attribute commits with collaborators easily
            Quickly add co-authors to your commit. Great for pairing and excellent 
            for sending a little love/credit to that special someone who helped fix
             that gnarly bug of yours. See the attribution on the history page, 
             ndo an accidental attribution, and see the co-authors on github.com"
             img={img3}
            />

            <MyDiv/>
            <DivBtn>
                <Button>See what's been built</Button>
            </DivBtn>
            
            <Footer/>
        </>
    )
}

export default HomeScreen

const Container = Styled.div`
    width: 80%;
    margin: auto;

`

const DivBtn = Styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

`
const Button = Styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: center;
    font-size: 20px;
    border: 1px solid white;
    padding: 15px;
    margin: 15px;
    border-radius: 5px;

    :hover{
    background-color: white;
    color: black;
    transition: all 0.2ms;
    font-weight: bold;
    cursor: pointer;
    }

`


