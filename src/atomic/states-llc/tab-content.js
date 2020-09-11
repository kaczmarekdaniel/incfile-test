import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

// Components
import ArrowLink from "../../components/arrow-link"
import ContentButton from "../molecules/buttons/button";
import HowToGuideSVG from "../../images/icons/states/how-to-guide.inline.svg"
import BusinessNamesSVG from "../../images/icons/states/naming-your-business.inline.svg"
import RASVG from "../../images/icons/states/registered-agent.inline.svg"
import FilingFeeSVG from "../../images/icons/states/filing-fees-requirements.inline.svg"
import BusinessTaxesSVG from "../../images/icons/states/business-taxes.inline.svg"
import FaqSVG from "../../images/icons/states/faq.inline.svg"
import WhatDoNextSVG from "../../images/icons/states/what-to-do-after.inline.svg"
import ArrowSVG from "../../images/arrow.inline.svg"
import { color } from "../../components/styles/colors"
import IconListColorBox from "../molecules/text-blocks/icon-h4-list-color"
import AcccordionCounting from '../organisms/accordion/accordion-with-counting'
import NumericBoxedList from '../organisms/lists/numeric-boxed-list'
import { Heading } from "../atoms/typography/heading"
import { Paragraph } from "../atoms/typography/paragraph"

import VisibilitySensor from "../VisibilitySensor"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${props => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${props => (props.layout !== "grid" ? "40%" : "")};
  }

  @media (min-width: 1200px) {
    max-width: ${props => (props.layout !== "grid" ? "370px" : "")};
  }

  a{
    height: 78px;
    line-height: 78px;
    color: #4e4e4e;
    background: #fff;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 20px 30px 0 #e6e6e6;
    display: flex;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 7px;
    border: none;
    z-index: 0;

    &.active {
      box-shadow: 0 40px 80px 0 #e6e6e6;
      font-weight: 600;
      z-index: 1;

      .tabArrow {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`

const Sticky = styled.div`
  display: ${props => (props.layout === "grid" ? "grid" : "flex")};
  flex-direction: ${props => (props.layout !== "grid" ? "column" : "")};
  grid-template-columns: ${props => (props.columns ? `repeat(${props.columns}, 1fr)` : "")};
  grid-gap: ${props => (props.layout === "grid" ? "30px" : "")};
  position: ${props => (props.layout !== "grid" ? "sticky" : "")};
  top: 100px; 
`

const PanelWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;

  p {
    margin-bottom: 35px;

    &:nth-child(3) {
      margin-bottom: 24px;
    }
  }

  h3 {
    margin-bottom: 48px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 50px;
  opacity: 0.75;

  @media (min-width: 992px) {
    width: 80px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 24px;
  border-left: 1px solid #f4f4f4;

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 13px;
    white-space: nowrap;

    @media (min-width: 769px) {
      font-size: 16px;
    }
  }

  .tabArrow {
    opacity: 0;
    transform: translateX(-3px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    svg {
      path {
        fill: #1d1d1d;
      }
    }
  }

  &:hover {
    .tabArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`

const icons = [<HowToGuideSVG />, <BusinessNamesSVG />, <RASVG />, <FilingFeeSVG />, <BusinessTaxesSVG />, <FaqSVG />, <WhatDoNextSVG />]

const TabContent = ({layout, columns, content}) => (
  <Wrapper layout={layout}>
    <TabsWrapper layout={layout}>
      <Sticky layout={layout} columns={columns}>
        {content.tabs.map((page, i) => (
          <Link to={page.path} className={window.location.pathname === page.path ? 'active' : ''}>
            <Icon> {icons[i]} </Icon>
            <Content>
              <span>{page.name}</span>
              <Arrow className="tabArrow">
                <ArrowSVG />
              </Arrow>
            </Content>
          </Link>
        ))}
      </Sticky>
    </TabsWrapper>

    <PanelWrapper layout={layout}>
      bbbbb
    </PanelWrapper>
  </Wrapper>
)
export default TabContent;
