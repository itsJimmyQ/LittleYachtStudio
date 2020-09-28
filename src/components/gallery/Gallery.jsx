import React, { Component } from "react"
import styled from "styled-components"
import ImgContainer from "./ImgContainer"

class Gallery extends Component {
  render() {
    const { imgEdges } = this.props
    return (
      <Container>
        {imgEdges.map((edge, index) => {
          const node = edge.node
          const fluid = node.childImageSharp.fluid
          return (
            <ImgContainer
              key={index}
              image={fluid}
              height={"60vh"}
              ifZoom={true}
            />
          )
        })}
      </Container>
    )
  }
}

export default Gallery

const Container = styled.section`
  display: grid;
  height: auto;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 1vw;
  grid-column-gap: 1vw;

  @media (max-width: 1024px) {
    grid-row-gap: 4vh;
  }

  @media (max-width: 414px) {
    grid-row-gap: 1vh;
    grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
  }
`
