import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Hi, I'm Ellis, an illustrator based in Folkestone.</p>
    <p>
      I'm always happy to discuss commisions and other opportunities - drop me a
      line!
    </p>
  </Layout>
)

export default SecondPage
