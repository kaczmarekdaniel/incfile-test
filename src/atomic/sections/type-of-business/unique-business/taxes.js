import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color, gradient} from "../../../atoms/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/unique-business";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Maintaining Your Unique Business"
                              text="There are certain forms and legalities you need to follow to keep your unique business in good standing."/>

            <Container>
                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map(item => (
                        <Adventages className="containerMargin" style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
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
    background-image: ${gradient.babyblue3};
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
`;

const TextWrapper = styled.div`
    width: 100%;
    position: relative;
    
    @media (min-width: 750px) {
        width: 750px;
        margin: 48px auto 100px;
    }
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

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 291px;
    width: 100%;
    
    svg{
        transform: scaleY(-1);
    }
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
    
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
