import React from "react"
import styled from "styled-components"
import { Tabs, Panel, useTabState } from "@bumaga/tabs"
// import { motion } from "framer-motion"
import Container from "../../container"
import ArrowLink from "../../molecules/buttons/text"
import SpaceshipSVG from "../../../images/icons/space-ship.inline.svg"
import PlaneSVG from "../../../images/icons/plane.inline.svg"
import RocketSVG from "../../../images/icons/rocket.inline.svg"
import FlowerSVG from "../../../images/icons/heart-flower.inline.svg"
import ArrowSVG from "../../../images/arrow.inline.svg"
import { Collapse } from "react-collapse"
import { color } from "../../atoms/styles/colors";
import IconSVG from "../../../images/icons/generally-arrow.inline.svg"
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import VisibilitySensor from "../../../components/VisibilitySensor"
import { Heading } from "../../atoms/typography/heading"
import { Paragraph } from "../../atoms/typography/paragraph"

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
`

const Button = styled.button`
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

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

const icons = [<SpaceshipSVG />, <PlaneSVG />, <RocketSVG />, <FlowerSVG />]

const CCorpTabs = ({layout, columns, content}) => (
    <Container>
        <Wrapper layout={layout}>
            <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
                <Tabs>
                <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
                    <Sticky layout={layout} columns={columns}>
                      {content.panels.map((panel, i) => (
                        <Tab>
                          <Icon>
                            {icons[i]}
                          </Icon>
                          <Content>
                          <span>{panel}</span>
                          <Arrow className="tabArrow">
                              <ArrowSVG />
                          </Arrow>
                          </Content>
                        </Tab>
                      ))}
                    </Sticky>
                </TabsWrapper>
                {/* <Panels> */}
                <Collapse isOpened={true}>
                    <Panel>
                      <PanelWrapper
                        className={
                        isVisible ? "slideUp enter panel1" : "slideUp panel1"
                        }
                        layout={layout}
                      >
                        <Heading size="3">{content.content[0].header}</Heading>
                        <Paragraph big bottomMargin="48">{content.content[0].text}</Paragraph>
                        <Heading size="3">{content.content[0].header2}</Heading>
                        <Paragraph big>{content.content[0].text2}</Paragraph>
                        <Paragraph big>{content.content[0].text3}</Paragraph>
                        <Paragraph big bottomMargin="56">{content.content[0].text4}</Paragraph>
                        <ArrowLink content={content.content[0].link} />
                      </PanelWrapper>
                    </Panel>
                    <Panel>
                      <PanelWrapper className="panel2" layout={layout}>
                        <Heading size="3">{content.content[1].header}</Heading>
                        <Paragraph big>{content.content[1].text}</Paragraph>
                        <Paragraph big>{content.content[1].text2}</Paragraph>
                        <Paragraph big bottomMargin="56">{content.content[1].text3}</Paragraph>
                        <ArrowLink content={content.content[1].link} />
                      </PanelWrapper>
                    </Panel>
                    <Panel>
                      <PanelWrapper className="panel2" layout={layout}>
                        <Heading size="3">{content.content[2].header}</Heading>
                        <Paragraph big>{content.content[2].text}</Paragraph>
                        <Paragraph big bottomMargin="56">{content.content[2].text2}</Paragraph>
                        <ArrowLink content={content.content[2].link} />
                      </PanelWrapper>
                    </Panel>
                    <Panel>
                      <PanelWrapper className="panel2" layout={layout}>
                        <Heading size="3">{content.content[3].header}</Heading>
                        <Paragraph big>{content.content[3].text}</Paragraph>
                        <Paragraph big bottomMargin="56">{content.content[3].text2}</Paragraph>
                        <ArrowLink content={content.content[3].link} />
                      </PanelWrapper>
                    </Panel>
                </Collapse>
                {/* </Panels> */}
                </Tabs>
            )}
            </VisibilitySensor>
        </Wrapper>
    </Container>
)
export default CCorpTabs
