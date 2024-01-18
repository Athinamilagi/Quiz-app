import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const routeParts = currentRoute.split("/").filter(Boolean);

  return (
    <Container>
      <Main>
        <Link to="/">
          <img src="/images/site-logo.png" alt="logo" />
        </Link>
        <Menu>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="flashcard">
            <li>Flashcard</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
          <Link to="faq">
            <li>FAQ</li>
          </Link>
          <Link to="login">
            <li>
              <span>Login</span>
            </li>
          </Link>
        </Menu>
      </Main>
      <Navigation>
        <li>
          <img src="/images/home-icon.png" alt="home" />
          <img className="arrow" src="/images/right-arrow.png" alt="path" />
        </li>
        {routeParts.map((data) => (
          <li>
            {data}
            <img className="arrow" src="/images/right-arrow.png" alt="path" />
          </li>
        ))}
      </Navigation>
      <Outlet />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 160vh;
  padding: 0 calc(3.4vw + 5px);
  position: relative;
  overflow: hidden;
  background-color: rgba(249, 249, 249, 0.1);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 191px;
    height: 59px;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  li {
    padding-right: 40px;
    span {
      font-weight: 500;
      color: white;
      border-radius: 32px;
      padding: 13px 40px;
      background: linear-gradient(to bottom, #06286e, #164ec0);
    }
  }
`;

const Navigation = styled.div`
margin: 20px 30px;
display: flex;
li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 600;
    color : #696671;
    img {
      width: 20px;
      height: 21.25px;
      color: #696671;
    }

    .arrow {
      color: #06286E;
      width: 1.5em;
      height: 1.3em;
    }
    &:last-child {
        color: #06286E;
        .arrow {
          display: none; // Hide the right-arrow image for the last li
        }
  }
`;
