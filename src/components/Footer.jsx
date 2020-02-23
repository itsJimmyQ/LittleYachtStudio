import React, { Component } from 'react';
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <LogoAlt><b>Little Yacht</b> studio</LogoAlt>
                    <InfoSection>
                        <Info> (+31) 0636 067 350 </Info>
                        <Info></Info>
                        <Info> littleyachtstudio@gmail.com </Info>
                        <Info> Eindhoven, The Netherlands. </Info>
                    </InfoSection>

                </Wrapper>
            </Container>
        );
    }
}

export default Footer;

const Container = styled.section`
    height: 30vh;
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

const LogoAlt = styled.h1`
  /* color: black; */
  margin: 0;
  font-weight: 300;
  font-size: 1.8em;
`
const InfoSection = styled.section`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 5px;
    width: 50%;
`
const Info = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1em;
  margin-bottom: 0px;
`