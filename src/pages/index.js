import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import LifeTimeline from "../components/Sections/LifeTimeline";
import Testimonials from "../components/Sections/Testimonials";
import AboutMe from "../components/Sections/AboutMe";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="BorysLee" />
      <AboutMe />
      <LifeTimeline />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage;