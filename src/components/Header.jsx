import React, { Component } from "react"
import styled from "styled-components"

import { isMobile, isBrowser } from "react-device-detect"

import HeaderMobile from "./HeaderMobile"
import HeaderDesktop from "./HeaderDesktop"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expandHeader: false,
    }

    this.headerBtnOnClick = this.headerBtnOnClick.bind(this)
  }
  getStyleOnOffsetMode(offsetMode) {
    let style
    if (isMobile) {
      switch (offsetMode) {
        case 2:
          style = {
            transform: "translateY(-100%)",
          }
          break
        default:
          style = {
            transform: "translateY(0%)",
          }
          break
      }
    } else {
      switch (offsetMode) {
        case 0:
          style = {
            height: "12vh",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0)",
          }
          break
        case 1:
          style = {
            height: "8vh",
            transform: "translateY(0%)",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.16)",
          }
          break
        case 2:
          style = {
            transform: "translateY(-100%)",
          }
          break
        default:
          style = {
            height: "12vh",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0)",
          }
      }
    }

    return style
  }

  headerBtnOnClick() {
    this.setState({ expandHeader: !this.state.expandHeader })
  }
  render() {
    const { offsetMode } = this.props
    const style = this.getStyleOnOffsetMode(offsetMode)
    const { links } = this.props
    console.log(offsetMode)
    return (
      <Container>
        {isMobile && <HeaderMobile style={style} links={links} />}
        {isBrowser && <HeaderDesktop style={style} links={links} />}
      </Container>
    )
  }
}

export default Header

const Container = styled.div`
  width: 100%;
  height: auto;
`
