import React from 'react'
import Styled from "styled-components"
import Img from "../img/mainshot new.png"
import Img1 from "../img/design-section.png"
import Img2 from "../img/preview-section.png"
import Img3 from "../img/track-section.png"

function FirstImage() {
    return (
        <ContainerImage>
            <Image src={Img}/>
            <Wrapper>
            <Line></Line>
            <Text>
                Design
            </Text>
            <Text2>
            More than just editing an openAPI doc, you can define the model relationship,
            draw sequence diagram to understand better the logic behind each API.
            </Text2>
                <ImageC src={Img1} />
            </Wrapper>
            <Wrapper>
            <Line></Line>
            <TextP>
                Preview
            </TextP>
            <Text2>
            Deploy a password-protected API doc site and mock API server whenever you want.
            Let others in the team to do the integration and review before the API is ready.
            </Text2>
                <ImageP src={Img2} />
            </Wrapper>
            <Wrapper>
            <Line></Line>
            <TextT>
                Track
            </TextT>
            <Text2>
            Follow the updates and always keeping everybody aligned on the latest API.
            Review the API designing before the performance issue happens.
            </Text2>
                <ImageT src={Img3} />
            </Wrapper>
        </ContainerImage>
    )
}

export default FirstImage

const ContainerImage = Styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
const Image = Styled.img`
    margin-top: 10rem;
    height: 600px;
    width: 900px;
    box-shadow: rgba(86, 142, 242, 0.9) 0px 0px 40px;
`
const Wrapper = Styled.div`
    display: flex;
    margin-top: 8rem;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`
const Line = Styled.div`
    height: 6rem;
    width: 0.1rem;
    background: rgba(255, 255, 255, 0.35);
    border-radius: 0.5rem;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
`
const Text = Styled.div`
    font-size: 3.75rem;
    font-weight: 700;
    text-align: center;
    background-color: red;
    background-image: linear-gradient(45deg, rgb(91, 118, 212), rgb(247, 116, 185));
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-repeat: no-repeat;
    display: block;
`
const TextP = Styled.div`
    font-size: 3.75rem;
    font-weight: 700;
    text-align: center;
    background-color: red;
    background-image: linear-gradient(45deg, rgb(91, 212, 173), rgb(123, 116, 247));
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-repeat: no-repeat;
    display: block;
`
const TextT = Styled.div`
    font-size: 3.75rem;
    font-weight: 700;
    text-align: center;
    background-color: red;
    background-image: linear-gradient(45deg, rgb(255, 161, 23), rgb(255, 86, 86));
    background-size: 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-repeat: no-repeat;
    display: block;
`
const Text2 = Styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8792a2;
    font-size: 20px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
`
const ImageC = Styled.img`
    margin-top: 5rem;
    height: 600px;
    width: 850px;
    object-fit: contain;
`
const ImageP = Styled.img`
    height: 600px;
    width: 850px;
    object-fit: contain;
`
const ImageT = Styled.img`
    margin-top: 5rem;
    height: 600px;
    width: 850px;
    object-fit: contain;
`

