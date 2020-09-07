import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/unique-business";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 521px;
    display: none;
    transform: scaleX(-1);
    
    @media (min-width: 420px) {
        display: block;
    }
`;
export default ToolsAndLinks;
