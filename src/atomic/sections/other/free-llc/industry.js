import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import CenterGrid from "../../../partials/center-grid";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import RatingRow from "../../../atoms/boxes/rating-row";
import CartBlock from "../../../molecules/blocks/cart-block";
import RatingBlock from "../../../molecules/blocks/rating-block";

const Industry = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
`;

const IndustrySection = ({ className, content }) => (
  <Industry className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="700" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <Paragraph bottomMargin="64">{content.text}</Paragraph>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
      <Paragraph topMargin="64">{content.text2}</Paragraph>
    </ContentCenter>
  </Industry>
);

export default IndustrySection;
