import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/photograpy-business";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";

const ToolsAndLinks = () => (
    <Wrapper>

        <LinksWrapper>
            <Container>
                <TextCenterLayout headline="Social Media Groups for Your Photography Business"
                                  text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

                <LinksContainer>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Shoot and Share
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            "Our purpose as a community is to share our gifts, focus on service and celebrate new
                            photographers! Join us, ask questions and learn from the community!”
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photoshop and Lightroom
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            A group for those interested in sharing their photos, Photoshop and Lightroom tips and
                            questions
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photographer Entrepreneur
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            The purpose of this group is to bring together like minded people that are in the
                            photography industry that would like to run, build and sustain a successful profitable
                            photography business.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The Art of the Second Shot
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            This group is focused on helping photographers create stunning imagery by utilizing the
                            surroundings to tell the client's story in the most creative way possible.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photo Marketing Association International Forum
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            We help photographers reach their professional and artistic goals, increase consumer
                            awareness and help position photography as an art, science and visual recorder of history.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Professional Photographers of America
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            We help photographers reach their professional and artistic goals, increase consumer
                            awareness and help position photography as an art, science and visual recorder of history.
                        </Paragraph>
                    </LinkItem>

                </LinksContainer>

                <TextCenterLayout headline="Discussion Groups and Forums for Your Photography Business" />

                <LinksContainer>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The Photo Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photography Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photo.net Forum
                        </PathLink>
                    </LinkItem>

                </LinksContainer>
            </Container>
        </LinksWrapper>

        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
`;

const LinksWrapper = styled.div`
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1000px) {
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
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export default ToolsAndLinks;
