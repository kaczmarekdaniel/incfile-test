import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/comparison-chart/about";
import BusinessStructure from "../../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
//Texts
import { top, about, rocket, businessStructure } from "../../static/learning-center-entity/comparison-chart";

const ComparisonChart = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-entity-comparison-chart" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <About content={about} />
    <BusinessStructure content={businessStructure} />
    <Rocket content={rocket} />
  </Layout>
);

export default ComparisonChart;
