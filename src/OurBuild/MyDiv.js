import React from 'react'
import Styled from 'styled-components';

import img from '../img/file-media.svg';
import img1 from '../img/terminal.svg';
import img2 from '../img/organization.svg';



function MyDiv() {
    return (
        <Container>
            <Div1>
                <Image src={img}/>
                <Title>Expanded image diff support</Title>
                <P>Easily compare changed images. See the 
                    before and after, swipe or fade between the 
                    two, or look at just the changed parts.</P>
            </Div1>
            <Div2>
            <Image src={img1}/>
                <Title>Extensive editor & shell integrations</Title>
                <P>Open your favorite editor or shell from the app, or jump back
                     to GitHub Desktop from your shell. GitHub Desktop is your 
                     springboard for work.</P>
            </Div2>
            <Div3>
            <Image src={img2}/>
                <Title>Community supported</Title>
                <P>GitHub Desktop is open source now! Check out our roadmap,
                     contribute, and help us make collaboration even easier.</P>
            </Div3>
        
        </Container>
    )
}

export default MyDiv

const Container = Styled.div`
width: 100%;
display: flex;
// justify-content: space-around;
justify-content: center;
// background-color: blue;
align-items: center;
margin: 70px 0;
`
const Div1 = Styled.div`
display: flex;
width: 250px;
flex-direction: column;
align-items: center;
    
`
const Div2 = Styled.div`
margin-left: 100px;
width: 280px;
display: flex;
flex-direction: column;
align-items: center;
`
const Div3 = Styled.div`
margin-left: 100px;
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
`
const Image = Styled.img`
background-color: rgb(123, 99, 171);
min-width: 50px;
width: 50px;
height: 50px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 7px;
border-radius: 5px;
padding: 20px; 
`
const Title = Styled.div`
font-size: 14px;
margin: 10px;
font-weight: bold;
`
const P = Styled.div`
font-size: 14px;
text-align: center;
`

