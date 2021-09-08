import React, {useEffect, useRef, useState} from 'react'
import Styled from "styled-components"

function TopPage() {

    const myRef= useRef();
    const myRef1= useRef();
    const myRef2= useRef();

    const [addition, setAddition] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setAddition((e)=>e+1)
        },3000)
    },[])

    const colours = ["rgb(193,111,183)", "white","white"]
    const colours1 = ["white","rgb(100,185,194)","white",]
    const colours2 = ["white","white","rgb(212,110,41)",]

    useEffect(()=>{
        myRef.current.style.color = colours[addition%colours.length];
        myRef.current.style.transition = "all 350ms";
    },[addition])
    useEffect(()=>{
        myRef1.current.style.color = colours1[addition%colours1.length];
        myRef1.current.style.transition = "all 350ms";
    },[addition])
    useEffect(()=>{
        myRef2.current.style.color = colours2[addition%colours2.length];
        myRef2.current.style.transition = "all 350ms";
    },[addition])

    return (
        <ContainerTOp>
            <Wrapper>
                <HeaderTOp>
                    <span>
                    <span2 ref={myRef} style={{marginRight: "10px"}}>Design,</span2>
                        <span1 ref={myRef1} style={{marginRight: "10px"}}>Preview,</span1>   
                        <span4>and</span4>
                         <span2 span ref={myRef2} style={{marginLeft: "10px"}}>Track,</span2> 
                    </span>
                the API with the team
                    <h1>Dapi helps streamline API integration for
                         the dev team. OpenAPI, sequence diagram,
                        API document site and mock server. It aims 
                        for faster integration and better tracking.</h1>
                </HeaderTOp>
                <Button2></Button2>
                <Button>Try FREE Now</Button>
            </Wrapper>
        </ContainerTOp>
    )
}

export default TopPage

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
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    span{
        width: 100%;
        margin: 20px;

        span1{
            margin: 20px;
        }

        span2{
            margin: 20px;
        }
    }
    h1{
        color: #8792a2;
        font-size: 20px;
        font-weight: 100;
        margin: 20px 0px 0px;
        font-family: -apple-system, BlinkMacSystemFont;
        margin-bottom: 70px;
    }
`

const Button = Styled.div`
    margin-top: 30px;
    background-color: #000;
    padding: 14px 80px;
    border-radius: 0.5rem;
    display: block;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    // box-shadow: rgba(91, 118, 212, 0.59) 0px 0px 20px;

    :hover{
        box-shadow: rgba(86, 142, 242, 0.59) 0px 0px 40px;
    }
`
const Button2 = Styled.div`
    margin-top: 30px;
    background-color: red;
    width: 288px;
    height: 62px;
    margin-bottom: -90px;
    border-radius: 0.5rem;
    display: block;
    cursor: pointer;
    box-shadow: rgba(91, 118, 212, 0.59) 0px 0px 25px;
    cursor: pointer;
    background: linear-gradient(90deg, rgb(91, 118, 212), rgb(247, 116, 185));

    :hover{
        box-shadow: rgba(86, 142, 242, 0.60) 0px 0px 40px;
    }
`