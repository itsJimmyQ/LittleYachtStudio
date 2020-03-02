
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
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler, true);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }
  
  constructor(props) {
    super( props );

    this.state = {
      offsetMode: 0,
    }

    this.onScrollHandler = this.onScrollHandler.bind(this);
  }


  onScrollHandler() {
    const offsetY = window.pageYOffset;
    if (offsetY === 0) {
      this.setState({offsetMode: 0})
    } else {
      if (this.state.offsetMode !== 1) {
        this.setState({offsetMode: 1})
      }
      const ifBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight;
      if (ifBottom) {
        this.setState({offsetMode: 2})
      }
    }  
  }

  render() {
    return (
      <Layout onScroll={this.onScrollHandler}>
        <SEO title={ "Home" } />
        <Header offsetMode={this.state.offsetMode}/>
        <Wrapper>
          <Heading>
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
        <Footer />
      </Layout>
    );
  }
}

export default indexPage

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow-x: hidden;
// `
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