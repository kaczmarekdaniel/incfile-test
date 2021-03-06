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
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/shapes/curve";
import {gradient} from "../../../atoms/styles/colors";

const ContainerWrapper = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.orange3};
    padding-bottom: 100px;
    position: relative;
    padding-top: 120px;
`;


const GridSection = styled.div`
    width: 100%;
`;

const TitleBox = styled.div`
    width: 100%;
    position: relative;
    max-width: 750px;
    
    @media (min-width:750px) {
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
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 70px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  top: 282px;
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`

const OvalCenter2 = styled.div`
  position: absolute;
  right: 0;
  bottom: 286px;
  transform: rotate(180deg);
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const ValidatingBusinessIdea = () => (
    <ContainerWrapper>
        <OvalCenter>
            <OvalSvg/>
        </OvalCenter>
        <OvalCenter2>
            <OvalSvg/>
        </OvalCenter2>

        <Container>

            <GridSection>
                <TitleBox>
                    <AbsoluteCurve>
                        <Curve color={color.orange1}/>
                    </AbsoluteCurve>
                    <Heading size={3}>Validating Your Online Business Idea</Heading>
                    <Paragraph big>
                        These areas are just starting points — there are hundreds of different types of online
                        businesses. Once you’ve identified the areas you’d like to go into, you need to validate your
                        online business idea.
                    </Paragraph>
                    <Paragraph big>
                        Start by checking you have the right skillset. For example, if you’re going into freelancing, do
                        you have a marketable skill you can sell? If you want to be an ecommerce entrepreneur, do you
                        understand all about product marketing, profit margins, working with suppliers and getting
                        customers?
                    </Paragraph>
                    <Paragraph big style={{fontFamily: "Avenir-Heavy", color: color.black}}>
                        Don’t assume that just because it’s online, it’s easy.
                    </Paragraph>
                    <Paragraph big>
                        Every online business will have dozens or hundreds of competitors, and you need
                        to stand out, deliver superior products and services, and excel in your chosen area.
                    </Paragraph>
                    <Paragraph big>
                        Getting started in an online business is easy, but becoming a success is harder. Before
                        committing too much time, energy and money into your new internet business, it’s important to
                        test the marketplace.
                    </Paragraph>
                    <Paragraph big>
                        The thing to learn here is that it’s okay to say “no” to your first, second or third online
                        business ideas. Very few entrepreneurs get it right first time. In fact, getting it wrong is
                        often a badge of honor in the online world! Still, you don’t want to waste too much time, energy
                        or money on the wrong initiatives, so ask and answer these questions honestly to find the right
                        way forward.
                    </Paragraph>

                </TitleBox>

                <GridSectionList>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={IdetifyIcon} imageBackgroundColor={color.green2}
                                        imageShadowColor={color.green2}>
                        <Heading size={4}>
                            Identify your online business’s unique selling points (USPs)
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Whether you’re competing on features, price, quality, speed or something else, your USPs set you apart from competitors and encourage customers to come to you.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={LookIcon} imageBackgroundColor={color.babyblue2}
                                        imageShadowColor={color.babyblue2}>
                        <Heading size={4}>
                            Look at who your competitors are in the space
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Having competitors is a good thing as it shows there’s a market, but if there are too many, you’re likely to struggle without a really good USP.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={TalkIcon} imageBackgroundColor={color.purple2}
                                        imageShadowColor={color.purple2}>
                        <Heading size={4}>
                            Talk to clients
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Speak with potential customers to understand what they want from your products and services, and validate this by asking if they would commit to spending real money on them.
                        </Paragraph>
                    </TextBlockWithImage>

                    <TextBlockWithImage width={100} widthUnit="%" SvgImage={InvolvedIcon} imageBackgroundColor={color.orange2}
                                        imageShadowColor={color.orange2}>
                        <Heading size={4}>
                            Get involved with business communities and discussion groups
                        </Heading>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            One of the great things about online business is that there are thousands of great communities and discussion groups. Get involved in them and learn the ins and outs of your chosen market before committing.
                        </Paragraph>
                    </TextBlockWithImage>

                </GridSectionList>
            </GridSection>

        </Container>
    </ContainerWrapper>
);

export default ValidatingBusinessIdea;
