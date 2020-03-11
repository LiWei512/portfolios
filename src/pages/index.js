import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LifeTimeline from "../components/Sections/LifeTimeline"
import Testimonials from "../components/Sections/Testimonials"
import AboutMe from "../components/Sections/AboutMe"
import Bio from "../components/Sections/Bio"
import Summary from "../components/Sections/Summary"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="BorysLee" />
      <AboutMe />
      <Summary />
      <Testimonials />
      <LifeTimeline />
      <Bio />
    </Layout>
  )
}

export default IndexPage
