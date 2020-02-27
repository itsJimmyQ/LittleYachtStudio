import React, { Component } from 'react';
import styled from "styled-components";

import ProjectCard from "./ProjectCard";

class Showcase extends Component {
    render() {
        return (
            <Container>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Container>
        );
    }
}

export default Showcase;

const Container = styled.section`
    display: grid;
    height: auto;
    grid-template-rows: 1fr 1fr;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: repeat( auto-fit, minmax(450px, 1fr) );
    grid-row-gap: 5vw;
    grid-column-gap: 10vw;
    @media (max-width: 979px) {
        grid-row-gap: 6vh;
    }
`