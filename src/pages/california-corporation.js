import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/state-information-california/about";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Requirements from "../../atomic/sections/learning-center-entity/state-information-california/requirements";
import LearnMore from "../../atomic/sections/learning-center-entity/state-information-california/learn-more";
import QuickLinks from "../../atomic/sections/learning-center-entity/state-information-california/quick-links";
import Variants from "../../atomic/sections/learning-center-entity/state-information-california/variants";
import Subscription from "../../atomic/sections/learning-center-entity/state-information-california/subscription";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, launchBusiness, requirements, learnMore, quickLinks, variants, subscription } from "../../static/learning-center-entity/state-information-california";

const StateInformation = () => (
  <Layout>
    <SEO title="California Corporations & Other Business Entities " description="Thinking of starting an S Corp, C Corp, or LLC in California? Learn about corporations in CA and decide which business type is right for you." />
    <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Rocket content={launchBusiness} />
    <Requirements content={requirements} />
    <LearnMore content={learnMore} />
    <QuickLinks content={quickLinks} />
    <Variants content={variants} />
    <Subscription content={subscription} />
    <Articles />
  </Layout>
);

export default StateInformation;
