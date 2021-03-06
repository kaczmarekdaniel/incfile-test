import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue3.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

const Get = styled.div`
  padding-top: 104px;
  padding-bottom: 104px;
  position: relative;

  h3 {
    max-width: 770px;
  }
`;

const GetSection = ({ className, content }) => (
  <Get className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" top="15" left="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="570" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <Paragraph big bottomMargin="24">
        {content.text}
      </Paragraph>
      <Heading size="3" bottomMargin="64">
        {content.header2}
      </Heading>
    </ContentCenter>
    <ContentCenter contentWidth="970">
      <NumericList content={content.list} bottomMargin="0" />
    </ContentCenter>
  </Get>
);

export default GetSection;
