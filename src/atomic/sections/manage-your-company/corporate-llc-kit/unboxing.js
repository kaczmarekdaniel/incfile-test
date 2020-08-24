import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import UboxingFormationKit from "../../../organisms/kit/unboxing-formation-kit"

const Unboxing = styled.section`
  position: relative;
  padding: 120px 0 64px;

  @media (min-width: 992px) {
      padding: 0 0 64px;
  }

  .heading {
      h2 {
          padding-bottom: 48px;
      }

      p {
          padding-bottom: 48px;
      }
  }
`;

const UnboxingSection = ({ className, content }) => (
    <Unboxing className={className}>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter>
            <UboxingFormationKit content={content.boxes} />
        </ContentCenter>
    </Unboxing>
  );
  
  export default UnboxingSection;