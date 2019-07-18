import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background: #222;
  margin-bottom: 1.45rem;
  color: white;
`
const Footline = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 4rem 1rem;
  h1 {
    margin: 0;
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
