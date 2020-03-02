import React, { Component } from 'react';
import styled from "styled-components"

class Carousel extends Component {
    render() {
        return (
            <Container>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Container>
        );
    }
}

export default Carousel;

const Container = styled.section`
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex: 1 0 auto;
    margin-bottom: 5vh;
    @media (max-width: 1024px) {
        height: 50vh;
        font-size: 5vw;
        text-align: center;
    }
`
const Card = styled.div`
    height: 100%;
    width: 400px;
    margin: 0 10px;
    background-color: #ddd;
    @media (max-width: 1024px) {
        width: 50vw;
    }
    @media (max-width: 414px) {
        width: 70vw;
        margin: 0 5px;
    }
`