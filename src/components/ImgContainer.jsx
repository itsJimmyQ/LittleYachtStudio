import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "../../node_modules/react-medium-image-zoom/dist/styles.css"

class ImgContainer extends Component {
  render() {
    const { image } = this.props
    return (
      <Container onContextMenu={e => e.preventDefault()}>
        <Zoom
          style={{
            height: "100%",
          }}
        >
          <Img
            loading={"auto"}
            fluid={image}
            fadeIn={true}
            // backgroundColor={true}
          />
        </Zoom>
      </Container>
    )
  }
}

export default ImgContainer

const Container = styled.div`
  height: 55vh;
  width: auto;
  background-color: #eee;
  cursor: pointer;
  div {
    height: 100%;
  }
  @media (max-width: 1024px) {
    z-index: -9;
  }
  div {
    height: 100%;
    width: 100%;
  }
`
