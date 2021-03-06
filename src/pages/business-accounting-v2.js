import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//sections
import Top from "../atomic/partials/top";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//texts
import { top, accounting, bookkeeping, cards, cards2, ins_and_outs, tax_consulting } from "../static/business-accounting-v2";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import AccountingAndTaxes from "../atomic/sections/business-accounting/accounting-and-taxes";
import AccountingAndBookkeepingService from "../atomic/sections/business-accounting/accounting-and-bookkeeping-service";
import AllPackagesInclude from "../atomic/sections/business-accounting/packages-include";
import BusinessAccountingBenefitsSection from "../atomic/sections/business-accounting/benefits-section";
import InsAndOuts from "../atomic/sections/business-accounting/ins-and-outs";
import FreeTaxConsulting from "../atomic/sections/business-accounting/free-tax-consulting";

const BusinessAccountingV2 = () => (
  <Layout>
    <SEO title="Filing Your Business Taxes With Ease" description="Eliminate the hassle of filing taxes for your LLC, S Corp, C Corp or Nonprofit. Work with a tax professional." />
    <Top imageName="main-header-illustration-business-startup-guides-4593" imageAlt="Business startup guides" ovalColor="sun" contentWidth={700} headlineWidth={700} textWidth={700}>
      <Heading size={1} maxWidth={700}>
        {top.header}
      </Heading>
      <Paragraph big maxWidth={700}>
        {top.text}
      </Paragraph>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <AccountingAndTaxes content={accounting} />
    <AccountingAndBookkeepingService content={bookkeeping} />
    <AllPackagesInclude content={cards} />
    <BusinessAccountingBenefitsSection content={cards2} />
    <InsAndOuts content={ins_and_outs} />
    <FreeTaxConsulting content={tax_consulting} />
  </Layout>
);

export default BusinessAccountingV2;
