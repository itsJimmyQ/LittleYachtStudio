import React, { Component } from "react"
import styled from "styled-components"

import Shell from "../components/Shell"
import Showcase from "../components/gallery/Showcase"
import Contact from "../components/Contact"

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
            <Bold>A freelance photographer</Bold> based in
            <br />
            Eindhoven, The Netherlands.
          </Heading>
        </Wrapper>
        <Wrapper>
          <Subheading>Recent Works</Subheading>
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
  margin-bottom: 25vh;
  @media (max-width: 1024px) {
    margin-bottom: 15vh;
  }
`

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: clamp(20px, 2.5vw, 42px);
  font-weight: 400;
  color: #28282a;
  justify-self: flex-start;
  line-height: 1.2em;
  margin-top: 20vh;
  display: relative;
  z-index: -9;
`
const Subheading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: clamp(20px, 2vw, 30px);
  font-weight: 400;
  justify-self: flex-start;
  margin-bottom: 2vh;
  display: flex;
  z-index: -9;
`

const Bold = styled.span`
  font-weight: 600;
`
