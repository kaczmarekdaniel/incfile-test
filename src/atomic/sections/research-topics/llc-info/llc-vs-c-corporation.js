import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/no-pass-sign.inline.svg";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Path from "../../../molecules/blocks/research-topics-path";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      <Heading size={3} bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text3}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text4}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text5}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text6}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text7}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text8}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text9}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text10}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text11}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text12}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text13}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text14}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
