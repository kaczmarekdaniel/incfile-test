import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvgBottom from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/daycare-business";

const Taxes = () => (
    <Wrapper>

        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Daycare Business"
                              text="There are certain forms and legalities you need to follow to keep your daycare business in good standing."/>

            <Container>
                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map(item => (
                        <Adventages style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
                                    circleText={item.circleText} headline={item.headline} text={item.text}
                                    circlePosition="center" circleBackgroundColor={color.blue1}
                                    circleBackgroundShadow={shadow.blue1}/>
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </Wrapper>
);

const Wrapper = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%, #f2f6ff);
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  padding: 40px 0;
  margin: 0 auto;
  position: relative;
  
  @media (min-width: 1024px) {
    padding: 140px 0 0;
  }
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 273px;
    width: 100%;
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
    
    svg{
        path{
            fill: #d2e0fe;
        }
    }
    
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
