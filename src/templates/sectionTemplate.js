import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Gallery from "../components/Gallery"
import Shell from "../components/Shell"

export default function Template({ data }) {
  const { markdowns, images } = data
  const { frontmatter } = markdowns
  return (
    <Shell
      title={frontmatter.title}
      headerLinks={["HOME", "CONTACT"]}
      bottomCheck={true}
    >
      <Wrapper>
        <Heading>{frontmatter.title}</Heading>
        <Desc>{frontmatter.description}</Desc>
        <Gallery imgEdges={images.edges} />
      </Wrapper>
    </Shell>
  )
}

export const pageQuery = graphql`
  query($path: String!, $imgKey: String!) {
    images: allFile(filter: { sourceInstanceName: { eq: $imgKey } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    markdowns: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        imgKey
      }
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 80%;
  margin-bottom: 5vh;
`

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  font-weight: 600;
  color: #28282a;
  justify-self: flex-start;
  line-height: 1.2em;
  padding-top: 14vh;
  margin-bottom: 1vh;

  @media (max-width: 1024px) {
    font-size: 5vw;
    text-align: center;
  }

  @media (max-width: 414px) {
    font-size: 5.5vw;
    margin-bottom: 2vh;
  }
`

const Desc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: 500;
  display: flex;
  margin-bottom: 4vh;

  @media (max-width: 1024px) {
    font-size: 2.5vw;
  }

  @media (max-width: 414px) {
    font-size: 3vw;
    margin-bottom: 3vh;
  }
`
