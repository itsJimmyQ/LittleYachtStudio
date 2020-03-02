import React, { Component } from 'react';
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <LogoAlt><b>Little Yacht</b> studio</LogoAlt>
                    <InfoSection>
                        {/* <Info> (+31) 0636 067 350 </Info> */}
                        <Info> Eindhoven, The Netherlands. </Info>
                        {/* <Info> littleyachtstudio@gmail.com </Info> */}
                        <Info> Created by <a href="https://www.linkedin.com/in/longxiang-qian-38b381188/">Longxiang Qian</a> </Info>                        
                    </InfoSection>

                </Wrapper>
            </Container>
        );
    }
}

export default Footer;

const Container = styled.section`
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
const LogoAlt = styled.h1`
    /* color: black; */
    margin: 0;
    font-weight: 300;
    font-size: 2em;

    @media (max-width: 1024px) {
        font-size: 4vw;
    }

    @media (max-width: 414px) {
        font-size: 5vw;
    }
`
const InfoSection = styled.section`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 5px;
    width: 50%;
    
    @media (max-width: 1024px) {
        width: 100%;    
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-column-gap: 2vw;
        grid-row-gap: 1vh;
    }

    @media (max-width: 414px) {
        margin-top: 20px;
    }
`
const Info = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 0px;

    @media (max-width: 1024px) {
        font-size: 2.5vw;
    }
    @media (max-width: 414px) {
        font-size: 3vw;
    }
`