import React from "react";
import {Tabs} from "@bumaga/tabs";
import styled from "styled-components";
import Container from "../../atomic/container";
import VisibilitySensor from "../../components/VisibilitySensor";
import PropTypes from "prop-types";

const TabsSection = ({layout, column, children, oval, ...rest}) => (
    <MainWrapper {...rest}>
        <Container>
            <Wrapper layout={layout}>
                <VisibilitySensor partialVisibility once>
                    {({isVisible, layout, column}) => (
                        <Tabs>
                            {React.Children.map(children, child => (
                                React.cloneElement(child, {
                                    isVisible: isVisible,
                                    layout: layout,
                                    column: column
                                })
                            ))}
                        </Tabs>
                    )}
                </VisibilitySensor>
            </Wrapper>
        </Container>
    </MainWrapper>
);

const MainWrapper = styled.div`
    padding-bottom: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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

TabsSection.propTypes = {
    layout: PropTypes.string
}

export default TabsSection;
