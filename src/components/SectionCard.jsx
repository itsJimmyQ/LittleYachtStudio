import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Img from "gatsby-image"

class SectionCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { heading, path } = this.props
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
            {/* <Overlay /> */}
          </Link>
        </CardThumbnail>
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

  @media (max-width: 1366px) {
    height: 50vh;
    z-index: 9;
    margin-bottom: 1vh;
  }
  @media (max-width: 414px) {
    height: 40vh;
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
    filter: grayscale(40%);
    height: 100%;
    img {
      border-radius: 8px;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0;
  visibility: hidden;
  border-radius: 8px;
  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 0.2;
    height: 100%;
    width: 100%;
  }
`

const OverlayText = styled.h1`
  position: absolute;
  width: auto;
  font-size: 3vw;
  width: 60%;
  bottom: 8%;
  left: 8%;
  opacity: 0;
  z-index: 99;
  transition: 0.2s ease-in;
  color: #fff;
  margin: 0;
  line-height: 1em;
  user-select: none;
  @media (max-width: 1024px) {
    /* visibility: hidden; */
    line-height: 1em;
    opacity: 1;
    font-weight: 600;
    font-size: 5.5vw;
  }
`

const CardHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.4em;
  margin: 2% 0 1% 0;
  @media (max-width: 1024px) {
    font-size: 4vw;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 4.5vw;
    margin-top: 0;
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
