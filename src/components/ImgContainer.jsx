import React, { Component } from 'react';
import styled from "styled-components";
import Img from "gatsby-image"
class ImgContainer extends Component {

    render() {
        const { image } = this.props;
        return (
            <Container>
                <Img 
                    fluid={image}
                    fadeIn={true}
                    backgroundColor={"#eee"}
                />
            </Container>
        );
    }
}

export default ImgContainer;


const Container = styled.div`
    height: auto;
    width: auto;
    background-color: #eee;
    cursor: pointer;
    div {
        height: 100%;
    }
`