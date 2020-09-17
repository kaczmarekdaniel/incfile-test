import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color, gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/event-planning";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-left-transparent-red3.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Party or Event Planners"
                              text="Here are some useful places where you can connect with other party or event planning entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/1189572621083821/?ref=br_rs" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Facebook — Event Planners Club
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/5570471382/?ref=br_rs" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Facebook — Event Planners Forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://classic.party411.com/cgi-bin/yabb/YaBB.cgi?board=professionals" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Party411 Party Planning Forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/eventplannersgather/?ref=br_rs" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Facebook — Event Planners Gather
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/eventplannerssociety/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Facebook — Event Planning Blueprint:
                        Community Forum For Event Planners
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
        
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    margin-bottom: 200px;
    position: relative;
    background-image: ${gradient.orange3};
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1100px) {
        width: 1000px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    margin-bottom: 30px;
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1100px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    bottom: 501px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px; 
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: 800px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px; 
    }
`;

export default ToolsAndLinks;