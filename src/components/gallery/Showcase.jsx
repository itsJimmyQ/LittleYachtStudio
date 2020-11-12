import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import SectionCard from "./SectionCard"

class Showcase extends Component {
  render() {
    return (
      <Container>
        <StaticQuery
          query={graphql`
            query {
              sections: allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
              ) {
                edges {
                  node {
                    frontmatter {
                      date
                      description
                      imgKey
                      path
                      cardTitle
                      cardDesc
                      thumbnail {
                        childImageSharp {
                          fluid(quality: 90) {
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
          render={data =>
            data.sections.edges.map((edge, index) => {
              const node = edge.node
              const frontmatter = node.frontmatter
              const image = frontmatter.thumbnail.childImageSharp

              return (
                <SectionCard
                  key={index}
                  elKey={node.id}
                  cardTitle={frontmatter.cardTitle}
                  cardDesc={frontmatter.cardDesc}
                  image={image.fluid}
                  path={frontmatter.path}
                  description={frontmatter.description}
                />
              )
            })
          }
        />
      </Container>
    )
  }
}

export default Showcase

const Container = styled.section`
  display: grid;
  height: auto;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-row-gap: 3vw;
  grid-column-gap: 3vw;

  @media (max-width: 1024px) {
    grid-row-gap: 6vh;
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    grid-row-gap: 2vh;
  }
`
