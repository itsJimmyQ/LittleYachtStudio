import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Header from "../components/Header"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // TODO: data.images == undefined??????
  const { markdowns, images } = data
  const { frontmatter, html } = markdowns
  console.log(data)
  return (
    <Container>
        <SEO title={frontmatter.title} />
        <Header
          links={["Home", "Contact"]}
        />
        <Wrapper>
            <Heading>{frontmatter.title}</Heading>
            {/* TODO: Pass in image nodes with FLUID attributes */}
            <Gallery imageNodes={images.edges.node}/>
        </Wrapper>
    </Container>
  )
}

export const pageQuery = graphql`
  query($path: String!, $imgKey: String!) {
    images: allFile(filter: {sourceInstanceName: {eq: $imgKey}}) {
      edges {
        node {
          id
          childImageSharp{
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
      }
    }
  }
`


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
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
    font-weight: 100;
    color: #28282A;
    justify-self: flex-start;
    line-height: 1.2em;
    padding-top: 14vh;
    margin-bottom: 5vh;

    @media (max-width: 1024px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 414px) {
        font-size: 5.5vw
    }
`
