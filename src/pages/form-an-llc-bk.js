import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Perks from "../atomic/sections/other/form-an-llc/perks";
import Trust from "../atomic/sections/other/form-an-llc/trust";
import Steps from "../atomic/sections/other/form-an-llc/steps";
import Differences from "../atomic/sections/other/form-an-llc/differences";
import Variants from "../atomic/sections/other/form-an-llc/variants";
import Articles from "../atomic/sections/articles";
//Texts
import { top, perks, trust, steps, differences, variants } from "../static/other/form-an-llc";

const FormAnLLC = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-form-an-llc-8929" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="550">
      <h1>{top.header}</h1>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Perks content={perks} />
    <Trust content={trust} />
    <Steps content={steps} />
    <Differences content={differences} />
    <Variants content={variants} />
    <Articles />
  </Layout>
);

export default FormAnLLC;
