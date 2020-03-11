
import React, { Component } from 'react';

// import { Link } from "gatsby";
import styled from "styled-components";
import Outer from "../components/Shell"
import Carousel from "../components/Carousel"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact";
import Footer from "../components/Footer"

class indexPage extends Component {
  render() {
    return (
      <Outer 
        pageTitle={"Home"}
        headerLinks={["Works", "Contact"]}
        bottomCheck={true}
      >
        {/* <SEO title={ "Home" } />
        <Header 
          offsetMode={this.state.offsetMode}
          links={["Works", "Contact"]}
        /> */}
        <Wrapper>
          <Heading id={"works-section"}>
            A <Bold>portrait & interior </Bold>photography studio
            based in <br /> Eindhoven, The Netherlands.
          </Heading>
        </Wrapper>
        <Carousel />
        <Wrapper>
          <Subheading> Recent Works </Subheading>
          <Showcase/>
        </Wrapper>
        <Contact />
        {/* <Footer /> */}
      </Outer>
    );
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
  color: #28282A;
  justify-self: flex-start;
  line-height: 1.2em;
  padding-top: 14vh;

  @media (max-width: 1024px) {
    font-size: 5vw;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 5.5vw
  }
`

const Subheading = styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 2em;
    font-weight: 400;
    justify-self: flex-start;
    margin-bottom: 2vh;

    @media (max-width: 1024px) {
      font-size: 4.5vw;
      text-align: center;
    }
    
    @media (max-width: 414px) {
      font-size: 5vw
    }
`

const Bold = styled.span`
  font-weight: 600;
`