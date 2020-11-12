import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Images from "../../Images"

class SectionCard extends Component {
  render() {
    const { cardTitle, cardDesc, path } = this.props
    return (
      <Link to={path} style={{ textDecoration: "none" }}>
        <Container onContextMenu={e => e.preventDefault()}>
          <CardThumbnail>
            <Img
              className={"img-card"}
              loading={"eager"}
              fluid={this.props.image}
              alt={cardTitle}
              backgroundColor={true}
              style={{
                width: "100%",
                height: "100%",
                transition: "0.5s ease",
              }}
            />
          </CardThumbnail>
          <CardContent>
            <Left>
              <CardTitle>{cardTitle}</CardTitle>
              <CardDesc>{cardDesc}</CardDesc>
            </Left>
            <Right>
              <Button className={"btn-open"}>
                <Icon src={Images.icons.openArrow} />
              </Button>
            </Right>
          </CardContent>
        </Container>
      </Link>
    )
  }
}

export default SectionCard

const Container = styled.div`
  height: 65vh;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1366px) {
    height: 50vh;
    z-index: 9;
    margin-bottom: 1vh;
  }
  @media (max-width: 414px) {
    height: 40vh;
    border-radius: 3px;
    margin-bottom: 0;
  }
  transition: 0.2s ease-in-out;
  &:hover .img-card {
    transform: scale(1.05);
  }

  &:hover .btn-open {
    opacity: 1;
  }
`

const CardThumbnail = styled.div`
  height: 85%;
  width: 100%;
  position: relative;
  transition: 0.2s ease-in;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 80%;
  }
`

const CardContent = styled.div`
  height: 15%;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;

  @media (max-width: 1024px) {
    padding: 0 16px;
    height: 20%;
  }
`

const CardTitle = styled.h2`
  text-decoration: none !important;
  font-size: clamp(15px, 1.8vw, 19px);
  font-weight: 600;
`

const CardDesc = styled.h3`
  text-decoration: none !important;
  opacity: 0.8;
  font-size: clamp(13px, 1.5vw, 17px);
  font-weight: 500;
`

const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Right = styled(Left)`
  width: 30%;
  align-items: flex-end;
`

const Button = styled.div`
  height: 40px;
  width: 40px;
  transition: 0.2s ease;
  opacity: 0;
  @media (max-width: 1024px) {
    height: 24px;
    width: 24px;
    opacity: 1;
  }
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
`

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: #28282a;
//   opacity: 0;
//   transition: 0.1s ease-in;
//   @media (max-width: 1024px) {
//     visibility: visible;
//     opacity: 0.2;
//   }

// const OverlayText = styled.h1`
//   position: absolute;
//   /* font-size: clamp(28px, 4vw, 60px); */
//   font-size: 60px;
//   width: 80%;
//   bottom: 32px;
//   left: 32px;
//   opacity: 1;
//   z-index: 99;
//   transition: 0.2s ease-in;
//   color: #fff;
//   margin: 0;
//   line-height: 1em;
//   user-select: none;
//   @media (max-width: 1024px) {
//     line-height: 1em;
//     opacity: 1;
//     font-weight: 600;
//   }
