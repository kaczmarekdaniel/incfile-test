import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/certificate-of-good-standing/about"
import Help from "../../atomic/sections/manage-your-company/certificate-of-good-standing/help"
import Faq from "../../atomic/sections/manage-your-company/certificate-of-good-standing/faq"
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/certificate-of-good-standing"

const CertificateOfGoodStanding = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-buildings" imageAlt="Mr Bulb in front of registration office" ovalColor="blue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default CertificateOfGoodStanding;
