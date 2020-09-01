import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import TalkIcon from "../../../../images/icons/talk-to-clients.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import InvolvedIcon from "../../../../images/icons/get-involved-with-business-communities.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-left";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
    margin-top: 110px;
`;

const TitleBox = styled.div`
    width: 100%;
    position: relative;
     
    @media (min-width:750px) {
        width: 750px;
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: left;
        margin-bottom: 24px;
    }
`;

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 120px auto 0;
    }
`;

const TextBorderedSection = styled.div`
    width: 100%;
    padding-top: 100px;
    
    @media (min-width: 670px) {
        width: 670px;
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: center;
        margin-bottom: 24px;
    }
`;

const TextBorderedList = styled.div`
    margin-top: 80px;
    
    >div {
        margin-bottom: 8px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const Expecting = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <TextCenterLayout headline="Understanding the World of the Photography Business" />
                    <Paragraph big>
                        Photography is a very specialized skill; it requires people with both a keen eye and
                        an understanding of composition, editing, framing and more to create stunning images. Add to that
                        the need to manage others well plus a solid understanding
                        of business principles...you'll see that freelance photographers need to be well-rounded
                        individuals.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        There are dozens of different niches you can choose to pursue as a photographer.
                    </Paragraph>

                    <Paragraph big>
                        If you can make your name in one of them, your reputation will carry you a long way. Here are some
                        areas to consider when choosing the type of photographer you want to be.
                    </Paragraph>
                    <Paragraph big>
                        When you’re deciding which route to follow, look at local competition, your skillset, demand for
                        these services in your area and any other local factors likely to impact the amount of photography
                        business you can win.
                    </Paragraph>
                    <Paragraph big>
                        The most popular types of photography in descending order are: portrait, fine arts, events, wedding,
                        advertising, photojournalism, nature, marketing, products and architecture.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            There will always be too much to do and too little money
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to balance time, effort, money and outcomes on a constant basis.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            The biggest issue you will have
                            is cash flow
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You will need to minimize and strictly control costs. You must manage your finances on a
                            daily basis and quickly build up a financial buffer.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            There is lots (and lots) of competition
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Some of them will have money, some of them won’t. Competition is a fact of life and shows
                            there’s
                            a demand for what you’re offering.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            There are plenty of people out there who can help
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            And they don’t all cost money! Although you can pay for professional help, taking part in
                            online discussion groups, meetups and networking events can often get you some good advice
                            for free.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Getting your idea and product or service fit right is essential
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Although you won’t be risking as much financially, you should always spend at least as long
                            researching and validating your idea as you do on setting up your business.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Grow organically
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Without the cash for big marketing efforts or customer pushes, you should grow organically
                            and sustainably instead.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Learn from your mistakes
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You'll make plenty of them; just make sure they’re not irreversible.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Expect to be stressed and anxious
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A lack of money is stressful. Until you see sustainable success, expect some sleepless
                            nights.
                        </Paragraph>
                    </TextBlockWithImage>
                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default Expecting;
