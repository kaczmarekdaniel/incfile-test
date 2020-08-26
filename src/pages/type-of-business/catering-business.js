import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import TabsSection from "../../atomic/partials/tabs";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import Tab1Icon from "../../images/icons/catering-business.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import CkeckText from "../../components/static-check/text-only";
import Container from "../../atomic/container";
import TextBlockWithImage from "../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import {color} from "../../components/styles/colors";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import OvalOrange2Svg from "../../images/oval-orange-2.inline.svg";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import HandsIcon from "../../images/icons/hands.inline.svg";
import IconCircle from "../../components/icons/circle";
import ArrowSVG from "../../images/arrow.inline.svg";
import LimitedIcon from "../../images/icons/limited-liability-company-or-llc.inline.svg";
import SeriesIcon from "../../images/icons/limited-liability-company.inline.svg";
import PlaneIcon from "../../images/icons/plane.inline.svg";
import RockerIcon from "../../images/icons/rocket.inline.svg";
import SettingBusiness from "../../atomic/sections/type-of-business/catering-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/catering-business/order-now";
import {RingText, toolsList} from "../../static/type-of-business/catering-business";
import HireEmployees from "../../atomic/sections/type-of-business/catering-business/hire-employees";
import UsefulTools from "../../atomic/partials/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import RingSvg from "../../images/rings.inline.svg";
import Adventages from "../../components/adventages";
import TypeOfBusiness from "../../atomic/sections/type-of-business/catering-business/type-of-business";
import ContentCenter from "../../atomic/partials/content-center";
import Links from "../../atomic/sections/type-of-business/catering-business/links";

