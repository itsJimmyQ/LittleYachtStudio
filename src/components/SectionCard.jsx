import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Img from "gatsby-image"
import { isMobile, isBrowser } from "react-device-detect"

class SectionCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { heading, description, path } = this.props
    return (
      <Container onContextMenu={e => e.preventDefault()}>
        <CardThumbnail>
          <Link to={path}>
            <Img
              loading={"eager"}
              fluid={this.props.image}
              alt={heading}
              backgroundColor={true}
              style={{ width: "100%", height: "100%" }}
            />
            <OverlayText>{heading}</OverlayText>
          </Link>
        </CardThumbnail>
        {isMobile && [
          <CardHeading> {heading} </CardHeading>,
          <CardDesc>{description}</CardDesc>,
        ]}
      </Container>
    )
  }
}

export default SectionCard

const Container = styled.div`
  height: 75vh;
  width: 100%;
  margin-bottom: 3vh;
  z-index: 9;

  @media (max-width: 1024px) {
    height: 70vh;
    z-index: 9;
  }
  @media (max-width: 414px) {
    height: 65vh;
    border-radius: 5px;
    margin-bottom: 0;
  }
`

const CardThumbnail = styled.div`
  height: 100%;
  width: 100%;
  transition: 0.2s ease-in;
  filter: grayscale(80%);

  &:hover {
    filter: grayscale(0%);
  }

  &:hover > a > h1 {
    opacity: 1;
    transform: translateY(-5%);
  }

  @media (max-width: 1024px) {
    filter: grayscale(0%);
    height: 85%;
    img {
      border-radius: 3px;
    }
  }
`

const OverlayText = styled.h1`
  position: absolute;
  width: auto;
  font-size: 2.5vw;
  width: 60%;
  bottom: 8%;
  left: 8%;
  opacity: 0;
  transition: 0.2s ease-in;
  color: #fff;
  margin: 0;
  line-height: 1em;
  user-select: none;
  @media (max-width: 1024px) {
    visibility: hidden;
  }
`

const CardHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.4em;
  margin: 2% 0 1% 0;
  @media (max-width: 1024px) {
    font-size: 4vw;
    margin-bottom: 5px;
  }

  @media (max-width: 414px) {
    font-size: 4.5vw;
    margin-bottom: 0;
  }
`

const CardDesc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: 500;
  display: flex;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 3vw;
  }

  @media (max-width: 414px) {
    font-size: 3.5vw;
  }
`
