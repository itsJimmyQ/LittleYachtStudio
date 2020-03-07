import React, { Component } from 'react';
import { Link } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby';

class Gallery extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.imageNodes)
        return (
            <Container>
                <ImgContainer />
                <ImgContainer />
                <ImgContainer />
            </Container>
        );
    }
}

export default Gallery;

const Container = styled.section`
    display: grid;
    height: auto;
    width: 100%;
    /* background-color:black; */
    /* grid-template-rows: 1fr 1fr; */
    grid-template-columns: repeat( auto-fill, minmax(350px, 1fr) );
    grid-row-gap: 5vh;
    grid-column-gap: 2vw;

    @media (max-width: 1024px) {
        grid-row-gap: 6vh;
    }

    @media (max-width: 414px) {
        grid-template-columns: repeat( auto-fill, minmax(80%, 1fr) );
    }
`;

const ImgContainer = styled.div`
    height: 75vh;
    width: auto;
    background-color: #eee;

`