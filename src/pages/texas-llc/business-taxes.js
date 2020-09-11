import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import ContentHeader from '../../atomic/states-llc/taxes-header';
import { color } from '../../components/styles/colors';
import WrapperContent from '../../atomic/states-llc/wrapper-content';
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";

// Content
import { businessTaxesPageContent } from "../../static/states-llc/texas/business-taxes";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const TexasBusinessTaxes = () => (
  <Layout>
    <SEO
      title="Texas Business & Sales Taxes | Incfile.com"
      description="Do you have an Texas LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
    />

    <LinearBgHeader>
      <ContentHeader content={businessTaxesPageContent.header}/>
    </LinearBgHeader>

    <WrapperContent content={{ tabs: tabPages.pages, content: "" }} />
    
    <Rocket content={rocket} />

  </Layout>
);

export default TexasBusinessTaxes;