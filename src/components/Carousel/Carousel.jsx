import React, { Component } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"
import ImgContainer from "../ImgContainer"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.onClickPrev = this.onClickPrev.bind(this)
    this.onClickPause = this.onClickPause.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
  }
  onClickPrev() {
    console.log("onclick")
    this.slider.slickPrev()
  }
  onClickNext() {
    this.slider.slickNext()
  }
  onClickPause() {
    this.slider.slickPause()
  }
  render() {
    const { images } = this.props
    return (
      <Container>
        <Slider
          ref={c => (this.slider = c)}
          autoplay={true}
          autoplaySpeed={1500}
          slidesToShow={5}
          draggable={false}
          swipeToSlide={true}
          infinite={true}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              },
            },
          ]}
        >
          {images.edges.map((edge, index) => {
            const node = edge.node
            const image = node.childImageSharp
            return (
              <ImgWrapper>
                <ImgContainer
                  key={node.id}
                  image={image.fluid}
                  height={"60vh"}
                  ifZoom={false}
                />
              </ImgWrapper>
            )
          })}
        </Slider>
        <SliderButtonContainer>
          <Button onClick={this.onClickPrev}>Prev</Button>
          <Button onClick={this.onClickPause}>Pause</Button>
          <Button onClick={this.onClickNext}>Next</Button>
        </SliderButtonContainer>
      </Container>
    )
  }
}

export default Carousel

const Container = styled.section`
  height: 100%;
  width: 100%;
`

const ImgWrapper = styled.section`
  height: 100%;
  @media (max-width: 1024px) {
    padding: 10px 12%;
  }
`
const SliderButtonContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 10%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    visibility: hidden;
  }
`

const Button = styled.h1`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  text-decoration: underline;
`
