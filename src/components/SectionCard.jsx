import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

class SectionCard extends Component {
  render() {
    const { heading, path } = this.props
    return (
      <Container onContextMenu={e => e.preventDefault()}>
        <Link to={path}>
          <CardThumbnail>
            <Img
              loading={"eager"}
              fluid={this.props.image}
              alt={heading}
              backgroundColor={true}
              style={{ width: "100%", height: "100%" }}
            />
            <OverlayText>{heading}</OverlayText>
            <Overlay />
          </CardThumbnail>
        </Link>
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
    border-radius: 3px;
    margin-bottom: 0;
  }
`

const CardThumbnail = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: 0.2s ease-in;
  filter: grayscale(80%);

  &:hover {
    filter: grayscale(0%);
  }

  &:hover > h1 {
    opacity: 1;
    transform: translateY(-5%);
  }

  @media (max-width: 1024px) {
    filter: grayscale(0%);
    height: 100%;
    img {
      border-radius: 3px;
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
    font-size: 4vw;
  }
  @media (max-width: 414px) {
    font-size: 5.5vw;
  }
`
