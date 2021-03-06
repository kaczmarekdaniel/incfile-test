import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/online-business";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>

        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 279px;
    width: 100%;
    
    @media (min-width: 720px){
        display: 720px;
    }
`;

const Oval2 = styled.div` 
    position: absolute;
    left: 0;
    bottom: 181px;
    width: 100%;
    transform: scaleY(-1);
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default ToolsAndLinks;
