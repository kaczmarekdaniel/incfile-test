import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import TextCenterLayout from "../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import ContentObject from "../atomic/partials/left-content-right-object";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import { shadow } from "../components/styles/shadows";
import Container from "../components/container";
import IDCardSVG from "../images/icons/idcard.inline.svg";
import Accordion from "../components/accordion";
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import ArrowLink from "../components/arrow-link";
import H2Text from "../atomic/molecules/text-blocks/h2-text";
import H3Text from "../atomic/molecules/text-blocks/h3-text";
import { top, reducingTax, llcsTax, howSaveMoney, taxCalculator, fairSalary, administrativeOverhead, fileForm, behalfFile, help, faq, overhead } from "../static/llc-s-corp-election"
import NumericBoxedList from "../atomic/organisms/lists/numeric-boxed-list";
import CircleCheckmarkText from "../atomic/molecules/static-check/circle-checkmark-text";
import TopImageBox from "../components/top-image-box";
import ContentCenter from "../atomic/partials/content-center";

const ReducingTax = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  h3,
  p {
    max-width: 100%;
    padding-bottom: 24px;
  }

  h3 {
    &.pt32 {
      padding-top: 32px;
    }

    &.pt48 {
      padding-top: 48px;
    }
  }

  p {
    &.pb32 {
      padding-bottom: 32px;
    }

    &.pb40 {
      padding-bottom: 40px;
    }

    &.pb72 {
      padding-bottom: 72px;
    }
  }

  .colorbox {
    margin-bottom: 48px;
  }
`;

const LLCsTax = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const Example = styled.section`
  height: 1000px;
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-image: ${gradient.orange3};
`;

const FairlSalary = styled.section`
  height: 500px;
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;


const Overhead = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-image: ${gradient.blue3};

  .bottom-text {
    max-width: 570px;
    color: ${color.grey1};
    text-align: center;
  }
`;

const OverheadBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
`;

const FileForm = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const BehalfFile = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 120px;

  h2 {
    padding-bottom: 72px;
  }

  .card {
    margin: 56px 0 48px;    
  }
`;

const Help = styled.section`
  position: relative;
  padding-top: 88px;
  padding-bottom: 64px;

  &::before {
    content: '';
    height: 1188px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: ${gradient.green3};
  }

  .header-1 {
    padding-bottom: 56px;
  }

  .header-2 {
    padding-top: 72px;
  }

  h3 {
    padding-bottom: 24px;
  }

  p {
    padding-bottom: 48px;
  }
`;

const List = <NumericBoxedList content={llcsTax.list}/>;
const NoImpact = <CircleCheckmarkText isRed content={llcsTax.red}/>;

const CorpElection = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-taxes" imageAlt="Mrs Bulb checking forms on notebook">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <ReducingTax>
      <ImageContent image="cash-register" paddingTop="60">
        <H3Text content={reducingTax} />
        <Button content={reducingTax.button[0]} theme="secondary56" arrow margin="48px auto 0 0" />
      </ImageContent>
    </ReducingTax>
    <LLCsTax>
      <ContentObject contentWidth="400" headlineWidth="450" object={[List, NoImpact]}>
        <H2Text content={llcsTax} />
      </ContentObject>
    </LLCsTax>
    <Example>

    </Example>
    <FairlSalary>

    </FairlSalary>
    <Overhead>
      <TextCenterLayout headline={overhead.header} text={overhead.text}/>
      <ContentCenter>
        <OverheadBoxes>
          <TopImageBox image="envelope-dollar" color={color.yellow3}>
              <h4>Setting up monthly payroll</h4>
              <p>
                You will need to set up a monthly payroll where you pay yourself and submit your payroll taxes
              </p>
          </TopImageBox>
          <TopImageBox image="calculator-coin" color={color.red3}>
              <h4>Additional accounting fees</h4>
              <p>
                Your accountant will need to file your taxes in a slightly different way, which may increase your accounting fees
              </p>
          </TopImageBox>     
        </OverheadBoxes>
        <p className="bottom-text">This will likely be more than counterbalanced by the money you save in tax payments.</p>
      </ContentCenter>
    </Overhead>
    <FileForm>
      <TextCenterLayout headline={fileForm.header} text={fileForm.text}/>
      <ContentCenter contentWidth="770">
        <NumericBoxedList content={fileForm.list} />
      </ContentCenter>
    </FileForm>
    <BehalfFile>
      <TextCenterLayout headline={behalfFile.header} text={behalfFile.text}/>
      <ContentCenter contentWidth="470">
        <TopImageBox className="card" image="24-hours" color={color.orange3} noShadow>
            <h4>{behalfFile.header2}</h4>
            <p>
              {behalfFile.text2}
              <a href="#"> {behalfFile.link} </a>
              {behalfFile.text3}
              <a href="#"> {behalfFile.link2} </a>
              {behalfFile.text4}
            </p>
        </TopImageBox>
        <Button theme="secondary56" content={behalfFile.button} arrow />
      </ContentCenter>
    </BehalfFile>
    <Help>
      <TextCenterLayout className="header-1" headline={help.header}/>
      <ContentCenter contentWidth="770">
        <H3Text content={help.saveYourTime} />
        <Button theme="primary56" content={help.button} margin="0 auto" arrow />
      </ContentCenter>
      <TextCenterLayout className="header-2" headline={help.header2} headlineWidth="750"/>
      <ContentCenter contentWidth="770">
        <Accordion faq={faq} />
      </ContentCenter>
    </Help>
    <Benefits />
    <Articles />
  </Layout>
);

export default CorpElection;
