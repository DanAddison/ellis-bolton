import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"
import styled from "styled-components"

const Profile = styled.div`
  margin: 0 auto;
  max-width: 60em;
  margin-top: 2em;
`

const AboutPage = () => (
  <Layout>
    <Profile>
      <SEO title="About" />
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <ProfileImage />
      </div>
      <p>Hi, I'm Ellis, an illustrator based in Folkestone.</p>
      <p>
        I'm always happy to discuss commisions and other opportunities - drop me
        a line!
      </p>
    </Profile>
  </Layout>
)

export default AboutPage
