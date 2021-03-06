import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

import ListWithDot from "../../states-llc/list-with-dot";
import { color } from "../../atoms/styles/colors";
import ArrowLink from "../../../components/arrow-link";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CurveSVG from "../../../images/orange-curve.inline.svg";
import VisibilitySensor from "../../../components/VisibilitySensor";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: ${(props) => (props.tab ? "" : "80px")};
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  @media (min-width: 769px) {
    ${(props) => (props.noAutoWidth ? "" : "width: auto;")}
    padding: ${(props) => (props.tab ? "" : "25px 29px 0")};
  }
`;

const Curve = styled.div`
  display: none;
  height: 25px;
  width: 25px;
  position: absolute;

  @media (min-width: 769px) {
    display: block;
    top: ${(props) => (!props.curveRightBottom && !props.curveLeftBottom ? "0" : "")};
    left: ${(props) => (props.curveLeft || props.curveLeftBottom ? "0" : "")};
    right: ${(props) => (props.curveRight || props.curveRightBottom ? "0" : "")};
    bottom: ${(props) => (props.curveRightBottom || props.curveLeftBottom ? "-25px" : "")};
    transform: ${(props) => (props.curveRight ? "rotate(90deg)" : props.curveRightBottom ? "scale(-1)" : props.curveLeftBottom ? "rotate(-90deg)" : "")};
  }

  svg {
    path {
      fill: ${(props) => (props.curveColor ? props.curveColor : "")};
    }
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.maxWidth ?? "770"}px;
`;

const TabBox = styled.div`
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  margin-bottom: 8px;

  .accordion-panel {
    overflow: hidden;
  }
`;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  z-index: 1;

  @media (min-width: 769px) {
    padding: 16px 40px 40px 80px;
  }

  h3 {
    margin-bottom: 48px;
  }

  p,
  li {
    color: ${color.grey1};
    font-family: Avenir, sans-serif;
    max-width: 650px;
    text-align: left;
  }

  p {
    font-size: 16px;
    line-height: 24px;

    a {
      color: ${color.orange1};
      font-size: inherit;
      line-height: inherit;
      text-decoration: none;
    }
  }

  li {
    font-size: 14px;
    line-height: 19px;

    a {
      font-size: inherit;
      line-height: inherit;
      color: ${color.orange1};
      text-decoration: none;
    }
  }

  ul {
    //list-style: none;
    padding-left: 16px;

    li {
      padding-top: 16px;
    }
  }
`;

const Button = styled.button`
  min-width: 80px;
  width: 100%;
  color: #4e4e4e;
  align-items: center;
  background: #fff;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  border: none;

  &.active {
    border-radius: 5px 5px 0 0;
    font-weight: 900;

    svg {
      transform: rotate(0deg);
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 16px 40px 16px 0;

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 16px;
    text-align: left;
    width: 100%;
    line-height: 24px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  opacity: 0.75;

  svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
      {children}
    </Button>
  );
};

const panel = {
  hidden: { height: 0 },
  visible: { height: "auto" },
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return (
    <motion.div className="accordion-panel" animate={isActive ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: 0.3 }} variants={panel}>
      {children}
    </motion.div>
  );
};

const Accordion = ({ content, curve, curveRight, curveRightBottom, curveLeft, curveLeftBottom, curveColor, tab, maxWidth, noAutoWidth, bottomMargin }) => {
  return (
    // <VisibilitySensor partialVisibility once>
    //   {({ isVisible }) => (
    <Wrapper
      //className={isVisible ? "slideUp enter" : "slideUp"}
      tab={tab}
      noAutoWidth={noAutoWidth}
      bottomMargin={bottomMargin}
    >
      {curve && (
        <Curve curveRight={curveRight} curveRightBottom={curveRightBottom} curveLeft={curveLeft} curveLeftBottom={curveLeftBottom} curveColor={curveColor}>
          <CurveSVG />
        </Curve>
      )}
      <Tabs>
        <TabsWrapper maxWidth={maxWidth}>
          {content.items.map((item) => (
            <TabBox>
              <Tab>
                <Icon>
                  <ArrowSVG />
                </Icon>
                <Content>
                  <span>{item.question}</span>
                </Content>
              </Tab>
              <Panel>
                <PanelWrapper>
                  {typeof item.answer === "string" ? (
                    <Paragraph bottomMargin="0" mixed>
                      {parse(item.answer)}
                    </Paragraph>
                  ) : null}
                  {typeof item.answer === "object" ? (
                    <Paragraph bottomMargin="0" mixed>
                      {item.answer.map((el) => (el.url ? <Link to={el.url}>{` ${parse(el.text)} `}</Link> : el.text))}
                    </Paragraph>
                  ) : null}

                  {item.list && (
                    <ul>
                      {item.list.map((listitem) => (
                        <li>{parse(listitem)}</li>
                      ))}
                    </ul>
                  )}

                  {typeof item.text === "string" ? (
                    <Paragraph topMargin="32" bottomMargin="0" mixed>
                      {parse(item.text)}
                    </Paragraph>
                  ) : null}
                  {typeof item.text === "object" ? (
                    <Paragraph topMargin="32" bottomMargin="0" mixed>
                      {item.text.map((el) => (el.url ? <Link to={el.url}>{` ${parse(el.text)} `}</Link> : el.text))}
                    </Paragraph>
                  ) : null}

                  {item.answer2 &&
                    item.answer2.map((e, i) => (
                      <div>
                        {e.type === "paragraph" && <Paragraph mixed={true}>{parse(e.content)}</Paragraph>}

                        {e.type === "arrow-links" &&
                          e.content.map((link) => (
                            <ArrowLink url={link.url} style={link.style}>
                              {link.text}
                            </ArrowLink>
                          ))}

                        {e.type === "list-dot-without-bg" && <ListWithDot color={e.color} content={e.content} />}

                        {e.type === "button" && <Button content={e.content} theme={e.theme} arrow width="350px" margin="16px 0 0 0" marginMD="42px 0 42px 0" />}
                      </div>
                    ))}

                  {item.arrowLink && (
                    <ArrowLink url={item.arrowLink.url} style={item.arrowLink.styles}>
                      {item.arrowLink.text}
                    </ArrowLink>
                  )}
                </PanelWrapper>
              </Panel>
            </TabBox>
          ))}
        </TabsWrapper>
      </Tabs>
    </Wrapper>
    //   )}
    // </VisibilitySensor>
  );
};

export default Accordion;

Accordion.propTypes = {
  bottomMargin: PropTypes.number,
};
