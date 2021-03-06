import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import TabsSection from "../../atomic/partials/tabs";
import Colorbox from "../../components/color-box";
import DaycareIcon from "../../images/icons/daycare.inline.svg";
import MegafonIcon from "../../images/icons/we-want-to-help-you-get-your-daycare-business-of-the-ground.inline.svg";
import {color} from "../../components/styles/colors";
import TypeBusiness from "../../atomic/sections/type-of-business/daycare-business/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/daycare-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/daycare-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/daycare-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/daycare-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/daycare-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/daycare-business/regulations";
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/daycare-business/insurance-business";
import Taxes from "../../atomic/sections/type-of-business/daycare-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/daycare-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import Adventages from "../../components/adventages";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import TabsOvalTwoSvg from "../../images/ovals/bottom-right-transparent-green3.inline.svg";

const DaycareBusiness = () => (
    <Layout>
        <SEO title="How to Start a Daycare"
             description="Parents are increasingly having to work more jobs or longer hours to make ends meet — that means there’s never been a greater need for reliable daycare organizations that can take care of the little ones."/>

        <Top ovalColor="green" imageName="daycare-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Daycare</h1>
            <p>Parents are increasingly having to work more jobs or longer hours to make ends meet — that means there’s
                never been a greater need for reliable daycare organizations that can take care of the little ones.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabWrapper>
            <TabOvalOne>
                <TabsOvalTwoSvg/>
            </TabOvalOne>

            <TabsSection>
                <TabHeading>
                    <TabTitle title="Daycare" SvgIcon={DaycareIcon}/>
                    <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            If you have experience looking after children, then starting a daycare business could be a
                            great
                            idea.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "50px"}}>
                            You’ll need a combination of childcare experience, people management and administrative
                            skills.
                            The right daycare marketing and a solid business plan will give you a great launching pad to
                            appeal to parents.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={MegafonIcon} color={color.blue3} curve
                                  curveColor={color.blue1}>
                            <Heading size={4}>
                                We want to help you get your daycare business
                                off the ground.
                            </Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Since 2004, we’ve helped over 100,000 people to become entrepreneurs, starting exciting
                                businesses and bringing their ideas
                                to life. We’ll give you the support, guidance and advice you need
                                to create a daycare business and make it into a success.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "48px", marginBottom: "48px"}}>
                            From validating your childcare business and doing the research to filing your paperwork and
                            running your business, this guide will help you out. We’ll talk you through the main things
                            you
                            need to do to get your daycare business off of the ground.
                        </Paragraph>

                        <Paragraph big style={{fontFamily: "Avenir-Heavy", color: color.black}}>
                            Read on for some insight into creating your own childcare organization and becoming an
                            entrepreneur.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Start a New Construction Business
                        </Heading>
                        <Paragraph big>
                            You might wonder how successful construction businesses are - we’ve got the facts.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "80px"}}>
                            This is why construction businesses are so exciting — how can you be part of that success?
                            We're
                            here to help you figure that out.
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="900B"
                                                 text="How to choose whether your construction business should be an LLC or corporation"/>
                        <BlueBoxWithAbsoluteText absoluteText="$1.2T"
                                                 text="The U.S. has one of the largest construction markets in the world, with expenditures of over $1.2 trillion"/>
                        <BlueBoxWithAbsoluteText absoluteText="$1.4T"
                                                 text="Expected construction expenditures grow by 2021."/>

                        <CircleWithText style={{marginBottom: "48px"}} textInsideCircle="40" symbol="%"
                                        textLine="Of customers for daycare businesses come from households with incomes ranging between $40,000 and #100,000"
                                        withBg={true}/>

                        <Adventages
                            headline="The U.S. construction industry is responsible for over 4% of U.S. GDP"
                            width="100%"
                        />

                        <Adventages
                            headline="Currently, the majority of growth in the construction industry is in residential building"
                            width="100%"
                        />

                        <Adventages
                            headline="Public sector construction saw the slowest growth"
                            width="100%"
                        />
                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Is a Childcare Business Right for You?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Although it can be exciting to form a daycare business, there will
                            be significant demands on you as a small business owner. Here are some of the things you can
                            expect.
                        </Paragraph>

                        <Heading size={3}>
                            A Day in the Life of a Daycare Business Owner
                        </Heading>
                        <Paragraph big>
                            Here are some of the typical tasks you’ll be performing for your daycare business on a daily
                            basis:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Speaking with parents about their child's requirements
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Caring for children for five or six hours a day (or more)
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Managing diapering, feeding, napping and other requirements of young children
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Thinking of new activities and entertainment
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Buying supplies and equipment
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Dealing with minor issues
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Administering your business, including marketing and invoicing
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            Skills You Will Need to Open a Daycare Business
                        </Heading>
                        <Paragraph big>
                            The following skills will be very useful in your role as a daycare small business owner:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The right approach, patience and perspective to care for several children
                                    at a time
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    The ability to think up and carry out entertaining activities
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Understanding where every child is and what they are doing at all times
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Good interpersonal skills for dealing with the various needs of parents and their
                                    children
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Great administrative skills for managing cash flow and business operations
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Heading size={3}>
                            What Your Daycare Customers Are Looking For
                        </Heading>
                        <Paragraph big>
                            Your daycare customers are going to be parents who are juggling kids, work and other
                            responsibilities. They're looking for a daycare organization they can trust to provide safe,
                            affordable childcare to their children, while keeping them engaged and entertained. If you
                            can
                            meet those needs while managing the administration of your business, your daycare will
                            thrive.
                        </Paragraph>

                    </PanelWrapper>
                </CollapseWrapper>
            </TabsSection>
        </TabWrapper>

        <TypeBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <InsuranceBusinessSection/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Daycare Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                If you love kids and get along with their parents, then daycare entrepreneurship could be perfect for
                you. Find your niche, put together a business plan and perfect your marketing, and you’ll get on the
                road to success!
            </Paragraph>
        </Conclusion>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const TabWrapper = styled.div`
    margin-top: 120px;
  position: relative;
  @media (min-width: 992px){
      margin-top: 21px;
  }
`;

const TabOvalOne = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: 21px;
  
    @media (min-width: 420px){
       width: 420px;
    }
    
    svg {
        transform: scaleX(-1);
    }
`;

export default DaycareBusiness;
