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
            <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve curveColor={color.yellow1}/>
            <Paragraph big bottomMargin="72">{content.text2}</Paragraph>
            <Heading size={3} bottomMargin="24">{content.header2}</Heading>
            <Paragraph big bottomMargin="72">{content.text3}</Paragraph>
            <Heading size={3} bottomMargin="40">{content.header3}</Heading>
            <IconListColorBox color={color.yellow3} content={content.box2} bottomMargin="48" rounded/>
            <Paragraph big bottomMargin="72">{content.text4}</Paragraph>
            <Heading size={3} bottomMargin="24">{content.header4}</Heading>
            <Paragraph big bottomMargin="48">{content.text5}</Paragraph>
            <Heading size={3} bottomMargin="24">{content.header5}</Heading>
            <Paragraph big bottomMargin="40">{content.text6}</Paragraph>
            <IconListColorBox color={color.orange3} content={content.box3} bottomMargin="56" rounded/>
            <Heading size={3} bottomMargin="24">{content.header6}</Heading>
            <Paragraph big bottomMargin="48">{content.text7}</Paragraph>
            <Heading size={3} bottomMargin="24">{content.header7}</Heading>
            <Paragraph big bottomMargin="40">{content.text8}</Paragraph>
            <IconListColorBox color={color.green3} content={content.box4} bottomMargin="72" rounded/>
            <Heading size={3} bottomMargin="24">{content.header8}</Heading>
            <Paragraph big bottomMargin="40">{content.text9}</Paragraph>
            <IconListColorBox color={color.babyblue3} content={content.box5} bottomMargin="48" rounded/>
            <Paragraph big bottomMargin="0">{content.text10}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;