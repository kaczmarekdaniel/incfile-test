import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
// import { motion } from "framer-motion"
import Container from "../../container";
import Tab1SVG from "../../../images/icons/llc-filing-requirements.inline.svg";
import Tab2SVG from "../../../images/icons/business-name-trademark.inline.svg";
import Tab3SVG from "../../../images/icons/finances-and-accounting.inline.svg";
import Tab4SVG from "../../../images/icons/set-up-business-operations.inline.svg";
import Tab5SVG from "../../../images/icons/choose-business-tools.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import VisibilitySensor from "../../../components/VisibilitySensor";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import { color } from "../../atoms/styles/colors";
import ToolsList from "../../organisms/lists/tools-list";
import Circle from "../../atoms/icons/circle";
import BusinessWebsiteSVG from "../../../images/icons/build-a-business-website.inline.svg";
import PhoneSystemSVG from "../../../images/icons/choose-virtual-phone-system.inline.svg";
import BusinessLogoSVG from "../../../images/icons/design-a-business-logo.inline.svg";
import GetBusinessSVG from "../../../images/icons/get-business-cards-created.inline.svg";
import Button from "../../molecules/buttons/button";
import Whitebox from "../../atoms/boxes/white-box";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${(props) => (props.layout !== "grid" ? "40%" : "")};
  }

  @media (min-width: 1200px) {
    max-width: ${(props) => (props.layout !== "grid" ? "370px" : "")};
  }
`;

const Sticky = styled.div`
  display: ${(props) => (props.layout === "grid" ? "grid" : "flex")};
  flex-direction: ${(props) => (props.layout !== "grid" ? "column" : "")};
  grid-template-columns: ${(props) => (props.columns ? `repeat(${props.columns}, 1fr)` : "")};
  grid-gap: ${(props) => (props.layout === "grid" ? "30px" : "")};
  position: ${(props) => (props.layout !== "grid" ? "sticky" : "")};
  top: 100px;
`;

const PanelWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 40px;

  @media (min-width: 769px) {
    padding-top: 0;
  }
`;

const TabButton = styled.button`
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
`;

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
`;

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
`;

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
`;

const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8px;
  margin-bottom: 56px;
`;

const Box = styled(Whitebox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 40px 24px 24px;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  div {
    p {
      color: ${color.black};
    }

    &:first-child {
      flex-grow: 1;
      min-width: 180px;
      padding-bottom: 16px;

      @media (min-width: 992px) {
        padding-bottom: 0;
        padding-right: 16px;
      }
    }

    &:last-child {
      max-width: 330px;
    }
  }
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <TabButton className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
      {children}
    </TabButton>
  );
};

const icons = [<Tab1SVG />, <Tab2SVG />, <Tab3SVG />, <Tab4SVG />, <Tab5SVG />];

