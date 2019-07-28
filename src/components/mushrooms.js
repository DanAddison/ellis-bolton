import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Mushrooms = () => (
  <StaticQuery
    query={graphql`
      query {
        mushroomImages: allFile(
          filter: { sourceInstanceName: { eq: "mushrooms" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox mushroomImages={data.mushroomImages.edges} />}
  />
)
export default Mushrooms
