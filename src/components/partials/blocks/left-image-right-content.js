import React from "react";
import styled from "styled-components";
import Container from "../../container";
import Image from "../../image_nobase64";

const Wrapper = styled.div`
  position: relative;
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : "0")}px;

  @media(min-width: 768px) {
    padding-left: 100px;
  }

  h2, h3 {
    text-align: left;
    max-width: 410px;
    padding-bottom: 40px;
  }

  & > p {
    padding-bottom: 40px;
  }
`;

const Sticky = styled.div`
    display: block;
    width: 100%;

    .gatsby-image-wrapper {
        position: sticky !important;
        top: 100px;
    }
`;

const Imagebox = styled.div`
  display: none;
  width: 100%;
  max-width: 400px;
  position: relative;

  @media(min-width: 768px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 100%;
  }
`;

const Certificates = ({ children, image, paddingTop }) => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Imagebox>
            <Sticky>
                <Image filename={image} />
            </Sticky>
          </Imagebox>
          <Content paddingTop={paddingTop}>
            {children}
          </Content>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Certificates;
