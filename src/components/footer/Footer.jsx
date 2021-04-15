import React, { Component } from "react"
import styled from "styled-components"

class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <LogoContainer>
            <Anchor href="/">
              <LogoAlt>
                <b>Little Yacht</b> studio
              </LogoAlt>
            </Anchor>
          </LogoContainer>
          <InfoSection>
            <Info> KvK: 74389831</Info>
            <Info />
            <Info> Eindhoven, The Netherlands. </Info>
            <Info>
              Created by{" "}
              <a href="https://www.instagram.com/iamjimmyqian">
                Longxiang Qian
              </a>
            </Info>
          </InfoSection>
        </Wrapper>
      </Container>
    )
  }
}

export default Footer

const Container = styled.section`
  min-height: 250px;
  height: 25vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`
const LogoAlt = styled.h1`
  /* color: black; */
  margin: 0;
  font-weight: 300;
  font-size: 1.5em;

  @media (max-width: 1024px) {
    font-size: 3vw;
  }

  @media (max-width: 414px) {
    font-size: 5vw;
  }
`
const Anchor = styled.a`
  text-decoration: none;
`
const InfoSection = styled.section`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 5px;
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 2vw;
    grid-row-gap: 1vh;
  }

  @media (max-width: 414px) {
    margin-top: 20px;
  }
`
const Info = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 17px);
  margin-bottom: 0px;
`
