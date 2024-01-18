import React, { useRef, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import styled from "styled-components";

const SliderImage = (props) => {
  const [activeOption, setActiveOption] = useState("Study");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const { speak } = useSpeechSynthesis();
  const equationRef = useRef(null);

  const handleSpeak = () => {
    const equationText = equationRef.current.innerText;
    speak({ text: equationText });
  };
  return (
    <>
      <Option>
        <li
          className={activeOption === "Study" ? "active" : ""}
          onClick={() => handleOptionClick("Study")}
        >
          Study
        </li>
        <li
          className={activeOption === "Quiz" ? "active" : ""}
          onClick={() => handleOptionClick("Quiz")}
        >
          Quiz
        </li>
        <li
          className={activeOption === "Test" ? "active" : ""}
          onClick={() => handleOptionClick("Test")}
        >
          Test
        </li>
        <li
          className={activeOption === "Game" ? "active" : ""}
          onClick={() => handleOptionClick("Game")}
        >
          Game
        </li>
        <li
          className={activeOption === "others" ? "active" : ""}
          onClick={() => handleOptionClick("others")}
        >
          others
        </li>
      </Option>
      <Container>
        <Hint show={activeOption}>
          <img src="/images/hint-icon.png" alt="hint" />
        </Hint>
        <Speaker onClick={handleSpeak}>
          <img src="/images/speaker-icon.png" alt="speaker" />
        </Speaker>
        <Equation ref={equationRef}>{props.equation}</Equation>
      </Container>
    </>
  );
};

export default SliderImage;

const Container = styled.div`
  margin-top: 30px;
  width: 712px;
  height: 393.19px;
  border-radius: 42.51px;
  position: relative;
  background: linear-gradient(
    222.94deg,
    #051a91 -4.31%,
    #061c93 14.41%,
    #2284f1 81.88%,
    #1f80eb 103.81%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hint = styled.div`
  position: absolute;
  top: 20px;
  left: 25px;
  display: ${(props) => (props.show === "Study" ? "block" : "none")};
  img {
    width: 35px;
    height: 40px;
    filter: invert(100%);
  }
`;
const Speaker = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  img {
    width: 35px;
    height: 40px;
    filter: invert(100%);
  }
`;
const Equation = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0.02em;
  text-align: center;
  color: white;
`;
const Option = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  li {
    color: #696671;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    position: relative; /* Add position: relative to the li element */

    &.active {
      font-weight: 700;
      color: #06286e;

      &:after {
        content: "";
        position: absolute;
        left: -7px;
        right: 0;
        bottom: -6px;
        width: 70px;
        height: 2px;
        background-color: #06286e;
      }
    }
  }
`;
