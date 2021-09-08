import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import HomeScreen from "../components/HomeScreen";
// import CancelIcon from "@material-ui/icons/Cancel";
import moment from "moment";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

import img1 from "../img/1 copy.jpg";
import img2 from "../img/Eflex Logo 2.png";
import img3 from "../img/3.3.png";

const Intagram = () => {
  const [quote, setQuote] = useState([
    {
      id: 1,
      name: "Peter",
      myQuote: "This is the day that the Lord has Made.",
      time: Date.now(),
      avatar: img1,
    },
    {
      id: 2,
      name: "Mr Joe",
      myQuote: "I will rejoice and be glad in it...!",
      time: Date.now(),
      avatar: img2,
    },
    {
      id: 3,
      name: "Mr Sam",
      myQuote: "Let's practice out our Code 10times per day, at least!!!",
      time: Date.now(),
      avatar: img3,
    },
  ]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setImage(saveImage);
  };

  const addItems = () => {
    const newID = quote.length + 1;

    const newData = {
      id: newID,
      name,
      myQuote: text,
      time: Date.now(),
      avatar: image,
    };

    setQuote([...quote, newData]);
  };

  const deleteItem = (id) => {
    const removeItem = quote.filter((el) => el.id !== id);
    setQuote(removeItem);
  };

  useEffect(() => {
    const saveItem = JSON.parse(localStorage.getItem("storage"));
    setQuote(saveItem);
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(quote));
  }, [quote]);

  return (
    <Container>
      <InputContainer>
        <DisplayHolder>
          {image ? <Display src={image} /> : null}
          <InputsValue>
            <MyInputs placeholder="Name" type="file" onChange={uploadImage} />
            <MyInputs
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <MyInputsArea
              placeholder="Qoute"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </InputsValue>{" "}
        </DisplayHolder>
        {image ? (
            <MyButton
              type="primary"
              danger
              onClick={() => {
                console.log(image, name, text);
                addItems();
                setName("");
                setText("");
                setImage("");

              }}
            >
              Add
            </MyButton>
          ) : null}
      </InputContainer>
      <Wrapper>
        {quote.map(({ id, time, name, avatar, myQuote }) => (
          <Card key={id}>
            <TopBox>
              <Cancel
                onClick={() => {
                  deleteItem(id);
                  console.log("I am Pressed");
                  console.log(id);
                }}
              >
                x
              </Cancel>
              <Image src={avatar} />
            </TopBox>
            <InnerBox>
              <Name>{name}</Name>
              <Quote>{myQuote}</Quote>
              <Time>{moment(time).fromNow()}</Time>
            </InnerBox>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Intagram;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;
const Display = styled.img`
  object-fit: cover;
  width: 250px;
  height: 200px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgb(255 54 50 / 69%) 0px 16px 30px -10px,
    rgb(0 0 0 / 13%) 0px 16px 10px -10px;
`;
const MyButton = styled(Button)`
  width: 250px;
  height: 50px;
  margin: 10px 0;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
const MyInputs = styled(Input)`
  margin: 10px 0;
  width: 250px;
  height: 30px;
`;
const MyInputsArea = styled(TextArea)`
  margin: 10px 0;
  height: 60px;
  resize: none;
  width: 250px;
  height: 40px;
`;

const InputsValue = styled.div`
  width: 300px;
`;

const DisplayHolder = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
`;

const InnerBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
`;
const Name = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Quote = styled.div`
  flex: 1;
  width: 70%;
  text-align: center;
  font-size: 14px;
`;
const Time = styled.div`
  font-size: 10px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  height: 300px;
  width: 250px;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px;

  :hover {
    border: 1px solid lightgray;
    transform: scale(1.01);
  }
`;
const TopBox = styled.div`
  height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  position: relative;
`;
const Cancel = styled.div`
  color: red;
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: bold;
  transform: scale(1);
  transition: all 360ms;
  opacity: 0.7;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  right: 0;
  margin-top: 50px;
  object-fit: cover;
  border: 4px solid white;
`;

const Container = styled.div`
  background-color: #22272e;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
  padding-top: 60px;
  font-family: Poppins;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

































































































// import React, { useState,} from 'react'
// import Styled from "styled-components"
// import moment from "moment";

// import img from "../img/1 copy.jpg";
// import img1 from "../img/Eflex Logo 2.png";
// import img2 from "../img/3.3.png";

// function Intagram() {
//     const [data, setData] = useState([
//         {
//         id: 1,
//         title: "Ebuka",
//         time: Date.now(),
//         Quote: "Coding is my World",
//         image: img,
//     },
//         {
//         id: 1,
//         title: "Grace",
//         Quote: "Coding is my World",
//         time: Date.now(),
//         image: img1,
//     },
//         {
//         id: 1,
//         title: "Faith",
//         time: Date.now(),
//         Quote: "Coding is my World",
//         image: img2,
//     },
//     ])
    
//     return (
//         <Container>
//                 <InputWrapper>
//                     <input placeholder="Avatar"/>
//                 </InputWrapper>
//                 <InputWrapper>
//                     <input placeholder="Name"/>
//                 </InputWrapper>
//                 <InputWrapper>
//                     <input placeholder="Quote"/>
//                 </InputWrapper>

//                 <MainBody>
//                     {data.map((props) =>(
//                         <Card key={props.id}>
//                         <Top>
//                             <Delete>x</Delete>
//                             <Image src={props.image}/>
//                         </Top>
//                         <Bottom>
//                             <Name>{props.title}</Name>
//                             <Quote>{props.Quote}</Quote>
//                             <Time>{moment(props.time).fromNow()}</Time>
//                         </Bottom>
//                     </Card>
//                     ))

//                     }
//                 </MainBody>
//         </Container>
//     )
// }

// export default Intagram

// const Container = Styled.div`
//     width: 100%;
//     // height: 100hv;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 70px;
//     background-color: #000;
     
// `
// // const BodyCard = Styled.div`
// //     display: flex;
// //     flex-wrap: wrap;
// //     justify-content: center;
// // `
// const InputWrapper = Styled.div`
//     width: 400px;
//     height: 50px;
//     margin: 20px 0;
//     display: flex;
//     justify-content: center
//     align-items: center;
    
//     input{
//         width: 400px;
//         heigh: 50px;
//         color: #000;
//     }
// `

// const Card = Styled.div`
//     width: 320px;
//     height: 350px;
//     border: 1px solid rgba(255, 255, 255, 0.281);
//     margin-bottom: 20px;
//     margin: 10px;
//     cursor: pointer;
//     :hover{
//         transform: scale(1);
//         transition: all 350ms;
//         border: 1px solid rgba(255, 255, 255, 0.596);
//     }
// `
// const Top = Styled.div`
//     height: 100px;
//     border-bottom: 1px solid rgba(255, 255, 255, 0.281);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
// `
// const Delete = Styled.div`
//     margin-top: -50px;
//     margin-left: 270px;
//     background-color: #660000;
//     border-radius: 50%;
//     padding: 5px;
//     height: 20px;
//     width: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     font-weight: bold;
//     transform: scale(1);
//     transition: all 350ms;

//    :hover{
//     transform: scale(1);
//     transition: all 350ms;
//     border: 1px solid #fff;
//    }
// `
// const Image = Styled.img`
//     width: 90px;
//     height: 90px;
//     border-radius: 50px;
//     right: 0;
//     position: relative;
//     background-color: #fff;
//     margin-bottom: -100px;
//     border: 2px solid #fff;
 
// `
// const Bottom = Styled.div`
//     margin-top: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `
// const Name = Styled.div`
//     font-size: 15px;
//     font-Weight: bold;
// `
// const Quote = Styled.div`
//     margin-top: 50px;
//     font-size: 12px;
// `
// const Time = Styled.div`
//     margin-top: 80px;
//     font-size: 10px;
// `
// const MainBody = Styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `
