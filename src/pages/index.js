import React, { Component } from "react"
import styled from "styled-components"

import Shell from "../components/Shell"
import Showcase from "../components/gallery/Showcase"
import Contact from "../components/Contact"
import CarouselWrapper from "../components/Carousel/CarouselWrapper"

class indexPage extends Component {
  render() {
    return (
      <Shell
        title={"Home"}
        headerLinks={["WORK", "CONTACT"]}
        bottomCheck={true}
      >
        <Wrapper>
          <Heading>
            A freelance photographer based in
            <br />
            <Bold>Eindhoven, The Netherlands.</Bold>
          </Heading>
        </Wrapper>
        {/* <CarouselWrapper /> */}
        <Wrapper>
          <Subheading ref={h1 => (this.heading = h1)}>Recent Works</Subheading>
          <Showcase />
        </Wrapper>
        <Contact />
      </Shell>
    )
  }
}

export default indexPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 5vh;
  @media (max-width: 1024px) {
    margin-bottom: 3vh;
  }
`

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3em;
  font-weight: 400;
  color: #28282a;
  justify-self: flex-start;
  line-height: 1.2em;
  margin-top: 14vh;
  display: relative;
  z-index: -9;

  @media (max-width: 1366px) {
    font-size: 4vw;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    font-weight: 300;
    font-size: 3vw;
    text-align: left;
  }

  @media (max-width: 414px) {
    font-size: 5vw;
    line-height: 25px;
    justify-self: center;
    text-align: center;
  }
`
const Subheading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 400;
  justify-self: flex-start;
  margin-bottom: 2vh;
  display: flex;
  z-index: -9;

  @media (max-width: 1366px) {
    font-size: 4vw;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    font-size: 3vw;
    text-align: center;
    font-weight: 500;
  }

  @media (max-width: 414px) {
    font-size: 5vw;
    justify-self: center;
    text-align: center;
  }
`

const Bold = styled.span`
  font-weight: 600;
`
