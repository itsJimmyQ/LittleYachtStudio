import React, { Component } from 'react';
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby';

import ProjectCard from "./ProjectCard";

class Showcase extends Component {
    render() {
        return (
            <Container>
                <StaticQuery
                // TODO: Create MD and render cards dynamically
                    query={graphql`
                        query {
                            images: allFile(filter: {
                                sourceInstanceName: {eq: "images-thumbnail"}}, sort: {order: ASC, fields: name}) {
                                  edges {
                                    node {
                                      childImageSharp {
                                        id
                                        fluid( quality: 100 ){
                                            ...GatsbyImageSharpFluid
                                        }
                                      }            
                                  }
                              }
                            }
                        }
                    `}
                    render={
                        data => (
                            // console.log(data)
                            data.images.edges.map((edge, index) => {
                                // console.log(edge.node.childImageSharp)
                                const node = edge.node;
                                const image = node.childImageSharp;
                                return <ProjectCard 
                                    key={ image.id }
                                    heading={ image.id }
                                    image={ image.fluid }
                                    index={index}
                                />
                            })
                        )
                    }
                />
            </Container>
        );
    }
}

export default Showcase;

const Container = styled.section`
    display: grid;
    height: auto;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat( auto-fill, minmax(450px, 1fr) );
    grid-row-gap: 5vh;
    grid-column-gap: 10vw;

    @media (max-width: 1024px) {
        grid-row-gap: 6vh;
    }

    @media (max-width: 414px) {
        grid-template-columns: repeat( auto-fill, minmax(80%, 1fr) );
    }
`