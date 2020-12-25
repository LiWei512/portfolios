import React from "react";
import { Layout, SEO } from "components";
import LifeTimeline from "./Sections/LifeTimeline";
import AboutMe from "./Sections/AboutMe";
import Summary from "./Sections/Summary";
import Skills from "./Sections/Skills";

const AboutPage = ({ data }) => {
  return (
    <Layout isHeader={false}>
      <SEO title="WeiLi" />
      <AboutMe />
      <Summary />
      <Skills />
      <LifeTimeline />
    </Layout>
  );
};

export default AboutPage;
