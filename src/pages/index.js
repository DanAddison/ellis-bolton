import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mushrooms from "../components/mushrooms"

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Mushrooms />
  </Layout>
)

export default IndexPage
