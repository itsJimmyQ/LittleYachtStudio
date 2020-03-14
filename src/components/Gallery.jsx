import React, { Component } from "react"
import styled from "styled-components"
import { TweenLite } from "gsap"

import ImgContainer from "./ImgContainer"

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.gallery = null
    this.myTween = null
  }

  componentDidMount() {
    this.myTween = TweenLite.from(this.gallery.children, 0.4, {
      y: 20,
      delay: 0.4,
      ease: "power3.In",
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    })
  }
  render() {
    const { imgEdges } = this.props
    return (
      <Container
        ref={gallery => {
          this.gallery = gallery
        }}
      >
        {imgEdges.map((edge, index) => {
          const node = edge.node
          const fluid = node.childImageSharp.fluid
          return <ImgContainer key={index} image={fluid} />
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
  /* background-color:black; */
  /* grid-template-rows: 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 5vh;
  grid-column-gap: 2vw;

  @media (max-width: 1024px) {
    grid-row-gap: 6vh;
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
  }
`
