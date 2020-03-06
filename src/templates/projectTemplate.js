import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Header from "../components/Header"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
        <Header
          links={["Home", "Contact"]}
        />
        <Wrapper>
            <SEO title={ frontmatter.title } />
            <Heading>{frontmatter.title}</Heading>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
            {/* TODO: CREATE GALLERY COMPONENT */}
            {/* TODO: Fetch images from a specific folder based on path */}
        </Wrapper>
    </Container>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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

    @media (max-width: 1024px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 414px) {
        font-size: 5.5vw
    }
`
