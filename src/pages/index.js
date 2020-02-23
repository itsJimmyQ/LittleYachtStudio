
import React, { Component } from 'react';

// import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Header from "../components/Header";
import Carousel from "../components/Carousel"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import SEO from "../components/seo"

class indexPage extends Component {

  render() {
    return (
      <Layout>
        <SEO title={ "Home" } />
        <Header />
        <Wrapper>
          <Heading>
            A portrait & interior photography firm
            based in <br /> Eindhoven, The Netherlands.
          </Heading>
        </Wrapper>
        <Carousel />
        <Wrapper>
          <Subheading> Recent Works </Subheading>
          <Showcase/>
        </Wrapper>
        <Contact />
        <Footer />
      </Layout>
    );
  }
}

export default indexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`
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
  padding-top: 20vh;
`

const Subheading = styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 2em;
    font-weight: 300;
    justify-self: flex-start;
    margin-bottom: 2vh;
`