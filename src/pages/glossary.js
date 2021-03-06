import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import {glossary, top} from "../static/glossary";
//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import LegalSections from "../atomic/sections/legal-disclaimer/legal-sections";
import GlossaryFAQSection from "../atomic/sections/glossary/faq";

const CompareStateTimes = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top content={top} ovalTop={23} />
        <GlossaryFAQSection content={glossary} />
    </Layout>
);

export default CompareStateTimes;