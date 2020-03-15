import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Shell from "../components/Shell"

const NotFoundPage = () => (
  <Shell title={"404"} headerLinks={["HOME", "CONTACT"]} bottomCheck={true}>
    <Container>
      <Heading>404: Oops🤭</Heading>
      <SubHeading>I believe you are looking into the wrong place👻</SubHeading>
    </Container>
  </Shell>
)

export default NotFoundPage

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Heading = styled.h1`
  width: 100%;
  font-size: 6em;
  text-align: center;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 4vw;
  }

  @media (max-width: 414px) {
    font-size: 10vw;
  }
`
const SubHeading = styled.h2`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 4vw;
  }

  @media (max-width: 414px) {
    width: 80%;
    font-size: 5vw;
  }
`