const CCorpTabs = ({ layout, columns, content }) => (
  <Container>
    <Wrapper layout={layout}>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Tabs>
            <TabsWrapper className={isVisible ? "slideUp enter" : "slideUp"} layout={layout}>
              <Sticky layout={layout} columns={columns}>
                {content.panels.map((panel, i) => (
                  <Tab>
                    <Icon>{icons[i]}</Icon>
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
                <PanelWrapper className={isVisible ? "slideUp enter panel1" : "slideUp panel1"} layout={layout}>
                  <Paragraph big bottomMargin="48">
                    {content.content[0].text}
                  </Paragraph>
                  <Heading size="3">{content.content[0].header}</Heading>
                  <Paragraph big bottomMargin="0">
                    {content.content[0].text2}
                  </Paragraph>
                </PanelWrapper>
              </Panel>
              <Panel>
                <PanelWrapper className="panel2" layout={layout}>
                  <Heading size="3">{content.content[1].header}</Heading>
                  <Paragraph big>{content.content[1].text}</Paragraph>
                  <Paragraph big bottomMargin="40">
                    {content.content[1].text2}
                  </Paragraph>
                  <IconListColorBox color={color.green3} content={content.content[1].box} rounded />
                </PanelWrapper>
              </Panel>
              <Panel>
                <PanelWrapper className="panel3" layout={layout}>
                  <Heading size="3">{content.content[2].header}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[2].text}
                  </Paragraph>
                  <Heading size="4">{content.content[2].header2}</Heading>
                  <Paragraph big bottomMargin="40">
                    {content.content[2].text2}
                  </Paragraph>
                  <Button theme="primary56" content={content.content[2].button} arrow margin="0 0 80px" marginSM="0 auto 80px 0" />
                  <Heading size="3" bottomMargin="32">
                    {content.content[2].header3}
                  </Heading>
                  <BoxesWrapper>
                    {content.content[2].table.map((item) => (
                      <Box>
                        <div>
                          <Heading size="5" bottomMargin="0">
                            {item.header}
                          </Heading>
                        </div>
                        <div>
                          <Paragraph bottomMargin="0">{item.text}</Paragraph>
                        </div>
                      </Box>
                    ))}
                  </BoxesWrapper>
                  <Circle height="80" width="80" circleColor={color.babyblue2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[2].header4}</Heading>
                  <Paragraph big>{content.content[2].text3}</Paragraph>
                  <Circle height="80" width="80" circleColor={color.yellow2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[2].header5}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[2].text4}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.orange2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[2].header6}</Heading>
                  <Paragraph big>{content.content[2].text5}</Paragraph>
                  <Paragraph big>{content.content[2].text6}</Paragraph>
                  <Paragraph big>{content.content[2].text7}</Paragraph>
                  <Paragraph big>{content.content[2].text8}</Paragraph>
                  <Paragraph big>{content.content[2].text9}</Paragraph>
                  <Paragraph big bottomMargin="48">
                    {content.content[2].text10}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.purple2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[2].header7}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[2].text11}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.blue2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[2].header8}</Heading>
                  <Paragraph big bottomMargin="0">
                    {content.content[2].text12}
                  </Paragraph>
                </PanelWrapper>
              </Panel>
              <Panel>
                <PanelWrapper className="panel4" layout={layout}>
                  <Heading size="3" bottomMargin="40">
                    {content.content[3].header}
                  </Heading>
                  <Circle height="80" width="80" circleColor={color.orange2} bottomMargin="32">
                    <BusinessWebsiteSVG />
                  </Circle>
                  <Heading size="4">{content.content[3].header2}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[3].text}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.purple2} bottomMargin="32">
                    <PhoneSystemSVG />
                  </Circle>
                  <Heading size="4">{content.content[3].header3}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[3].text2}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.babyblue2} bottomMargin="32">
                    <BusinessLogoSVG />
                  </Circle>
                  <Heading size="4">{content.content[3].header4}</Heading>
                  <Paragraph big bottomMargin="48">
                    {content.content[3].text3}
                  </Paragraph>
                  <Circle height="80" width="80" circleColor={color.green2} bottomMargin="32">
                    <GetBusinessSVG />
                  </Circle>
                  <Heading size="4">{content.content[3].header5}</Heading>
                  <Paragraph big bottomMargin="0">
                    {content.content[3].text4}
                  </Paragraph>
                </PanelWrapper>
              </Panel>
              <Panel>
                <PanelWrapper className="panel4" layout={layout}>
                  <Heading size="3">{content.content[4].header}</Heading>
                  <Paragraph big bottomMargin="40">
                    {content.content[4].text}
                  </Paragraph>
                  <ToolsList tools={content.content[4].toolsList.tools} tab />
                </PanelWrapper>
              </Panel>
            </Collapse>
            {/* </Panels> */}
          </Tabs>
        )}
      </VisibilitySensor>
    </Wrapper>
  </Container>
);
export default CCorpTabs;
