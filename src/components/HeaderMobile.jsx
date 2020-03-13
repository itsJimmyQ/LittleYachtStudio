import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TweenLite } from "gsap"

import HeaderBtn from "./HeaderBtn"

class HeaderMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
    this.navLink = null
    this.myTween = null

    this.toggleHeader = this.toggleHeader.bind(this)
  }

  componentDidUpdate() {
    if (this.state.expanded) {
      this.myTween = TweenLite.to(this.navLink.children, 0.4, {
        y: 0,
        delay: 0.4,
        ease: "power3.In",
        opacity: 1,
        stagger: {
          amount: 0.15,
        },
      })
    } else {
      this.myTween = TweenLite.to(this.navLink.children, 0.1, {
        y: 10,
        delay: 0,
        ease: "power3.In",
        opacity: 0,
        stagger: {
          amount: 0.1,
        },
      })
    }
  }
  toggleHeader() {
    console.log("clicked")
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { expanded } = this.state
    let navStyle
    if (expanded) {
      navStyle = {
        transform: "translateY(0)",
      }
    } else {
      navStyle = {
        transform: "translateY(-88%)",
      }
    }
    const { style, links } = this.props
    return (
      <Container style={style}>
        <LogoContainer>
          <Anchor href="/">
            <LogoAlt>
              <b>LYS.</b>
            </LogoAlt>
          </Anchor>
        </LogoContainer>
        <HeaderBtn onClickHeader={this.toggleHeader} />
        <BackgroundContainer style={navStyle}>
          <HeaderNav ref={h1 => (this.navLink = h1)}>
            {links.map((link, index) => {
              return (
                <NavLink key={index} onClick={this.toggleHeader}>
                  <Link to={`/#${link.toLowerCase()}-section`}>{link}</Link>
                </NavLink>
              )
            })}
          </HeaderNav>
        </BackgroundContainer>
      </Container>
    )
  }
}

export default HeaderMobile

const Container = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: fixed;
  top: 0;
  transition: 0.2s ease;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  z-index: 999;
`

const LogoAlt = styled.h1`
  /* color: black; */
  margin: 0;
  font-weight: 300;
  font-size: 2em;
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 414px) {
    font-size: 6vw;
  }
`

const Anchor = styled.a`
  text-decoration: none;
`

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  transform: translateY(-88%);
  transition: 0.4s ease-in-out;
`

const HeaderNav = styled.div`
  width: 80%;
  height: auto;
  margin-bottom: 12vh;
`

const NavLink = styled.h2`
  color: black;
  z-index: 999;
  font-size: 8vw;
  margin: 3vh 0;
  text-align: right;
  opacity: 0;
  transform: translateY(15%);
  a {
    text-decoration: none;
    font-family: "Abril Fatface", cursive;
  }
  user-select: none;
`
