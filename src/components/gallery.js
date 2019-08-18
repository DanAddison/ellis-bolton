import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        galleryImages: allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const images = data.galleryImages.edges.map(image => (
        <Img
          fluid={image.node.childImageSharp.fluid}
          key={image.node.id}
          style={{
            maxWidth: 300,
          }}
        />
      ))
      return <GalleryWrapper>{images}</GalleryWrapper>
    }}
  />
)
export default Gallery
