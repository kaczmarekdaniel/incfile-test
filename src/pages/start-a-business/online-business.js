import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import Tab1Icon from "../../images/icons/online-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import Colorbox from "../../components/color-box";
import MegafornIcon from "../../images/icons/megafon.inline.svg";
import {color} from "../../components/styles/colors";
import {Heading} from "../../atomic/atoms/typography/heading";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import TabsSection from "../../atomic/partials/tabs";
import TypeBusiness from "../../atomic/sections/type-of-business/online-business/type-business";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/online-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/online-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/online-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/online-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/online-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/online-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/online-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/online-business/tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import CircleWithText from "../../atomic/molecules/blocks/circle-with-text-block";
import CircleRing from "../../images/circle-graph.inline.svg";
import OvalSvg from "../../images/ovals/bottom-left-transparent-orange.inline.svg";

const OnlineBusiness = () => (
    <Layout>
        <SEO title="How to Start an Online Business"
             description="The internet has revolutionized business — it has broadened marketplaces, made products and services available to every one and lowered the barriers to starting a successful company. With the right approach and understanding, anyone can become a successful online entrepreneur."/>

        <Top ovalColor="yellow" imageName="online-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start
                an Online Business</h1>
            <p>
                The internet has revolutionized business — it has broadened
                marketplaces, made products and services available to every one
                and lowered the barriers to starting a successful company.
                With the right approach and understanding, anyone can become
                a successful online entrepreneur.
            </p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start Now"}} />
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabsWrapper>
            <Oval>
                <OvalSvg />
            </Oval>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Online business" SvgIcon={Tab1Icon}/>
                    <TabTitle title="Why This Industry?" SvgIcon={Tab2Icon}/>
                </TabHeading>

                <CollapseWrapper>
                    <PanelWrapper>
                        <Paragraph big>
                            But turning your idea into a successful business is about much more than launching a
                            website,
                            writing a couple of blog posts and using social media. Just like traditional businesses,
                            business success online requires hard work and dealing with rapidly changing tools and
                            processes. The low barrier to entry in owning an online business means that competition is
                            intense; if you want to be a success, you need to plan carefully and execute well.
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={MegafornIcon} color={color.purple3} curve
                                  curveColor={color.purple1}>
                            <Heading size={4}>
                                The question is, just where do you start?
                            </Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Here at Incfile, we know the answer, and we’ve shared it with more 100,000 people who
                                we've
                                helped in forming their business. Since 2004, we’ve supported online entrepreneurs just
                                like
                                you to get into business online, and we’re proud to have been a part of the internet
                                business revolution.
                            </Paragraph>
                        </Colorbox>

                        <Paragraph big style={{marginTop: "48px"}}>
                            Here is our simple guide to starting up a successful online business. From exploring the
                            types
                            of business you can go into through validation and research, to the legalities of setting up
                            your business and the realities of your day to day operations, this guide is here to help.
                        </Paragraph>
                        <Paragraph big style={{marginTop: "48px"}}>
                            Read on for some insight into creating your own online business and becoming an internet
                            entrepreneur.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>
                            Why You Should Start a New Online Business
                        </Heading>
                        <Paragraph big style={{marginBottom: "52px"}}>
                            The internet has opened up new frontiers, created amazing technologies and helped us connect
                            with others around the globe. It’s made everything more accessible, allowing us to easily
                            research and compare ideas, products, services and more. Entrepreneurs who can take
                            advantage of
                            these trends can do extremely well — here are some statistics on the power of online
                            businesses
                            in the U.S.:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="$300B"
                                                 text="Spent on online in the U.S. every year"/>
                        <BlueBoxWithAbsoluteText absoluteText="$100K"
                                                 text="Fifth of full-time independent workers earnings a year."/>

                        <CircleWithText textInsideCircle="70"
                                        textLine="Of U.S. entrepreneurs start their business from home - an ideal for online business."
                                        withBg={true} symbol="%" SvgChart={CircleRing}/>

                        <div style={{marginBottom: "30px", marginTop: "48px"}}>
                            <Adventages
                                headline="Online retail is expected to grow by between 8% and 12% year-on-year, compared to just4% for traditional retail"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Over a third of Americans are now involved in the 'gig economy', providing independent, freelance and contract work through on-demand services"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <Adventages
                                headline="Online businesses are typically less expensive to start than traditional businesses"
                                width="100%"
                            />
                        </div>

                        <Paragraph big>
                            This is why online businesses are so exciting — how can you be part
                            of that success? We're here to help you figure that out.
                        </Paragraph>
                    </PanelWrapper>

                </CollapseWrapper>
            </TabsSection>
        </TabsWrapper>

        <TypeBusiness/>

        <ValidatingBusinessIdea/>

        <BusinessPlan/>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <Taxes/>

        <ToolsAndLinks/>

        <Conclusion to="/" buttonTitle="Start your Online Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                The internet has made online entrepreneurship available
                to everyone. If you can find a great niche, understand your competitors and put together a solid
                business plan, you will have every chance for success
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

const TabsWrapper = styled.div`
  margin-top: 120px;
  position: relative;
  @media (min-width: 992px){
      margin-top: 21px;
  }
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default OnlineBusiness;
