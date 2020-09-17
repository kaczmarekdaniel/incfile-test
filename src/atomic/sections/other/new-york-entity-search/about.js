import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="annual-report-due-date-tool-3234">
      <Heading size="3">{content.text}</Heading>
      <Paragraph big>{content.text}</Paragraph>
      <IconTextColorBox color={color.orange3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve curveColor={color.yellow1} />
      <Paragraph big>{content.text2}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
