import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/teen-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-orange-4.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container>
            <Service>
                <TextCenterLayout headline="Business Ideas for Teens, Kids and Students"
                                  text="There are several different types of teen businesses that you can start. Here are some of the more popular options:"/>

                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {typeBusiness.items.map(item => (
                        <Adventages
                            style={{textAlign: "center"}}
                            url={item.url}
                            urlText={item.urlText}
                            circleText={item.circleText}
                            headline={item.headline}
                            text={item.text}
                            circlePosition="center"
                            circleBackgroundColor={color.blue1}
                            circleBackgroundShadow={shadow.blue1}
                            imageName={item.imageName}
                        />
                    ))}
                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={7}
                        title="Other teen business ideas include:"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="online-shop-icon"
                    >
                        <Paragraph mixed={true}>
                            This is perhaps the biggest sector of all, and you have plenty of choices when it comes to
                            being a successful ecommerce entrepreneur:

                            <ul style={{paddingLeft: "15px", paddingTop: "15px"}}>
                                <li style={{paddingBottom: "15px"}}>
                                    Dog walking
                                </li>

                                <li style={{paddingBottom: "15px"}}>Garage sales</li>

                                <li style={{paddingBottom: "15px"}}>Selling food and drinks
                                </li>

                                <li style={{paddingBottom: "15px"}}>Clothing or jewelry design
                                </li>

                                <li style={{paddingBottom: "15px"}}>Pet grooming
                                </li>
                                <li>Washing cars</li>
                            </ul>
                        </Paragraph>
                    </AdventagesWithLongText>
                </AdventagesBox>
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.blue3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  margin: 140px auto 0;
  position: relative;
 
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
`;

export default TypeBusiness;