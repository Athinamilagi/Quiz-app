import React, { useRef, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

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
      <ul className="flex space-x-4 absolute top-20 left-1/2 transform -translate-x-1/2">
        <li
          className={`cursor-pointer ${
            activeOption === "Study"
              ? "font-semibold text-blue-600"
              : "font-normal text-gray-500"
          }`}
          onClick={() => handleOptionClick("Study")}
        >
          Study
        </li>
        <li
          className={`cursor-pointer ${
            activeOption === "Quiz"
              ? "font-semibold text-blue-600"
              : "font-normal text-gray-500"
          }`}
          onClick={() => handleOptionClick("Quiz")}
        >
          Quiz
        </li>
        <li
          className={`cursor-pointer ${
            activeOption === "Test"
              ? "font-semibold text-blue-600"
              : "font-normal text-gray-500"
          }`}
          onClick={() => handleOptionClick("Test")}
        >
          Test
        </li>
        <li
          className={`cursor-pointer ${
            activeOption === "Game"
              ? "font-semibold text-blue-600"
              : "font-normal text-gray-500"
          }`}
          onClick={() => handleOptionClick("Game")}
        >
          Game
        </li>
        <li
          className={`cursor-pointer ${
            activeOption === "others"
              ? "font-semibold text-blue-600"
              : "font-normal text-gray-500"
          }`}
          onClick={() => handleOptionClick("others")}
        >
          others
        </li>
      </ul>
      <div className="mt-10 w-full h-[393.19px] bg-gradient-to-r from-[#051a91] via-[#061c93] to-[#2284f1] flex flex-col items-center justify-center relative">
        <div
          className={`absolute top-20 left-5 ${
            activeOption === "Study" ? "block" : "hidden"
          }`}
        >
          <img src="/images/hint-icon.png" alt="hint" className="w-8 h-8" />
        </div>
        <div
          className="absolute top-20 right-5 cursor-pointer"
          onClick={handleSpeak}
        >
          <img
            src="/images/speaker-icon.png"
            alt="speaker"
            className="w-8 h-8"
          />
        </div>
        <div ref={equationRef}>{props.equation}</div>
      </div>
    </>
  );
};

export default SliderImage;
