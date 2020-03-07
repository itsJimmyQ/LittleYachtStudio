import React, { Component } from 'react';
import { Link } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

class SectionCard extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        const { heading, description, path } = this.props;
        return (
            <Container>  
                <CardThumbnail>
                    <Link to={path}>
                        <Img 
                            fluid={this.props.image}
                            alt={"Thumbnail"}
                            backgroundColor={true}
                            style={
                                {width: "100%", height: "100%"}
                            }
                        />
                         <OverlayText>Read More</OverlayText>
                    </Link>
                   
                </CardThumbnail>
                <CardHeading> { heading } </CardHeading>
                <CardDesc>
                        { description }
                </CardDesc>
            </Container>
        );
    }
}

export default SectionCard;

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3vh;
    /* box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2); */
    /* border: 2px solid black; */
    /* border-radius: 5px; */
    /* padding: 20px 20px; */

    @media (max-width: 1024px) {
        height: 70vh;

    }
    @media (max-width: 414px) {
        height: 70vh;
        margin-bottom: 5vh;
    }
`;

const CardThumbnail = styled.div`
    height: 90%;
    width: 100%;
    transition: 0.2s ease-in;
    filter: grayscale(80%);

    &:hover{
        filter: grayscale(0%)
    }

    &:hover>a>h1 {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 1024px) {
        filter: grayscale(0%);

        img {
            border-radius: 5px;
        }
    }
`;

const OverlayText = styled.h1`
    position: absolute;
    font-size: 10em;
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
    transform: translate(-50%, -49%);
    color: #DCE7FF;
    mix-blend-mode: difference;
    margin: 0;
    line-height: 1em;
    user-select: none;
`

const CardHeading = styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 1.4em;
    margin: 2% 0 0.5% 0;

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