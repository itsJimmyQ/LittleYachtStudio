import React, { Component } from "react"
import styled from "styled-components"

class Contact extends Component {
  render() {
    return (
      <Container id={"contact-section"}>
        <Wrapper>
          <Subheading> Interesed? </Subheading>
          <Heading> Contact us! </Heading>
          <Description>
            We are more than happy to answer any inquiry or collaboration
            request within <b>one</b> working day using the contacts below.
          </Description>
          <ContactSubsection>
            <ContactDetail>
              <Label> Email </Label>
              <Info>
                <InfoLink
                  href={
                    "mailto:littleyachtstudio@gmail.com?subject=Questions regarding your service.&body = Message"
                  }
                  target="_blank"
                >
                  littleyachtstudio@gmail.com
                </InfoLink>
              </Info>
            </ContactDetail>
            <ContactDetail>
              <Label> Whatsapp </Label>
              <Info>
                <InfoLink href="tel:0031636067350">(+31) 636 067 350</InfoLink>
              </Info>
            </ContactDetail>
            <ContactDetail>
              <Label> Instagram </Label>
              <Info>
                <InfoLink
                  target="_blank"
                  href={"https://www.instagram.com/iamjimmyqian/"}
                >
                  @littleyachtstudio
                </InfoLink>
              </Info>
            </ContactDetail>
            <ContactDetail>
              <Label> Facebook </Label>
              <InfoLink
                target="_blank"
                href={"https://www.facebook.com/littleyachtstudio/"}
              >
                <Info>Little Yacht studio</Info>
              </InfoLink>
            </ContactDetail>
          </ContactSubsection>
        </Wrapper>
      </Container>
    )
  }
}

export default Contact

const Container = styled.section`
  background-color: #28282a;
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const Subheading = styled.h2`
  color: white;
  font-weight: 100;
  font-size: 1.4em;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 3vw;
    margin-bottom: 0;
  }

  @media (max-width: 414px) {
    font-size: 3.5vw;
    margin-bottom: 0;
  }
`
const Heading = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 5.5vw;
  }

  @media (max-width: 414px) {
    font-size: 6vw;
  }
`

const Description = styled.p`
  color: white;
  font-weight: 300;
  font-size: 1.1em;
  width: 60%;
  line-height: 1.5em;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 3vw;
  }

  @media (max-width: 414px) {
    width: 100%;
    font-size: 3.5vw;
  }
`
const ContactSubsection = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 60%;

  @media (max-width: 1024px) {
    margin-top: 5vh;
    width: 100%;
    font-size: 3vw;
    grid-column-gap: 10vw;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const Label = styled.label`
  font-size: 0.9em;
  color: white;
  opacity: 0.5;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 2.5vw;
  }

  @media (max-width: 414px) {
    font-size: 3vw;
    text-decoration: none;
  }
`
const Info = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  color: white;
  font-weight: 300;
  cursor: pointer;
  u,
  a {
    color: white;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    font-size: 3vw;
    text-decoration: none;
  }

  @media (max-width: 414px) {
    font-size: 3.5vw;
    text-decoration: none;
  }
`

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoLink = styled.a``
