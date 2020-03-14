import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import SectionCard from "./SectionCard"

class Showcase extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <StaticQuery
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
                          fluid(quality: 100) {
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
                  key={node.id}
                  heading={frontmatter.title}
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
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-row-gap: 5vh;
  grid-column-gap: 10vw;

  @media (max-width: 1024px) {
    grid-row-gap: 6vh;
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    grid-row-gap: 2vh;
  }
`
