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
    height: 65vh;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex: 1 0 auto;
    margin-bottom: 5vh;
`
const Card = styled.div`
    height: 100%;
    width: 350px;
    margin: 0 10px;
    background-color: #ddd;
`