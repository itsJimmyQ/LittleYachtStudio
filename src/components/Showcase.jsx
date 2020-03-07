import React, { Component } from 'react';
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby';

import SectionCard from "./SectionCard";

class Showcase extends Component {
    render() {
        return (
            <Container>
                <StaticQuery
                // TODO: Create MD and render cards dynamically
                    query={graphql`
                        query {
                            sections: allMarkdownRemark {
                                edges {
                                    node {
                                        frontmatter {
                                            date
                                            path
                                            title
                                            description
                                            thumbnail {
                                                id
                                                childImageSharp {
                                                    fluid (quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={
                        data => (
                            // console.log(data.sections)
                            data.sections.edges.map((edge, index) => {
                                const node = edge.node;
                                const frontmatter = node.frontmatter;
                                // console.log(frontmatter)
                                const image = frontmatter.thumbnail.childImageSharp;
                                return <SectionCard 
                                    key={ image.id }
                                    heading={ frontmatter.title }
                                    image={ image.fluid }
                                    path={frontmatter.path}
                                    description={frontmatter.description}
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