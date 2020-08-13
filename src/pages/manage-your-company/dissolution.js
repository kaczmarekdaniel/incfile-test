import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/dissolution/about";
import Requirements from "../../atomic/sections/manage-your-company/dissolution/requirements";
import Faq from "../../atomic/sections/manage-your-company/dissolution/faq";
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, requirements, faq } from "../../static/manage-your-company/dissolution";

const Dissolution = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-dissolution" imageAlt="Mrs Bulb holding a closed sign" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order now
        </Button>
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Requirements content={requirements} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default Dissolution;
