import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "./slick.css"
import "./slick-theme.css"

class Carousel extends Component {
  render() {
    return (
      <Container>
        {/* TODO: implement next&prev buttons */}
        <Slider
          dots={true}
          // autoplay={true}
          // autoplaySpeed={2000}
          slidesToShow={5}
          swipeToSlide={true}
          infinite={true}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ]}
        >
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
          <Card>
            <SubContainer />
          </Card>
        </Slider>
      </Container>
    )
  }
}

export default Carousel

const Container = styled.section`
  height: 63vh;
  width: 110%;
  margin-bottom: 5vh;
  @media (max-width: 1024px) {
    height: 65vh;
    font-size: 5vw;
    text-align: center;
  }
`
const Card = styled.div`
  padding: 0px;
  height: 100%;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  /* box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3); */
`

const SubContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: turquoise;
`
