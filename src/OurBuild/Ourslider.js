import React from 'react';
import Slider from "react-slick";
import Styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img from "../img/1 copy.jpg";
import img1 from "../img/img1.png";
// import img2 from "../img/4.jpg";
// import img3 from "../img/3.jpg";

function Ourslider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <Container>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <Wrapper>
              <Display src={img1}/>
          </Wrapper>
          <Wrapper>
              <Display src={img}/>
          </Wrapper>
          {/* <Wrapper>
              <Display src={img2}/>
          </Wrapper> */}
          {/* <Wrapper>
              <Display src={img3}/>
          </Wrapper> */}
        </Slider>
      </Container>
    )
}

export default Ourslider

const Container = Styled.div`
    margin-top: 50px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
`

const Wrapper = Styled.div`
`

const Display = Styled.img`
    display: flex;
    justify-content: center;
    height: 500px;
    background-color: whitesmoke;
    color: black;
    border-radius: 10px;
    width: 100%;
    object-fit: cover;

`




