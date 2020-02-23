import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "gatsby"
class Header extends Component {
  render() {
    return (
      <Container>
        <LogoContainer>
          <LogoAlt><Bold>Little Yacht</Bold> studio</LogoAlt>
        </LogoContainer>

        <NavLinkContainer>
          <NavLink><Link to="/#work-section"><Bold> Work </Bold></Link></NavLink>
          <NavLink><Link to="/#about-section"> About </Link></NavLink>
          <NavLink><Link to="/#contact-section"> Contact </Link></NavLink>
        </NavLinkContainer>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  font-family: "Poppins", sans-serif;
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  width: 100%;
  padding: 0 6%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
  margin-bottom: 6vh;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

`
const LogoAlt = styled.h1`
  /* color: black; */
  margin: 0;
  font-weight: 300;
  font-size: 2em;
`

const Bold = styled.span`
  font-weight: 900;
`

const NavLinkContainer = styled.div`
  display: flex;
  justify-self: flex-end; 
`

const NavLink = styled.span`
  font-size: 1em;
  letter-spacing: 1px;
  margin: 0 12px;
  a {
    font-weight: 300;
    color: black;
    text-decoration: none;
  }
`