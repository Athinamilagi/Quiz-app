import React, { useState } from "react";
import SliderImage from "./SliderImage";
import FAQ from "./FAQ";

const equations = [
  "f(x) = 2x + 3",
  "g(x) = sqrt(x)",
  "h(x, y) = x^2 + y^2 - 1",
  "f(x) = 1/x",
  "g(x) = e^x",
  "h(x) = log(x)",
  "f(x, y) = x^2 + xy + y^2",
  "g(x) = |x|",
  "h(x) = sin(x)",
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
      <div
        className={`${
          expanded ? "w-full" : "w-auto"
        } mt-15 ml-30 flex items-center flex-col relative transition-width duration-500`}
      >
        <div className="font-Montserrat text-32 absolute left-0 top-8 font-bold flex bg-gradient-to-b from-blue-900 to-blue-500 text-transparent">
          Relation and Function(Mathematics)
        </div>
        <div className="mt-70 justify-center w-712 flex">
          <SliderImage equation={equations[currentEquationIndex]} />
          <div className="flex items-center justify-around mt-10">
            <button className="bg-[rgba(249,249,249,0.1)] border-none">
              <img
                src="/images/reset-arrow.png"
                alt="reset"
                className="w-35 h-35"
              />
            </button>
            <button
              className="bg-gradient-to-b from-blue-900 to-blue-500 rounded-full w-45 h-45 flex items-center justify-center"
              onClick={handlePrevSlide}
            >
              <img
                className="arrow w-22"
                src="/images/left-arrow.png"
                alt="prevslide"
              />
            </button>
            <p className="font-Inter text-24 font-bold text-[#202b37]">
              {currentEquationIndex + 1}/{equations.length}
            </p>
            <button
              className="bg-gradient-to-b from-blue-900 to-blue-500 rounded-full w-45 h-45 flex items-center"
              onClick={handleNextSlide}
            >
              <img
                className="arrow w-46 filter brightness-0 invert-1"
                src="/images/right-arrow.png"
                alt="nextslide"
              />
            </button>
            <button
              className="bg-[rgba(249,249,249,0.1)] border-none"
              onClick={handleExpand}
            >
              <img
                src="/images/expand-arrow.png"
                alt="expand"
                className="w-35 h-35"
              />
            </button>
          </div>
        </div>
        <div className="absolute left-0 bottom-[120px] z-1 bg-[rgba(249,249,249,0.1)]">
          <span className="font-bold text-14 line-height-16 text-[#696671] absolute left-97 top-0 z-2">
            Published by
          </span>
          <img src="/images/site-logo.png" alt="logo" />
        </div>
        <div className="absolute right-120 bottom-[100px] font-Inter text-28 font-bold line-height-34 text-left bg-gradient-to-b from-blue-900 to-blue-500 text-transparent flex items-center">
          <span className="inline-block w-50 h-50 text-56 bg-gradient-to-b from-blue-900 to-blue-500 text-white p-5 rounded-25 mr-10">
            +
          </span>
          Create Flashcard
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default Card;