const CateringBusiness = () => (
    <Layout>
        <SEO title="How to Start a Catering Business"
             description="Producing delicious food and experiences for your customers is a great way to make a living. "/>

        <Top ovalColor="sun-2" imageName="catering-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Catering Business</h1>
            <p>
                Producing delicious food and experiences for your customers
                is a great way to make a living.
            </p>
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

        <TabsSection>
            <TabHeading>
                <TabTitle title="Catering Business" SvgIcon={Tab1Icon}/>
                <TabTitle title="Why This Industry" SvgIcon={Tab2Icon}/>
                <TabTitle title="Is This Business For You?" SvgIcon={Tab3Icon}/>
            </TabHeading>

            <CollapseWrapper>
                <PanelWrapper>
                    <Heading size={3}>Starting a Catering Business</Heading>
                    <Paragraph big>
                        When it comes to food-based businesses, you have a few choices — you could go into business as a
                        restaurateur or start a catering business.
                    </Paragraph>
                    <Paragraph big>
                        A catering business can be a great choice if you don’t want the expense of running a restaurant.
                        You can still earn good margins on the meals you produce without having the overhead of running
                        a restaurant.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold", marginTop: "48px"}}>
                        Catering Business formation guide
                    </Paragraph>

                    <Paragraph big>
                        Running a successful catering business can be a big challenge. Whatever your idea for doing
                        business as a caterer, turning that vision into a company that creates amazing cuisine and
                        delights your customers is doable, so long as you take the right approach. In this guide we’ll
                        cover:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Understanding the world of catering
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Paying taxes for your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Deciding if you’re ready to start a catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Hiring employees, managing finances and administering your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Planning out your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Locating other resources for your catering business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Determining the best legal structure for your new organization
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Following various rules and regulations
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    And much more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>
                    </ListWrapper>

                    <Paragraph big>
                        By the time you've read through our complete digital nomad business guide, you will have all the
                        information you need to set up and manage a thriving venture. Let's get into it.
                    </Paragraph>
                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        Understanding the World of the Catering Business
                    </Heading>

                    <Paragraph big>
                        Caterers exist to provide food for major events, parties and functions. They exist to take the
                        stress out of preparing, cooking and serving food. Good catering businesses can expect repeat
                        bookings, and lucky business owners will get long-term agreements to provide food on a regular
                        basis.
                    </Paragraph>
                    <Paragraph big>
                        Caterers and other food establishments are big business in the U.S. Here are some surprising
                        statistics about their popularity.
                    </Paragraph>

                    <BlueBoxWithAbsoluteText absoluteText="$8.6B"
                                             text="Sales of social caterers in 2017, up from $7.7 billion in 2015"/>
                    <BlueBoxWithAbsoluteText absoluteText="$12B"
                                             text="Total revenue for catering businesses in 2017"/>
                    <BlueBoxWithAbsoluteText absoluteText="120K"
                                             text="Catering businesses in the U.S."/>
                    <BlueBoxWithAbsoluteText absoluteText="260K"
                                             text="Caterers employ people, or just over two per catering business"/>

                    <ColorFulCircleWithTextAndList list={RingText.list} title={RingText.title} CircleSVG={RingSvg}
                                                   withBg={true}/>

                    <div style={{marginBottom: "30px", marginTop: "48px"}}>
                        <Adventages
                            headline="The market is growing by 1.3 percent a year"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Corporate events are some of the biggest opportunities for caterers, followed by weddings and social catering"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Buffet-style catering is most popular, followed by plated meals"
                            width="100%"
                        />
                    </div>

                    <Paragraph big>
                        This makes the catering industry very attractive to aspiring entrepreneurs, but there are big
                        challenges in opening, running and growing a successful catering business. They demand a great
                        deal of work, so expect long hours. Add to that the need for a constantly full pipeline,
                        challenging profit margins and seasonal variation; you will need to work hard to ensure your
                        business is successful.
                    </Paragraph>
                    <Paragraph big>
                        But for those with the discipline, focus and commitment, running a catering business can be a
                        hugely satisfying experience for you, your staff and your patrons.
                    </Paragraph>

                </PanelWrapper>

                <PanelWrapper>
                    <Heading size={3}>
                        What Your Catering Clients Are Looking For
                    </Heading>
                    <Paragraph big>
                        When it comes to catering, your clients want several things:
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Reliability"
                            text="If food doesn't show up, there’s normally hell to pay! Clients will demand reliability and trustworthiness — if you can build up a reputation as a friendly, reliable caterer, expect good repeat bookings."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Friendliness"
                            text="It’s not just about the food you prepare, it’s also about how that food is served. Many clients will expect you to provide wait staff and servers, and you will need to ensure they have the right approach and attitude."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Marketing"
                            text="Promoting your beauty salon business against a competitive field; local marketing expertise is essential"
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Value for money"
                            text="Catering is a competitive business, and profit margins can be slim. You will need a rock-solid understanding of all your costs so you can price your services correctly."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Variety"
                            text="Many clients will look for something a little bit different. If you can provide varied foods at a reasonable price, that’s a great way to stand apart from your competitors."
                            width="100%"
                        />
                    </div>

                    <Heading size={3}>
                        Questions to Ask Before You Start a Catering Business
                    </Heading>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        Is Catering Entrepreneurship for You?
                    </Paragraph>

                    <Paragraph big>
                        Running a catering business requires resilience and good planning. You will need to combine
                        great marketing with an interesting and accessible menu and competitive pricing. You will need
                        to attract clients in a competitive local marketplace. Then, you must create amazing dishes,
                        hire staff, get chefs and ensure you always have work coming in.
                    </Paragraph>
                    <Paragraph big>
                        You can’t forget about the administrative side of this business either. Sourcing ingredients,
                        sorting out disputes, working out profits and more are all required. In fact, being a cater
                        requires one of the most well-rounded skillsets of any business you might choose to go into.
                        Along the way, you’ll learn amazing skills, develop great people management techniques and build
                        huge amounts of experience in creating and running a successful business.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold"}}>
                        What Are the Main Skills, Expertise and Experience to Be a Successful Catering Entrepreneur?
                    </Paragraph>

                    <Paragraph big>
                        As we mentioned above, running a catering business requires a huge and diverse range of skills.
                        Among other areas, these skills include:
                    </Paragraph>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Hiring"
                            text="Finding, interviewing and hiring great service industry employees for kitchen and food service work."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="People management"
                            text="Dealing with staff, coverage, issues and other people management areas."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Marketing"
                            text="Promoting a catering business against a competitive field. Local marketing expertise is essential."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Meal design"
                            text="Working with chefs to create innovative meals, source ingredients and create reasonable profit margins."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Kitchen creation"
                            text="Setting up the kitchen in the first place, which includes finding equipment, furniture, fixtures and fittings."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "30px"}}>
                        <Adventages
                            headline="Operational management"
                            text="Ensuring clients are treated well, orders are dealt with promptly and food is prepared to the standards you expect."
                            width="100%"
                        />
                    </div>

                    <div style={{marginBottom: "48px"}}>
                        <Adventages
                            headline="Business administration"
                            text="Sorting out profits, payroll, financial management, accounting and all the other areas that go into running any successful business."
                            width="100%"
                        />
                    </div>


                    <Paragraph big style={{fontWeight: "bold"}}>
                        Is Catering Entrepreneurship for You?
                    </Paragraph>

                    <Paragraph big>
                        There are several major challenges for any catering business owner. These start with competition
                        — your local area only has a certain number of clients, and you’re likely competing with a few
                        other local businesses. Although you will build up a good reputation over time, strong marketing
                        is essential in attracting clients to your business.
                    </Paragraph>
                    <Paragraph big>
                        Another major issue for catering owners is financial management and making a profit. The vast
                        majority of revenues you receive from patrons will go toward food ingredient costs (27-30
                        percent), staff salaries and wages (20-25 percent), occupancy costs (5-10 percent for utilities,
                        rent, etc.) and other costs. After all expenses are taken into account, overall profit margins
                        typically clock in at around 10 percent, compared to the average restaurant profit margin that
                        runs between 2 and 6 percent.
                    </Paragraph>

                    <Paragraph big>
                        Staff management also comes with is own list of challenges. From unexpected absenteeism to
                        interpersonal conflicts, juggling staffing priorities will take up a lot of your time!
                    </Paragraph>

                    <Paragraph big>
                        No two days are the same for a catering business owner, but all those days will be long. From
                        working out menus, training staff, marketing and administration in the mornings through
                        delivering food and providing services, you can expect to start work before 8 a.m. and not
                        finish until late. If you open a catering business, you need understanding family and friends
                        because they will not be seeing much of you.
                    </Paragraph>
                </PanelWrapper>
            </CollapseWrapper>
        </TabsSection>

        <TypeOfBusiness/>

        <SimpleSection>
            <Container>
                <CenterBox>
                    <Heading>
                        Write a Business Plan for Your Catering Business
                    </Heading>

                    <Paragraph big>
                        Finally, you should put your business plan together. Business plans do vary slightly, but they
                        should cover the following areas:
                    </Paragraph>

                    <CountingTextBoxed number={1}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An executive summary with the most important points from your business plan
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={2}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your goals and what you hope to achieve with your coaching business
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={3}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A description of your life or business coaching niche, background information and context
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={4}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            A market analysis and likely demand
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={5}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            An overview of how your life or business coaching organization is structured
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={6}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Your business model
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={7}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            How you will market and sell your offerings
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={8}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Financial projections, revenue and profitability
                        </Paragraph>
                    </CountingTextBoxed>

                    <CountingTextBoxed number={9}>
                        <Paragraph bottomPadding={0} bottomMargin={0}>
                            Appendices
                        </Paragraph>
                    </CountingTextBoxed>

                    <Paragraph big mixed={true} style={{marginTop: "50px"}}>
                        We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
                    </Paragraph>
                </CenterBox>
            </Container>
        </SimpleSection>

        <OrangeContainer>

            <Oval>
                <OvalOrange2Svg/>
            </Oval>

            <Container>
                <BusinessOwnerResponsibilities>
                    <ImageContent image="unique-business-2" paddingTop="60">
                        <Heading size={4} style={{fontSize: "24px"}}>
                            Choose the Right Business Structure and Register Your Catering Business
                        </Heading>
                        <Paragraph big>
                            Now that you have all the background information for your catering business, it’s time to
                            make it into a reality. That starts by choosing the right structure or “legal entity” for
                            your business. In the U.S., there are four main business structures. They are:
                        </Paragraph>

                        <TextBlockWithImage
                            SvgImage={HandsIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Sole Proprietorship
                            </Paragraph>

                            <Paragraph big>
                                This is the "default" business structure and is what your influencer business will be if
                                you decide not to create a more formal structure. We don't recommend this type of
                                business as it doesn't give you the legal protections you need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={LimitedIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Limited Liability Company or LLC
                            </Paragraph>

                            <Paragraph big>
                                The most common type of business entity. An LLC is fast, simple and inexpensive to setup
                                and maintain. It protects your personal finances and assets and is a great way to start
                                your real estate
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={SeriesIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                Series LLC
                            </Paragraph>

                            <Paragraph big>
                                This is a special type of LLC entity that's only available in certain states. It allows
                                you to create "mini" LLCs, each with their own limited liability and separate assets,
                                under the umbrella of a master LLC.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={PlaneIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                S Corporation
                            </Paragraph>

                            <Paragraph big>
                                This is a more complex type of business and isn't generally recommended for smaller
                                organization.
                            </Paragraph>
                        </TextBlockWithImage>

                        <TextBlockWithImage
                            SvgImage={RockerIcon}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={color.white}
                            imageShadowColor="#ababab"
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "70px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%"
                        >
                            <Paragraph big flex flexAlign={true} style={{color: color.blue1, fontWeight: "bold"}}
                                       mixed={true}>
                                <IconCircle circleColor="transparent" iconColor={color.blue1}>
                                    <ArrowSVG/>
                                </IconCircle>
                                C Corporation
                            </Paragraph>

                            <Paragraph big>
                                These are the largest and most complex types of businesses and are far more than the
                                average entrepreneur or business owner will need.
                            </Paragraph>
                        </TextBlockWithImage>

                        <Paragraph big style={{paddingTop: "120px"}} mixed={true}>
                            For more information on the advantages and disadvantages of different types of businesses,
                            please see our in-depth guide on business entities. If you still have questions, we’ve
                            answered them to help you choose the right business structure.
                        </Paragraph>
                        <Paragraph big mixed={true}>
                            In most cases our recommendation would be to create an LLC. We have a complete guide to
                            everything you need to do, and we can set one up for your T-shirt business. LLC formation
                            does vary from state to state, but we’ve got you covered, wherever you are.
                        </Paragraph>

                        <Button theme="primary48" width="365px" arrow>
                            Start your business with us, today!
                        </Button>
                    </ImageContent>
                </BusinessOwnerResponsibilities>

                <ContentCenter contentWidth={769} >
                    <Heading size={3} style={{fontSize: "40px", marginTop: "100px"}}>
                        Special Considerations for Setting up a Cleaning Business Entity
                    </Heading>

                    <Paragraph big mixed={true}>
                        For more information on the advantages and disadvantages of different types of businesses,
                        please see our in-depth guide. If you’ve still got questions, we’ve answered them to help you
                        choose the right business structure.
                    </Paragraph>
                    <Paragraph big mixed={true}>
                        In almost every case, the right business entity for a caterer is going to be an LLC. It provides
                        you with liability protection, is easy to set up and run, has low administrative overhead and
                        can be tax advantageous. We’ve got a complete guide to everything you need to do here, and we
                        can set one up for your catering business. LLC formation does vary from state to state, but
                        we’ve got you covered, wherever you are.
                    </Paragraph>
                </ContentCenter>
            </Container>
        </OrangeContainer>

        <SettingBusiness/>

        <OrderNow/>

        <Links />

        <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

        <Conclusion to="/" buttonTitle="Start your Etsy Business with us, today">
            <Heading size={3} style={{fontSize: "40px"}}>Conclusion</Heading>
            <Paragraph big>
                If you want to start a business that’s going to be a challenge but also bring a huge amount of pleasure and reward, then running a catering company could be right for you. The food you create and the trust you build will help set you apart in the minds of your clients and bring joy into people’s lives.
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

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 100%;
    
    @media (min-width: 576px) { 
        width: 50%; 
    }
`;

const BlueContainer = styled.section`
    background: rgb(242,246,255);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(250,251,255,1) 100%);
    padding-top: 100px;
    position: relative;
`;

const CenterBox = styled.div`
    width: 100%;
    padding-bottom: 100px;
    
    @media (min-width: 670px) {
        width: 670px;
        margin: 0 auto;
    }
`;

const GridSectionList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 100px;
    
    > div {
        margin-bottom: 70px;
    }
    
    @media (min-width: 970px) {
        width: 970px;
        margin: 100px auto 0;
    }
`;

const SimpleSection = styled.div`
    padding-top: 100px;
`;

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,246,237,1) 100%);
    padding-bottom: 100px;
    position: relative;
`;

const Oval = styled.div`
  position: absolute; 
  left: 0;
  top: 200px;
`

export default CateringBusiness;
