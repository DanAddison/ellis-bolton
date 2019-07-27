/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme/globalStyle"
import styled from "styled-components"
import { breakpoints } from "../utilities"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 4rem 1rem 2rem;
  min-height: calc(100vh - 16em);

  @media (min-width: ${breakpoints.sidenav}) {
    margin-left: ${breakpoints.sidenavWidth};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
