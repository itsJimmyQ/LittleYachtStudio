import React, { Component } from "react"
import styled from "styled-components"
import ImgContainer from "./ImgContainer"
import Masonry from "react-masonry-css"

class Gallery extends Component {
  render() {
    const { imgEdges } = this.props
    const breakpointColumnsObj = {
      default: 4,
      1600: 3,
      1200: 3,
      800: 1,
    }
    return (
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {imgEdges.map((edge, index) => {
            const node = edge.node
            const fluid = node.childImageSharp.fluid
            return (
              <ImgContainer
                key={index}
                image={fluid}
                ifZoom={true}
                loading={"lazy"}
              />
            )
          })}
        </Masonry>
      </Container>
    )
  }
}

export default Gallery

const Container = styled.section`
  height: auto;
  width: 100%;
`
