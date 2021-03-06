import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//sections
import Top from "../atomic/partials/top";
import TypesOfTaxes from "../atomic/sections/manage-your-company/filling-business-taxes/types-of-taxes";
import TaxReturn from "../atomic/sections/manage-your-company/filling-business-taxes/tax-return";
import Pricing from "../atomic/sections/manage-your-company/filling-business-taxes/pricing";
import Benefits from "../atomic/sections/manage-your-company/filling-business-taxes/benefits";
import Articles from "../components/partials/sections/articles";
//texts
import { top, typesOfTaxes, taxReturn, pricing, benefits } from "../static/filling-business-taxes";

const FillingBusinessTaxes = () => (
  <Layout>
    <SEO title="Filing Your Business Taxes With Ease" description="Eliminate the hassle of filing taxes for your LLC, S Corp, C Corp or Nonprofit. Work with a tax professional." />
    <Top imageName="mrs-bulb-filling-taxes" imageAlt="mr. bulb filling tax form" ovalColor="sun">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <TypesOfTaxes content={typesOfTaxes} />
    <TaxReturn content={taxReturn} />
    <Pricing content={pricing} />
    <Benefits content={benefits} />
    <Articles />
  </Layout>
);

export default FillingBusinessTaxes;
