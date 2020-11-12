import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "../../../node_modules/react-medium-image-zoom/dist/styles.css"

class ImgContainer extends Component {
  render() {
    const { image, height, ifZoom, loading } = this.props
    return (
      <Container ifZoom={ifZoom} onContextMenu={e => e.preventDefault()}>
        {ifZoom && (
          <Zoom
            style={{
              height: "80%",
            }}
            zoomMargin={50}
            overlayBgColorEnd={"rgba(0, 0, 0, 0.7"}
          >
            <Img loading={loading || "auto"} fluid={image} fadeIn={true} />
          </Zoom>
        )}
        {!ifZoom && <Img loading={"auto"} fluid={image} fadeIn={true} />}
      </Container>
    )
  }
}

export default ImgContainer

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #eee;
  border-radius: 3px;
  cursor: ${props => (props.ifZoom ? "pointer" : "default")};
  @media (max-width: 1024px) {
    z-index: -9;
  }
  div {
    height: 100%;
    width: 100%;
    border-radius: 3px;
  }
  div:focus {
    border: none;
  }
  border: none;
`
