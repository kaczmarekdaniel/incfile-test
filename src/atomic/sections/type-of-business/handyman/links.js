import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {toolsList} from "../../../../static/type-of-business/handyman";
import UsefulTools from "../../../partials/useful-tools";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import OvalSvg from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const Links = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <OvalBottom>
            <OvalSvg2 />
        </OvalBottom>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Your Handyman Business"
                              text="Here are some useful places where you can connect with other handyman entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    <PathLink to="https://www.contractortalk.com/forum.php" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Contractor Talk forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.diychatroom.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        DIY Chatroom and home improvement forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.construct-ed.com/contractor-forums/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        CONSTRUCT-ED contractor forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://forums.jlconline.com/forums/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Journal of Light Construction forums
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <Container>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    position: relative;
    background: linear-gradient(180deg, #fef6ed 0%, #ffffff 100%);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1100px) {
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
    position: relative;
    
    @media (min-width: 1100px) {
        margin-left: 15px;
        margin-right: 15px;
        width: 470px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    left: -115px;
    top: -115px;;
    transform: rotate(-90deg);
    
    svg{
        path {
            fill: #fce7d0;
        }
    }
    
    @media (max-width: 970px) {
        display: none;
    }
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100%;
    
    @media (min-width: 420px) {
        width: 420px;
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 879px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

export default Links;