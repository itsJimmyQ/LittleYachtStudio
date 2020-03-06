import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "gatsby"
import { Tween } from 'react-gsap';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  getStyleOnOffsetMode( offsetMode ) {
    let style;
    switch( offsetMode ) {
      case 0:
        style = {
          height: "12vh",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0);"
        };
        break;
      case 1:
        style = {
          height: "8vh",
          transform: "translateY(0%)",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.16);"
        };
        break;
      case 2:
        style = {
          transform: "translateY(-100%)"
        };
        break;
      case undefined:
        style = {
          height: "12vh",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0);"
        }
    }
    return style
  } 

  
  render() {
    const { offsetMode } = this.props;
    console.log(offsetMode)
    const style = this.getStyleOnOffsetMode( offsetMode );
    const { links } = this.props;
    return (
      <Tween to={style} duration={0.2}>
        <Container>
          <LogoContainer>
            <Anchor href="/"><LogoAlt><Bold>Little Yacht</Bold> studio</LogoAlt></Anchor>
          </LogoContainer>

          <NavLinkContainer>
            {
              links.map((link, index) => {
                return <NavLink key={index}><Link to={`/#${link.toLowerCase()}-section`}> { link } </Link></NavLink>
              })
            }
          </NavLinkContainer>
        </Container>
      </Tween>
    );
  }
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  font-family: "Poppins", sans-serif;
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  padding: 0 6%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

`
const LogoAlt = styled.h1`
  /* color: black; */
  margin: 0;
  font-weight: 300;
  font-size: 2em;
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
`

const Bold = styled.span`
  font-weight: 600;
`

const Anchor = styled.a`
  text-decoration: none;
`

const NavLinkContainer = styled.div`
  display: flex;
  justify-self: flex-end; 
`

const NavLink = styled.span`
  font-size: 1em;
  letter-spacing: 1px;
  margin: 0 25px;
  a {
    font-weight: 400;
    text-decoration: none;
  }
  user-select: none;

  @media (max-width: 1024px) {
    font-size: 2.5vw;
  }
`