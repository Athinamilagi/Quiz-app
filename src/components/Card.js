import React, { useState } from "react";
import styled from "styled-components";
import SliderImage from "./SliderImage";
import FAQ from "./FAQ";

const equations = [
  "f(x) = 2x + 3",
  "g(x) = sqrt(x)",
  "h(x, y) = x^2 + y^2 - 1", // Equation of a circle
  "f(x) = 1/x",
  "g(x) = e^x", // Exponential function
  "h(x) = log(x)", // Logarithmic function
  "f(x, y) = x^2 + xy + y^2", // Quadratic form
  "g(x) = |x|", // Absolute value function
  "h(x) = sin(x)", // Sine function
  "f(x, y) = y/x",
];

const Card = () => {
  const [currentEquationIndex, setCurrentEquationIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNextSlide = () => {
    setCurrentEquationIndex((prevIndex) =>
      prevIndex === equations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentEquationIndex((prevIndex) =>
      prevIndex === 0 ? equations.length - 1 : prevIndex - 1
    );
  };

  

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Main expanded={expanded}>
        <Title>Relation and Function(Mathematics)</Title>
        <Slider>
          <SliderImage equation={equations[currentEquationIndex]} />
          <ButtonContainer>
            <Reset>
              <img src="/images/reset-arrow.png" alt="reset" />
            </Reset>
            <PrevSlide onClick={handlePrevSlide}>
              <img
                className="arrow"
                src="/images/left-arrow.png"
                alt="prevslide"
              />
            </PrevSlide>
            <Pages>
              {currentEquationIndex + 1}/{equations.length}
            </Pages>
            <NextSlide onClick={handleNextSlide}>
              <img
                className="arrow"
                src="/images/right-arrow.png"
                alt="nextslide"
              />
            </NextSlide>
            <Expand onClick={handleExpand}>
              <img
                className="arrow"
                src="/images/expand-arrow.png"
                alt="expand"
              />
            </Expand>
          </ButtonContainer>
        </Slider>
        <LeftButton>
          <span>Published by</span>
          <img src="/images/site-logo.png" alt="logo" />
        </LeftButton>
        <RightButton>
          <span>+</span>
          Create Flashcard
        </RightButton>
      </Main>
      <FAQ />
    </>
  );
};

export default Card;

const Main = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: ${(props) => (props.expanded ? "100%" : "auto")};
  transition: width 0.5s;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  position: absolute;
  left: 0;
  top: 8px;
  font-weight: 700;
  display: flex;
  background-image: linear-gradient(to bottom, #06286e, #164ec0);
  color: transparent;
  -webkit-background-clip: text; /* for Safari/Chrome/iOS */
  background-clip: text;
`;

const Slider = styled.div`
  margin-top: 70px;
  justify-content: center;
  width: 712px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

const Reset = styled.button`
  background-color: rgba(249, 249, 249, 0.1);
  border: none;
  img {
    width: 35px;
    height: 35px;
  }
`;

const PrevSlide = styled.button`
  background: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    filter: invert(100%);
    width: 22px;
  }
`;

const Pages = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #202b37;
`;
const NextSlide = styled.button`
  background: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    filter: brightness(0) invert(1);
    width: 46px;
  }
`;
const Expand = styled.button`
  background-color: rgba(249, 249, 249, 0.1);
  border: none;
  img {
    width: 35px;
    height: 35px;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(249, 249, 249, 0.1);
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #696671;
    position: absolute;
    left: 97px;
    top: 0;
    z-index: 2;
  }
  position: absolute;
  left: 0;
  bottom: -120px;
  z-index: 1;
`;
const RightButton = styled.div`
  position: absolute;
  right: 120px;
  bottom: -100px;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  background-image: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
  color: transparent;
  -webkit-background-clip: text; /* for Safari/Chrome/iOS */
  background-clip: text;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 56px;
    background: linear-gradient(180deg, #06286e 0%, #164ec0 100%);
    color: white;
    padding: 5px;
    border-radius: 25px;
    margin-right: 10px;
  }
`;
