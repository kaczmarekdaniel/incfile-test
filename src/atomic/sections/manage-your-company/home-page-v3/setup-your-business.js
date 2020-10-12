import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Container from "../../../container";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Image from "../../../atoms/image/image";
import ContentCenter from "../../../partials/content-center";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import PlayerSVG from "../../../../images/icons/player.inline.svg";
import Customers from "./customers";
import {gradient} from "../../../atoms/styles/colors";
import Oval from "../../../atoms/icons/oval";
import TopRightOvalSVG from "../../../../images/ovals/home-page-v3-setup-business-top-right.inline.svg"
import TopLeftOvalSVG from "../../../../images/ovals/home-page-v3-customers-top-left.inline.svg";

const Wrapper = styled.div`
  position: relative;
  background: ${gradient.orange3};
  
  .section-content {
     padding-top: 100px;
  }
  
  .oval {
    overflow: hidden;
  }
`;

const Anchor = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    width: ${props => props.width ?? 69}px;
    position: absolute;
    
    ${props => ("top: " + props.top + "px") ?? ""};
    ${props => ("left: " + props.left + "px") ?? ""};
    ${props => ("right: " + props.right + "px") ?? ""};
    ${props => ("bottom: " + props.bottom + "px") ?? ""};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${props => (props.contentWidth ? `${props.contentWidth}px` : "")};
  }

  h2 {
    text-align: left;
  }
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 56.23%;
  }

  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 6px;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${color.orange1};
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  cursor: pointer;

  span {
    display: block;
    height: 21px;
    width: 21px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const SetupYourBusiness = ({ className, content }) => (
    <Wrapper>
        <Oval className="oval" height="570" width="570" top="21" right="0">
            <TopRightOvalSVG />
        </Oval>
        <Oval className="oval" height="720" width="720" top="53" left="0">
            <TopLeftOvalSVG />
        </Oval>
        <ContentCenter contentWidth={1140} className="section-content">
            <Heading size={2} maxWidth={770}>{content.header}</Heading>
            <Paragraph big bottomMargin={52}>{content.text}</Paragraph>

            <Video>
                <Curve top="-115" left="-115" color={color.purple2}>
                    <CurveSVG />
                </Curve>
                <Image filename="comparison-chart-video-3611" />
                <PlayButton>
                      <span>
                        <PlayerSVG />
                      </span>
                </PlayButton>
            </Video>
        </ContentCenter>

        <Customers content={content.customers} />
    </Wrapper>
);

export default SetupYourBusiness;