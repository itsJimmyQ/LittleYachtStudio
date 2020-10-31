import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Carousel from "./Carousel"

class CarouselWrapper extends Component {
  render() {
    return (
      <Container>
        <StaticQuery
          query={graphql`
            query {
              images: allFile(
                filter: { sourceInstanceName: { eq: "images-carousel" } }
                sort: { fields: modifiedTime, order: DESC }
              ) {
                edges {
                  node {
                    id
                    childImageSharp {
                      fluid(quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            return <Carousel images={data.images} />
          }}
        />
      </Container>
    )
  }
}

export default CarouselWrapper

const Container = styled.div`
  height: 60vh;
  width: 110%;
  margin-bottom: 8vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    height: 62vh;
    font-size: 5vw;
    margin-bottom: 1vh;
    text-align: center;
  }
`
