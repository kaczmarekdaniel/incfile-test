import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import {color} from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import {gradient} from "../../../atoms/styles/colors";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 770px;
  
  @media (min-width: 770px) {
    margin: 0 auto;
  }

  h4.title {
    font-size: 40px;
    padding-bottom: 56px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Wrapper = styled.section`
    position: relative;
    background: ${gradient.orange3};
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 222px;
  width: 100%;
  
  @media (min-width: 420px) {
    width: 420px;
  }
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 349px;
  transform: scaleX(-1);
  width: 100%;
  
  @media (min-width: 720px) {
    width: 720px;
  }
`

const BusinessPlan = () => (
    <Wrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <Container>
            <BusinessOwnerResponsibilities>
                <TextCenterLayout headline="Your Gym Needs a Business Plan" text="Gyms and other fitness businesses have lots of moving parts and administrative needs. If you want your business to be a success, you need a solid business plan." />
                <Paragraph big>
                    You will need to define how you’re going to run your gym, fitness or personal training business, market yourself, sign up members, collect fees, provide services, buy equipment, make a profit and grow. This can only come about through creating
                    a watertight business plan. It will help you get your thinking in order and show your commitment to your fitness or personal training business.
                </Paragraph>

                <Paragraph big style={{fontFamily: "Avenir-Heavy", color: color.black}}>
                    You will also need to look carefully at financial projections for your fitness business.
                </Paragraph>

                <Paragraph big>
                    What are your expected member counts, dues, sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?
                </Paragraph>
                <Paragraph big>
                    Business plans do vary slightly, but they should all cover the following areas:
                </Paragraph>

                <CountingTextBoxed number={1}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An executive summary with the most important points from your business plan
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={2}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Your goals and what you hope to achieve with your gym or personal training business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your fitness business, background information and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your gym, fitness or personal training business is structured
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={6}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Your business model
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={7}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        How you will market and sell your offerings
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={8}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Financial projections, revenue and profitability
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={9}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Appendices
                    </Paragraph>
                </CountingTextBoxed>

                <Paragraph big style={{marginTop: "50px"}} mixed={true}>
                    We’ve got the perfect <Link to="/">guide to writing your business plan.</Link>
                </Paragraph>
            </BusinessOwnerResponsibilities>
        </Container>
    </Wrapper>
);

export default BusinessPlan;
