import React from "react";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Banner>
        <Title>Welcome to HYGGEX Quiz</Title>
        <Subtitle>Learn and Have Fun with Interactive Quizzes!</Subtitle>
      </Banner>
      <AboutUs />
      <Start to="../flashcard">Start Quiz</Start>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Banner = styled.div`
  background-color: #06286e;
  padding: 40px;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

const Start = styled(Link)`
  margin-top: 45px;
  position: relative;
  left:300px;
  font-weight: 500;
  color: white;
  border-radius: 32px;
  padding: 13px 40px;
  background: linear-gradient(to bottom, #06286e, #164ec0);
`;
