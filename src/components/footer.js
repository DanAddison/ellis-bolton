import React from "react"
import styled from "styled-components"
import { breakpoints } from "../utilities"

const FooterWrapper = styled.footer`
  background: #222;
  margin-bottom: 1.45rem;
  color: white;
  display: block;

  @media (min-width: ${breakpoints.sidenav}) {
    display: none;
  }
`
const Footline = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 2rem 1rem 1rem;
  text-align: center;

  p {
    margin-bottom: 1em;
  }

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    justify-content: space-between;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Footline>
      <p>© {new Date().getFullYear()} Ellis Bolton</p>
      <p>
        Website: <a href="https://danaddisoncreative.com">Dan Addison</a>
      </p>
    </Footline>
  </FooterWrapper>
)

export default Footer
