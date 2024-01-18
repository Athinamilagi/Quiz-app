import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <ContactInfo>
        <p>
          If you have any questions, suggestions, or just want to say hello,
          feel free to reach out to us!
        </p>
        <p>Email: info@hyggexquiz.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </ContactInfo>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  max-width: 800px;
  margin: 0;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #06286e;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;
