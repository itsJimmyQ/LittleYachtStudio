import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenLite, TimelineLite } from "gsap"
import Img from "gatsby-image"
import { isMobile, isBrowser } from "react-device-detect"

class SectionCard extends Component {
  constructor(props) {
    super(props)

    this.card = null
    this.myTween = new TimelineLite({ paused: true })
  }

  // componentDidMount() {
  //   this.myTween
  //     .from(this.card, 0.3, {
  //       x: 20,
  //       delay: 0.8,
  //       ease: "power3.In",
  //       opacity: 0,
  //     })
  //     .play()
  // }
  render() {
    const { elKey, heading, description, path } = this.props
    return (
      <Container
        ref={div => {
          this.card = div
        }}
      >
        <CardThumbnail>
          <Link to={path}>
            <Img
              loading={"eager"}
              fluid={this.props.image}
              alt={"Thumbnail"}
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
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3vh;
  z-index: 9;

  @media (max-width: 1024px) {
    height: 70vh;
    z-index: 9;
    /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.16); */
    /* padding: 10px; */
    /* border-radius: 3px; */
  }
  @media (max-width: 414px) {
    height: 70vh;
    border-radius: 2px;
    margin-bottom: 5vh;
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
    height: 90%;
    filter: grayscale(0%);
    img {
      border-radius: 5px;
    }
  }
  @media (max-width: 414px) {
    height: 85%;
    img {
      border-radius: 3px;
    }
  }
`

const OverlayText = styled.h1`
  position: absolute;
  font-size: 3vw;
  bottom: 8%;
  left: 10%;
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
