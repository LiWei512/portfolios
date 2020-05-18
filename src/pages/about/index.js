import React from "react";
import { Layout, SEO } from "components";
import LifeTimeline from "./Sections/LifeTimeline";
import Testimonials from "./Sections/Testimonials";
import AboutMe from "./Sections/AboutMe";
import Bio from "./Sections/Bio";
import Summary from "./Sections/Summary";
import Skills from "./Sections/Skills";

const AboutPage = ({ data }) => {
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

export default AboutPage;
