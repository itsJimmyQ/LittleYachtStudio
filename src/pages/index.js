import React, { Component } from "react"
import { TweenLite } from "gsap"
import styled from "styled-components"

import Shell from "../components/Shell"
import Carousel from "../components/Carousel"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact"

class indexPage extends Component {
  constructor(props) {
    super(props)

    this.heading = null
    this.myTween = null
  }

  componentDidMount() {
    this.myTween = TweenLite.from(this.heading, 0.4, {
      y: 10,
      delay: 0.4,
      ease: "power3.In",
      opacity: 0,
    })
  }
  render() {
    return (
      <Shell
        pageTitle={"Home"}
        headerLinks={["WORK", "CONTACT"]}
        bottomCheck={true}
        id={"work-section"}
      >
        <Wrapper>
          <Heading ref={h1 => (this.heading = h1)}>
            An <Bold>Interior & Lifestyle </Bold>photography studio based in
            <br />
            <Bold>Eindhoven, The Netherlands.</Bold>
          </Heading>
        </Wrapper>
        {/* <Carousel /> */}
        <Wrapper>
          <Subheading> Recent Works </Subheading>
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

  @media (max-width: 1024px) {
    font-size: 5vw;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 5.3vw;
  }
`
const Subheading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 600;
  justify-self: flex-start;
  margin-bottom: 2vh;

  @media (max-width: 1024px) {
    font-size: 4.5vw;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 5vw;
  }
`

const Bold = styled.span`
  font-weight: 600;
`
