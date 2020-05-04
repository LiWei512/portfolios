import React from "react";
import { Layout, SEO } from "components";
import LifeTimeline from "components/Sections/LifeTimeline";
import Testimonials from "components/Sections/Testimonials";
import AboutMe from "components/Sections/AboutMe";
import Bio from "components/Sections/Bio";
import Summary from "components/Sections/Summary";
import Skills from "components/Sections/Skills";

const IndexPage = ({ data }) => {
  return (
    <Layout isHeader={false}>
      <SEO title="WeiLi" />
      <AboutMe />
      <Summary />
      <Skills />
      {/* <Testimonials /> */}
      <LifeTimeline />
      <Bio />
    </Layout>
  );
};

export default IndexPage;
