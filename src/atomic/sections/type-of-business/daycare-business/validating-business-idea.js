import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import OkIcon from "../../../../images/icons/ok.inline.svg";
import IdetifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg"
import LookIcon from "../../../../images/icons/look-at-who-your-competitors-are-in-the-space.inline.svg"
import MarketIcon from "../../../../images/icons/understand-your-market.inline.svg"
import {color} from "../../../../components/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalBlueSVG from "../../../../images/oval-blue-4.inline.svg";
import Curve from "../../../atoms/shapes/curve";

const BlueContainerWrapper = styled.div`
    background: rgb(255,255,255);
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

const ValidatingBusinessIdea = () => (
    <BlueContainerWrapper>
        <OvalCenter>
            <OvalBlueSVG/>
        </OvalCenter>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Daycare Business Idea</Heading>
                    <Paragraph big>
                        The areas we’ve listed above are just starting points — there are many different types of daycare businesses. Once you’ve identified specific daycare areas you might like
                        to go into, you need to validate your daycare business idea.
                    </Paragraph>
                    <Paragraph big style={{fontWeight: "bold"}}>
                        Remember too that every daycare business will have many competitors.
                    </Paragraph>
                    <Paragraph big>
                        You will need to stand out and offer superior childcare to excel as a daycare business owner.
                    </Paragraph>
                    <Paragraph big>
                        Not every idea you have will make it through to becoming a daycare business. There are all sorts of reasons to say “yes” or “no” to specific ideas and approaches — think about what your strengths and weaknesses are so you can choose a type of daycare business that you’d be great at.
                    </Paragraph>
                </TitleBox>

                <GridSectionList>
                    <TextBlockWithImage SvgImage={IdetifyIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Identify your daycare business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            You need to find something unique to offer parents. Whether it’s specialized entertainment and activities or customized childcare services, this is going
                            to be one of your main strengths.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={LookIcon} imageBackgroundColor={color.red2}
                                        imageShadowColor={color.red2}>
                        <Heading size={4}>
                            Look at who your childcare competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but if there are too many, you’re likely
                            to struggle without a really good unique selling point. Remember that daycare services are very local, so you will need to be located in the right area.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={MarketIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Understand your market
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Clearly identify exactly who your daycare customers are likely to be, where they hang out and how you’re going to reach them. This will be essential to your marketing and communications (especially word-of-mouth recommendations).
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage SvgImage={OkIcon} imageBackgroundColor={color.yellow2}
                                        imageShadowColor={color.yellow2}>
                        <Heading size={4}>
                            Talk to parents
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with parents to understand what they want from your childcare business. Validate your ideas and approach by asking if they would consider placing their child with you.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </BlueContainerWrapper>
);

export default ValidatingBusinessIdea;
