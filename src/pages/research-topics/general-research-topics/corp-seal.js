import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../../atomic/molecules/buttons/button";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/general-research-topics/corp-seal";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Benefits from "../../../components/partials/sections/benefits";
import Articles from "../../../components/partials/sections/articles";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../../static/learning-center-entity/help-center-article";
import { about, related } from "../../../static/research-topics/general-research-topics/corp-seal";

const HelpCenter = () => (
  <Layout>
    <SEO title="What is a Corporate Seal or Company Seal? | Incfile" description="Learn about corporate and company seals and stamps, when you might need one, what they’re used for and more." />
    <Top imageName="mrs-bulb-help-center-article" imageAlt="Mss Bulb answering question about company seals" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Searchbar />
    </Top>
    <About content={about} />
    <Related content={related} />
    <Categories content={categories} />
    <Service content={service} />
    <Tools content={tools} />
    <Rocket content={rocket} />
  </Layout>
);

export default HelpCenter;