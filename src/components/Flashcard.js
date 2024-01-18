import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const SubjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -8px;
`;
const Subject = styled(Link)`
  background-color: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100% - 16px);
  margin: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
  @media (min-width: 768px) {
    width: calc(33.333% - 16px);
  }
`;
const SubjectTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
`;
const SubjectCount = styled.p`
  margin: 0 0 8px;
  font-size: 32px;
  font-weight: bold;
`;
const SubjectQuestionCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Flashcard = () => {
  const params = useLocation();
  const [bool, setBool] = useState(true);
  useEffect(() => {
    setBool(params.pathname === "/flashcard" ? true : false);
  }, [params.pathname]);

  return (
    <>
      {bool && (
        <SubjectContainer>
          <Subject to="science">
            <SubjectTitle>Science</SubjectTitle>
            <SubjectCount>191</SubjectCount>
            <SubjectQuestionCount>
              22 Topics | 15 Past papers
            </SubjectQuestionCount>
          </Subject>
          <Subject to="mathematics">
            <SubjectTitle>Mathematics</SubjectTitle>
            <SubjectCount>8</SubjectCount>
            <SubjectQuestionCount>
              10 Topics | 5 Past papers
            </SubjectQuestionCount>
          </Subject>
          <Subject to="socialstudies">
            <SubjectTitle>Social Studies</SubjectTitle>
            <SubjectCount>12</SubjectCount>
            <SubjectQuestionCount>
              8 Topics | 4 Past papers
            </SubjectQuestionCount>
          </Subject>
          <Subject to="english">
            <SubjectTitle>English</SubjectTitle>
            <SubjectCount>50</SubjectCount>
            <SubjectQuestionCount>
              10 Topics | 5 Past papers
            </SubjectQuestionCount>
          </Subject>
        </SubjectContainer>
      )}
      <Outlet />
    </>
  );
};

export default Flashcard;
