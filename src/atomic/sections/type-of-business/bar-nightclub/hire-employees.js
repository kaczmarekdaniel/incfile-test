import React from "react";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import {Link} from "gatsby";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout
                headline="Hiring Employees for your Bar, Nightclub, Pub or Other Drinking Establishment"
                headlineWidth={770}/>

            <Paragraph big>
                Since you won’t be able to run your bar or club solo, you will need to hire employees.
                Additionally, because bar and server wages are typically very low and supplemented with tips,
                expect to have a fairly high staff turnover. This could mean you spend a lot of time
                interviewing and hiring. See our <Link to="/">10 tips on hiring employees</Link>.
            </Paragraph>
            <Paragraph big>
                Your bartenders will be mixing and pouring drinks, which means their speed, efficiency and pour
                accuracy will all have a direct impact on your profitability. For that reason, it's vital to
                train your bartenders well. Be aware that both over-pouring and theft can be fairly common in
                the bar and club industry, so try to hire people you know you can trust.
            </Paragraph>
        </ContentCenter>

        <ContentCenter>
            <ImageBoxes>
                <TopImageBox image="will-filing-a-change-of-agent-reqiure-me-to-sign-any-documents"
                             color={color.purple3}>
                    <h4>Report employees as "new hires"</h4>
                    <p>
                        In most cases, you will need to report the hiring
                        of employees to your state.
                    </p>
                </TopImageBox>

                <TopImageBox image="seting-up-monthly-payroll-01" color={color.yellow3}>
                    <h4>Pay employees</h4>
                    <p>
                        On a raff and workers typically receive a low hourly wage which is supplemented by tips from
                        patrons.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-yellow" color={color.yellow3}>
                    <h4>Get worker's compensation insurance in place</h4>
                    <p>
                        As listed above, you will need to make sure you have proper worker compensation insurance to
                        cover injuries, illness, medical costs and the like.
                    </p>
                </TopImageBox>

                <TopImageBox image="ongoing-filling-requirements-02" color={color.babyblue3}>
                    <h4>Make sure your employees can work in the U.S</h4>
                    <p>
                        Your employees must be legally able to work here. Carry out background checks and ensure
                        they have any necessary legal documentation.
                    </p>
                </TopImageBox>

                <TopImageBox image="tax-id" color={color.red3}>
                    <h4>Get an Employer Identification Number (EIN)</h4>
                    <p>
                        Contact the IRS and let them know you will need an EIN for your bar business. This is a
                        number you will use to file and pay your taxes. We put together this <Link to="/">guide to
                        getting your
                        EIN</Link>.
                    </p>
                </TopImageBox>

                <TopImageBox image="additional-accounting-fees" color={color.red3}>
                    <h4>Make sure your employees can work in the U.S</h4>
                    <p>
                        You will need to calculate and keep back income tax so you can pay the appropriate bodies.
                        You will also need to pay the employer portion of the payroll tax.
                    </p>
                </TopImageBox>

                <TopImageBox image="using-your-knowledge" color={color.orange3}>
                    <h4>Learn about legal requirements and responsibilities to employees</h4>
                    <p>
                        You do have certain responsibilities and requirements for hiring employees. In addition to
                        getting a proper employment contract in place with them, you have
                        a duty to provide them with a safe working environment, proper training, regular pay and
                        certain other criteria. <Link to="/">OSHA</Link> covers your health and safety requirements,
                        while the <Link to="/">U.S.
                        Department</Link> of Labor provides information on other responsibilities.
                    </p>
                </TopImageBox>
            </ImageBoxes>

        </ContentCenter>

    </BlueContainer>
);

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 970px;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const BlueContainer = styled.div` 
    padding-top: 100px;
    position: relative;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

const Oval = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 527px;
    opacity: 0.5;
  
  @media (min-width: 570px){
    width: 570px;
  }
`;

export default HireEmployees;
