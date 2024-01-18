import React from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const FAQ = () => {
  return (
    <Faq>
      <span>FAQ</span>
      <Accordion />
    </Faq>
  );
};

export default FAQ;

const Faq = styled.div`
  margin-top: 150px;
  margin-left: 50px;
  span {
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0.005em;
    text-align: left;
    background-image: linear-gradient(to bottom, #06286e, #164ec0);
    color: transparent;
    -webkit-background-clip: text; /* for Safari/Chrome/iOS */
    background-clip: text;
  }
`;
