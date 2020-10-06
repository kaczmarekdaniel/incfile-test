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
import parse from "html-react-parser"

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
      <Heading size={4} bottomMargin="48">
        {content.header}
      </Heading>
      <Heading size={3} bottomMargin="32">
        {content.header2}
      </Heading>
      <Heading size={4} bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text)}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header5}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text3}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text4}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text5}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header6}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text6}
      </Paragraph>
      <IconListColorBox content={content.list} color={color.orange3} curve curveColor={color.purple2} rounded bottomMargin="48" />
      <Heading size={4} bottomMargin="24">
        {content.header7}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text7}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text8}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text9}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header8}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text10}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header9}
      </Heading>
      {content.links2.map(link => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
