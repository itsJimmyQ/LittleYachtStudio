import React, { Component } from 'react';
import styled from "styled-components";

class ProjectCard extends Component {
    render() {
        return (
            <Container>
                <CardThumbnail />
                <CardHeading> Project One </CardHeading>
                <CardDesc>
                 Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit.
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </CardDesc>
            </Container>
        );
    }
}

export default ProjectCard;

const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 414px) {
        height: 70vh
    }
`;

const CardThumbnail = styled.div`
    height: 90%;
    width: 100%;
    background-color: #28282A;
    opacity: 0.3;
`;
const CardHeading = styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 1.4em;
    margin: 2% 0 1% 0;
    @media (max-width: 1024px) {
        font-size: 3.5vw;
    }

    @media (max-width: 414px) {
        font-size: 4vw;
    }

`;

const CardDesc = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    font-weight: 500;
    display: flex;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 2.5vw;
    }

    @media (max-width: 414px) {
        font-size: 3vw;
    }
`;