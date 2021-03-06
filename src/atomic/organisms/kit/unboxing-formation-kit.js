import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/top-image-box";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Frame from "../../molecules/mixed-blocks/unboxing-frame";
import Image from "../../atoms/image/image_nobase64";
import IconCircle from "../../../components/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import AccordionSingle from "../accordion/accordion-single";
import Whitebox from "../../atoms/boxes/white-box";
import Line1SVG from "../../../images/icons/line1.inline.svg";
import Line2SVG from "../../../images/icons/line2.inline.svg";
import Line3SVG from "../../../images/icons/line3.inline.svg";
import Line4SVG from "../../../images/icons/line4.inline.svg";
import Line5SVG from "../../../images/icons/line5.inline.svg";
import Line6SVG from "../../../images/icons/line6.inline.svg";
import Line7SVG from "../../../images/icons/line7.inline.svg";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 32px 0 64px;

  @media (min-width: 992px) {
    padding: 32px 0 148px;
  }

  .gatsby-image-wrapper {
    display: none;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;

    @media (min-width: 992px) {
      display: block;
    }
  }

  .frame {
    &:nth-child(2) {
      top: 0;
      left: 0;
    }
    &:nth-child(3) {
      top: 0;
      left: 300px;
    }
    &:nth-child(4) {
      top: 0;
      left: 600px;
    }
    &:nth-child(5) {
      top: 0;
      left: 900px;
    }
    &:nth-child(6) {
      bottom: 0;
      left: 150px;
    }
    &:nth-child(7) {
      bottom: 0;
      left: 450px;
    }
    &:nth-child(8) {
      bottom: 0;
      left: 750px;
    }
  }
`;

const FramesBoxTop = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8px;
  margin-bottom: 8px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 0;
  }

  h4 {
    text-align: center;
  }

  & > div {
    margin-top: auto;
  }
`;

const FramesBoxBottom = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8px;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  h4 {
    text-align: center;
  }

  & > div {
    margin-bottom: auto;
  }
`;

const New = styled(Whitebox)`
  width: 100%;
  position: relative;

  button,
  .text {
    padding: 16px 16px 16px 64px;
  }

  button {
    width: 100%;
    text-align: left;
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  .arrow {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  span {
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${color.white};
    transform: translateY(100%);
    box-shadow: ${shadow.white1};

    p {
      color: ${color.grey1};
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const Icons = [Line1SVG, Line2SVG, Line3SVG, Line4SVG, Line5SVG, Line6SVG, Line7SVG];

const UnboxingFormationKit = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      <FramesBoxTop>
        {content.top.map((box, i) => (
          <AccordionSingle content={box} />
        ))}
      </FramesBoxTop>
      <Image filename="testing" />
      <FramesBoxBottom>
        {content.bottom.map((box, i) => (
          <AccordionSingle content={box} />
        ))}
      </FramesBoxBottom>
    </Wrapper>
  );
};

export default UnboxingFormationKit;
