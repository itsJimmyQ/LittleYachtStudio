import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { isMobile, isBrowser } from "react-device-detect"

class HeaderDesktop extends Component {
  render() {
    const { style } = this.props
    return (
      <ContainerDesktop style={style}>
        <LogoContainer>
          <Anchor href="/">
            {isBrowser && (
              <LogoAlt>
                <Bold>Little Yacht</Bold> studio
              </LogoAlt>
            )}
            {isMobile && (
              <LogoAlt>
                <Bold>LYS.</Bold>
              </LogoAlt>
            )}
          </Anchor>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink key={1}>
            <Link to={"/"}> HOME </Link>
          </NavLink>
          <NavLink key={2}>
            <Link to={"/#contact"}> CONTACT </Link>
          </NavLink>
        </NavLinkContainer>
      </ContainerDesktop>
    )
  }
}

export default HeaderDesktop

const ContainerDesktop = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-appearance: none;
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  padding: 0 6%;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    padding: 0 10%;
  }
`

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
    font-size: 3.5vw;
  }
  @media (max-width: 414px) {
    font-size: 6vw;
  }
`
const Anchor = styled.a`
  text-decoration: none;
`
const Bold = styled.b``

const NavLinkContainer = styled.div`
  display: flex;
  justify-self: flex-end;
`

const NavLink = styled.span`
  font-size: 0.9em;
  letter-spacing: 1px;
  margin: 0 25px;
  a {
    font-weight: 600;
    letter-spacing: 2px;
    text-decoration: none;
    @media (max-width: 414px) {
      letter-spacing: 1px;
    }
  }
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    font-size: 2vw;
  }
  @media (max-width: 414px) {
    margin: 0 15px;
    font-size: 3vw;
  }
`
