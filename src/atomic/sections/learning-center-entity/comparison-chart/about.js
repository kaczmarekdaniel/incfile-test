import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/enterprenour.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ImageContent image="annual-reports">
            <Heading size={3} bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;