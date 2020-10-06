import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/business-license-req/about";
import SearchTool from "../../atomic/sections/learning-center-entity/business-license-req/search-tool";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, searchTool } from "../../static/learning-center-entity/business-license-req";

const BusinessLicenseReq = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-license-requirements" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="460" textWidth="480">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <SearchTool content={searchTool} />
    <Articles />
  </Layout>
);

export default BusinessLicenseReq;