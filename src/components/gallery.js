/**
 * this version of Gallery uses Rebass Flex and Box components
 * to create responsive flexbox-based grid of images
 * The problem is that I haven't yet figured out
 * how to implement my own theme.js to override teh Rebass breakpoints
 * so I can't dictate when the columns are added
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

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
        <Box p={10} width={[1, 1 / 2, 1 / 3]} key={image.node.id}>
          <Img
            fluid={image.node.childImageSharp.fluid}
            style={{
              maxWidth: 500,
            }}
          />
        </Box>
      ))
      return (
        <Flex flexWrap="wrap" my={4}>
          {images}
        </Flex>
      )
    }}
  />
)
export default Gallery
