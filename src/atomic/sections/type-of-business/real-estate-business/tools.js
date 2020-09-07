import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/real-estate-business";
import {Heading} from "../../../atoms/typography/heading";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>

        <LinksWrapper>
            <Oval>
                <OvalSvg/>
            </Oval>

            <Oval2>
                <OvalSvg/>
            </Oval2>


            <Container>
                <TextCenterLayout headline="Social Media Groups for Real Estate Agents & Investors"
                                  text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups for real estate businesses:"/>

                <LinksContainer>
                    <Heading size={3} style={{margin: "0 auto 50px", textAlign: "center"}}>Facebook</Heading>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Agents Online - Real Estate Forums
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Raise the Bar on Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Lab Coat Agents — The Science of Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Success Principles
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            National Association of Realtors Facebook Group
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

                <LinksContainer>
                    <Heading size={3} style={{margin: "0 auto 50px", textAlign: "center"}}>Linkedin</Heading>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Social Media for Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Open Networkers
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Professionals Group
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

            </Container>

            <Container>
                <TextCenterLayout headline="Discussion Groups and Forums for Your Real Estate Business"
                                  text="There are plenty of forums and online discussion groups for real estate businesses. Start with these:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Bigger Pockets Real Estate Agent Forums
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Investing Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Agents Online Real Estate Ideas Center
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Local Real Estate Forums
                        </PathLink>
                    </LinkItem>
                </LinksContainer>

            </Container>

            <Container>
                <TextCenterLayout headline="Conferences for Real Estate Investors"
                                  text="Of course, there are also regular conferences for real estate businesses:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Council of Residential Specialists
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            National Association of Realtors Conference
                            and Expo
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            More Real Estate Conventions and Conferences
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Single Family Rental Investment Forum
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

            </Container>
        </LinksWrapper>

        <ToolsWrapper>
            <Oval3>
                <OvalSvg2 />
            </Oval3>
            <Container>
                <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                             description={toolsList.description}/>
            </Container>
        </ToolsWrapper>
    </Wrapper>
);

const Wrapper = styled.div`
    margin-bottom: 200px;
    position: relative;
`;

const ToolsWrapper = styled.div`
    position: relative;
`;

const LinksWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    position: relative;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.00) 4%, #F2F6FF 99%);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    margin-bottom: 30px;
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 80px;
    width 570px;
    display: none;
  
    @media (min-width: 1200px) {
       display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - 210px);
    width 420px;
    transform: scaleX(-1);
    display: none;
  
    @media (min-width: 1200px) {
       display: block;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width 720px;
    display: none;
  
    @media (min-width: 1200px) {
       display: block;
    }
`;

export default ToolsAndLinks;
