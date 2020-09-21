import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/other/daleware-entity-search/about";
import Search from "../../atomic/sections/other/daleware-entity-search/search";
import Faq from "../../atomic/sections/other/daleware-entity-search/faq";
//Texts
import { top, about, search, faq } from "../../static/other/daleware-entity-search";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Daleware Entity Search" description="aaa" />
    <Top imageName="mrs-bulb-state-ilustrations-3893" imageAlt="Mrs Bulb and with checklist" ovalColor="green" headlineWidth="700" textWidth="520">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Search content={search} />
    <Faq content={faq} />
  </Layout>
);

export default GeneralResearchTopics;
