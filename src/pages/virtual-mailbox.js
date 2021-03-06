import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import Button from "../atomic/molecules/buttons/button";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import VirtualMailbox from "../atomic/sections/learning-center-entity/virtual-mailboxes/welcome-incfile-virtual-address";
import AdvantagesSection from "../atomic/sections/learning-center-entity/virtual-mailboxes/advantages-virtual-addresses";

import {top, mailboxes, advantages, availability, moreInfo} from "../static/learning-center-entity/virtual-mailboxes";
import ServiceAvailableSection from "../atomic/sections/learning-center-entity/virtual-mailboxes/virtual-service-available-states";
import VirtualMailboxesMoreInfo from "../atomic/sections/learning-center-entity/virtual-mailboxes/more-information";

import CCTVIcon from "../images/icons/complete-mail-scanning-of-all-correspondence.inline.svg";
import WWWAccess from "../images/icons/worldwide-access-with-web.inline.svg";
import Security from "../images/icons/security-and-encryption.inline.svg";
import Notification from "../images/icons/email-notification.inline.svg";
import Mobile from "../images/icons/mobile-compatibility.inline.svg";

import {Heading} from "../atomic/atoms/typography/heading";
import {Paragraph} from "../atomic/atoms/typography/paragraph";
import TextBlockWithImage from "../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import ContentCenter from "../atomic/partials/content-center";

import CurveSVG from "../images/curves/top-right-babyblue1.inline.svg";
import {color} from "../atomic/atoms/styles/colors";
import Curve from "../atomic/atoms/icons/curve";

import OvalSVG from "../images/ovals/top-left-transparent-reverse-big-red3.inline.svg";
import OvalSVG2 from "../images/ovals/bottom-right-transparent-babyblue1-small.inline.svg";

import Oval from "../atomic/atoms/icons/oval";



const VirtualMailBoxes = () => (
    <Layout>
        <SEO title="Virtual Mailbox & Virtual Address Service | Mail Scanning" description="Enjoy the benefits of mail scanning and a virtual mailbox wherever you are with Incfile’s Virtual Address service. Learn more. " />
        <Top imageName="mr-contact-new-sales-9845" imageAlt="Mrs Bulb New Sales" ovalColor="blue" headlineWidth="500" textWidth="800">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <VirtualMailbox content={mailboxes} />
        <AdvantagesSection content={advantages} />
        <ServiceAvailableSection content={availability} />
        <VirtualMailboxesMoreInfo content={moreInfo} />

        <InnerSection>
            <Oval className="oval" height="720" width="720" top="0" left="0">
                <OvalSVG />
            </Oval>

            <ContentCenter contentWidth={968}>
                <StepsGridContainer>
                    <TextBlockWithImage SvgImage={CCTVIcon}
                                        imageBackgroundColor={moreInfo.items[0].backgroundColor}
                                        imageShadowColor={moreInfo.items[0].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4}>
                            {moreInfo.items[0].header}
                        </Heading>
                        <Paragraph>
                            {moreInfo.items[0].text}
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={WWWAccess}
                                        imageBackgroundColor={moreInfo.items[1].backgroundColor}
                                        imageShadowColor={moreInfo.items[1].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Curve top="-29" right="-29" color={color.babyblue1}>
                            <CurveSVG />
                        </Curve>
                        <Heading size={4}>
                            {moreInfo.items[1].header}
                        </Heading>
                        <Paragraph>
                            {moreInfo.items[1].text}
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Security}
                                        imageBackgroundColor={moreInfo.items[2].backgroundColor}
                                        imageShadowColor={moreInfo.items[2].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4}>
                            {moreInfo.items[2].header}
                        </Heading>
                        <Paragraph>
                            {moreInfo.items[2].text}
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Notification}
                                        imageBackgroundColor={moreInfo.items[3].backgroundColor}
                                        imageShadowColor={moreInfo.items[3].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4}>
                            {moreInfo.items[3].header}
                        </Heading>
                        <Paragraph>
                            {moreInfo.items[3].text}
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={Mobile}
                                        imageBackgroundColor={moreInfo.items[4].backgroundColor}
                                        imageShadowColor={moreInfo.items[4].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4}>
                            {moreInfo.items[4].header}
                        </Heading>
                        <Paragraph>
                            {moreInfo.items[4].text}
                        </Paragraph>
                    </TextBlockWithImage>
                </StepsGridContainer>
            </ContentCenter>

            <Oval className="oval small" height="136" width="136" bottom="3.9" right="0">
                <OvalSVG2 />
            </Oval>
        </InnerSection>
    </Layout>
);

const StepsGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px 30px;
    align-items: center;

    @media screen and (max-width: 769px) {
        display: block;
    }

    @media screen and (min-width: 850px) {
        grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
    }

    & > div {
        padding: 72px 40px 40px;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;
        height: 100%;

        @media screen and (min-width: 769px) {
            padding: 72px 40px 40px;
            width: 470px;

            &:nth-child(even) {
                grid-column: 2;
            }
        }
        
        @media screen and (max-width: 769px) {
            margin-top: 70px;
        }
    }
`;

const InnerSection = styled.div`
    position: relative;
    margin-bottom: 100px;
    
    .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
`;

export default VirtualMailBoxes;