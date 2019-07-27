import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../utilities"

const HeaderOuter = styled.header`
  /* background: #ff4800; */
  background: ${colors.primary};
  position: fixed;
  width: 100%;
  z-index: 100;

  @media (min-width: ${breakpoints.sidenav}) {
    width: ${breakpoints.sidenavWidth};
    height: 100vh;
  }
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 1rem;
  display: flex;
  height: 100%;

  @media (min-width: ${breakpoints.sidenav}) {
    flex-direction: column;
    padding: 2rem;
  }
`

const SiteTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 1.25rem;

  @media (min-width: ${breakpoints.sidenav}) {
    font-size: 2rem;
  }
`

const SiteNav = styled.nav`
  margin-left: auto;
  text-align: right;
  margin-right: -1rem;
  font-size: 1.25rem;

  ul {
    display: flex;

    li {
      padding: 0 1em;

      a:hover {
        background-color: #f6ae2d;
      }
    }
  }

  @media (min-width: ${breakpoints.sidenav}) {
    margin-left: 0;
    text-align: left;
    margin-top: 2em;

    ul {
      display: block;

      li {
        padding: 0.5em 0;

        a {
          padding-right: 1rem;
        }
      }
    }
  }
`

const Credits = styled.div`
  display: none;

  @media (min-width: ${breakpoints.sidenav}) {
    display: block;
    margin-top: auto;

    p {
      margin-bottom: 1em;
    }
  }
`

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderOuter>
    <HeaderInner>
      <SiteTitle>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
      <SiteNav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </SiteNav>
      <Credits>
        <p>© {new Date().getFullYear()} Ellis Bolton</p>
        <p>
          Website: <a href="https://danaddisoncreative.com">Dan Addison</a>
        </p>
      </Credits>
    </HeaderInner>
  </HeaderOuter>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
