import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Album from '../components/album'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Album />
  </Layout>
)

export default IndexPage
