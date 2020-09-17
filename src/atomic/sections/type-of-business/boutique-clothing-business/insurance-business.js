import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/boutique-clothing-business";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../partials/heading-center";

const InsuranceBusiness = () => (
    <Wrapper>
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Boutique Clothing Business"
                headlineWidth={770}
                textWidth={770}
                text="Most boutique clothing businesses should have comprehensive business insurance. There are various types."
            />
        </div>
        <InfoCardsSection cards={InfoCards}/>
    </Wrapper>
);

const Wrapper = styled.section`
    background: rgb(255,255,255);
    background: ${gradient.blue3};
    padding-top: 100px;
    position: relative;
`;

export default InsuranceBusiness;