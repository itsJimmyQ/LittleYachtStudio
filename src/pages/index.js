import React, { Component } from "react"
import styled from "styled-components"
// import { TweenLite, TimelineLite } from "gsap"

import Shell from "../components/Shell"
// import Carousel from "../components/Carousel"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact"

class indexPage extends Component {
  constructor(props) {
    super(props)

    this.heading = null
    this.showcase = null
    // this.myTween = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    // this.myTween
    //   .from(this.heading, 0.4, {
    //     y: 10,
    //     delay: 0.4,
    //     ease: "power3.In",
    //     opacity: 0,
    //   })
    //   .from(this.subheading, 0.4, {
    //     y: 10,
    //     delay: 0.4,
    //     ease: "power3.In",
    //     opacity: 0,
    //   })
    //   .play()
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
            An <Bold>Interior & Lifestyle </Bold>photographer based in
            <br />
            <Bold>Eindhoven, The Netherlands.</Bold>
          </Heading>
        </Wrapper>
        {/* <Carousel /> */}
        <Wrapper>
          <Subheading ref={h1 => (this.heading = h1)}>Recent Works</Subheading>
          <Showcase
            ref={div => {
              this.showcase = div
            }}
          />
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
    text-align: left;
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
  display: flex;
  z-index: -9;
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
