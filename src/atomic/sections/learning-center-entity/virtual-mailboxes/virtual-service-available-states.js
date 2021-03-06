import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-blue3-transparent.inline.svg";
import LeftContentRightObject from "../../../partials/left-content-right-object";
import AmendmentForm from "../../../organisms/forms/virtual-mailboxes-form";

const AdvantagesSection = styled.section`
  position: relative;
  padding: 120px 0;
  background-color: ${color.blue3};
  overflow: hidden;
`;

const ServiceAvailableSection = ({ className, content }) => (
    <AdvantagesSection className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <LeftContentRightObject contentWidth={550} object={<AmendmentForm content={content.form}/>}>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
        </LeftContentRightObject>
    </AdvantagesSection>
);

export default ServiceAvailableSection;
