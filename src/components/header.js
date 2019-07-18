import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../utilities"

const HeaderOuter = styled.header`
  /* background: #ff4800; */
  background: ${colors.primary};
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 4rem 1rem;
  display: flex;
`

const SiteTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 2rem;
`

const SiteNav = styled.nav`
  /* flex-grow: 1; */
  margin-left: auto;
  margin-right: -1rem;
  text-align: right;

  ul {
    display: flex;

    li {
      padding: 1rem;
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
