import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/food-truck-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Food Truck Entrepreneurs"
                              text="Here are some useful places where you can connect with other food truck entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/foodtrucks/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        Reddit — Food Trucks subreddit
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/EntrepreneurRideAlong/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        Reddit — Entrepreneur Ride Along
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://roadfood.com/forums/" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Road Food Forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://streetvendorforum.com/" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Street Vendor Forums
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
    position: relative;
`;

const LinksContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    bottom: 38px;
    left: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;


export default ToolsAndLinks;
