import React from "react";
import Layout from "../../components/layout";
import Top from "../../atomic/partials/top";
import ButtonsBox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import SEO from "../../components/seo";
import TabHeading from "../../atomic/organisms/tabs/TabHeading";
import TabTitle from "../../atomic/molecules/tabs/tab-title";
import AmazonIcon from "../../images/icons/amazon-business.inline.svg";
import SoldIcon from "../../images/icons/sold-by-amazon.inline.svg";
import FBAIcon from "../../images/icons/amazon-fba.inline.svg";
import LightIcon from "../../images/icons/light.inline.svg";
import CalcIcon from "../../images/icons/series-is-this-business-for-you.inline.svg";
import CollapseWrapper from "../../atomic/organisms/tabs/collapse";
import PanelWrapper from "../../atomic/organisms/tabs/panel";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import BlueBoxWithAbsoluteText from "../../atomic/molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../components/adventages";
import CountingTextBoxed from "../../atomic/molecules/text-blocks/counting-text-boxed";
import TabsSection from "../../atomic/partials/tabs";
import styled from "styled-components";
import Colorbox from "../../components/color-box";
import {color} from "../../components/styles/colors";
import TextBoxed from "../../atomic/molecules/text-blocks/text-boxed";
import CkeckText from "../../components/static-check/text-only";
import BusinessStructure from "../../atomic/sections/type-of-business/amazon-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/amazon-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/amazon-business/order-now";
import AmazonLinks from "../../atomic/sections/type-of-business/boutique-clothing-business/links";
import Conclusion from "../../atomic/sections/general/conclusion";
import UsefulTools from "../../atomic/partials/useful-tools";
import {RingText, toolsList} from "../../static/type-of-business/amazon-business";
import ColorFulCircleWithTextAndList from "../../atomic/molecules/blocks/colorful-circle-with-text-and-list";
import CircleSvg from "../../images/rings-8.inline.svg";
import TabOvalSvg from "../../images/ovals/top-right-transparent-green3.inline.svg";
import ToolsOvalSvg2 from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import ToolsOvalSvg from "../../images/ovals/bottom-left-transparent-orange.inline.svg";

const AmazonBusiness = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>

        <Top ovalColor="sun" imageName="amazon-business-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Amazon Business</h1>
            <p>Ecommerce is rapidly growing in popularity, with 80 percent
                of Americans regularly purchasing something online. These trends
                look set to continue, with revenue from ecommerce websites
                growing over 20 percent year on year.year on year.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start Now"}} />
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <TabWrapper>
            <TabOval>
                <TabOvalSvg/>
            </TabOval>
            <TabsSection>
                <TabHeading>
                    <TabTitle title="Amazon Business" SvgIcon={AmazonIcon}/>
                    <TabTitle title="Why this industry?" SvgIcon={LightIcon}/>
                    <TabTitle title="Is This Business For You?" SvgIcon={CalcIcon}/>
                </TabHeading>

                <CollapseWrapper>

                    <PanelWrapper>
                        <Paragraph big style={{marginBottom: "50px"}}>
                            It’s a lucrative space, and there’s money to be made. If you want to get into the world of
                            ecommerce and selling online, you have a few choices.
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>If you’re a traditional, “brick and mortar” store, you
                                    can
                                    start
                                    up an ecommerce website</Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>You could build your own ecommerce store from
                                    scratch</Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "50px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>You can take advantage of marketplaces on existing
                                    ecommerce
                                    websites such as Amazon and Etsy</Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big>
                            Of course, the dominant player in the ecommerce space is Amazon -
                            it’s among the world’s largest ecommerce websites, and it provides some massive
                            opportunities
                            for sellers. As an Amazon business, you can offer your products for sale through Amazon to
                            gain
                            access to their enormous reach, technology and marketplace.
                        </Paragraph>

                        <Paragraph big>
                            You might think selling on Amazon is easy; they do a good job of setting up sellers for
                            success.
                            Despite this, there are potential pitfalls to selling on Amazon, so we’ve put together this
                            complete guide to tell you exactly how to maximize your chances of creating a thriving
                            Amazon
                            business. We’ll cover:
                        </Paragraph>

                        <ListWrapper>
                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Understanding the world of Amazon businesses and what it takes to be an Amazon
                                        seller
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        The various rules and regulations you will need to follow
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Questions you should ask to see if you’re ready to start an Amazon business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Hiring employees, marketing and administration
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        The best legal structure for your new organization
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Information on taxes and finances for your Amazon business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        Resources for your Amazon business
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                            <ListBox>
                                <CkeckText>
                                    <Paragraph big>
                                        ... and much morees
                                    </Paragraph>
                                </CkeckText>
                            </ListBox>

                        </ListWrapper>

                        <Paragraph big>
                            By the time you’ve read through our complete Amazon business guide, you will have all the
                            information you need to setup and manage a thriving Amazon business. Let’s get into it.
                        </Paragraph>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={3}>Understanding the World of the Amazon Business</Heading>
                        <Paragraph big>
                            So, what exactly is an Amazon seller? Simply put, they are people and companies who source
                            goods
                            and then sell them on Amazon at a profit. There are two main kinds of Amazon businesses:
                        </Paragraph>

                        <Colorbox className="box" theme="icon" Icon={SoldIcon} color={color.orange3}
                                  curve
                                  curveColor={color.orange2}>
                            <Heading size={4}>"Sold by Amazon" Sellers</Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Sellers who source, procure, store and ship the goods themselves including taking care
                                of
                                customer service and returns. They only use Amazon to list their products, get exposure,
                                sell them and take payment. These are known as "Sold by Amazon” sellers.
                            </Paragraph>
                        </Colorbox>

                        <Colorbox className="box" theme="icon" Icon={FBAIcon} color={color.blue3}>
                            <Heading size={4}>Key Amazon Business and Background Data and Statistics</Heading>
                            <Paragraph bottomPadding={0} bottomMargin={0}>
                                Why would you choose to sell through Amazon? Here are some of their astonishing
                                statistics:
                            </Paragraph>
                        </Colorbox>

                        <Heading style={{marginTop: "70px"}} size={3}>Understanding the World of the Amazon
                            Business</Heading>
                        <Paragraph big bottomMargin={70}>
                            So, what exactly is an Amazon seller? Simply put, they are people and companies who source
                            goods
                            and then sell them on Amazon at a profit. There are two main kinds of Amazon businesses:
                        </Paragraph>

                        <BlueBoxWithAbsoluteText absoluteText="$136B"
                                                 text="Amazon.com's revenue in 2016"/>
                        <BlueBoxWithAbsoluteText absoluteText="300M"
                                                 text="Number of people shops on Amazon.com"/>
                        <BlueBoxWithAbsoluteText absoluteText="100K"
                                                 text="Amazon sellers had sales of $100K or more in 2016"/>

                        <ColorFulCircleWithTextAndList list={RingText.list} withBg={true} CircleSVG={CircleSvg}/>

                        <Heading style={{marginTop: "70px"}} size={3}>Amazon sellers had sales of $100K or more in
                            2016</Heading>
                        <Paragraph big bottomMargin={70}>
                            If you want to be successful on Amazon, finding the right products and buyers is absolutely
                            essential. Due to the success of the platform, there
                            is a vast amount of competition across almost every niche and product. The biggest factors
                            that
                            will decide your success are choosing the right product, understanding the demand for that
                            product and selling
                            it at a profit.
                        </Paragraph>

                        <Heading size={3}>What Your Amazon Business Customers Are Looking For</Heading>
                        <Paragraph big bottomMargin={70}>
                            People who buy on Amazon are motivated to purchase in a few
                            different ways:
                        </Paragraph>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Price"
                                text="Amazon is famously known for its competitive prices, so much so that people often compare prices in traditional stores with what Amazon is charging. You need to keenly price your items."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Speed"
                                text="Customers want their items quickly. If you’re using FBA, Amazon will take care of that for you. If you’re shipping out yourself, you will need to have fast and reliable logistics and distribution."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Quality"
                                text="Customers expect high-quality items that do what you say they will. Even if items are inexpensive, customers do not expect the quality to be “cheap.”"
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Rewiews"
                                text="Reviews are the lifeblood of ranking your products on the marketplace. Good reviews are essential for getting your products seen and creating trust with other buyers."
                                width="100%"
                            />
                        </div>

                        <Button to="/" theme="primary56" marginMD="0 170px 0 0" arrow>
                            Download our Guide to Starting an Amazon Business
                        </Button>

                    </PanelWrapper>

                    <PanelWrapper>
                        <Heading size={2} style={{fontSize: "24px", textAlign: "left", marginBottom: "48px"}}>
                            Questions to Ask Before You Start an Amazon Business
                        </Heading>

                        <Heading size={3} style={{fontSize: "20px", textAlign: "left", marginBottom: "24px"}}>
                            Is Amazon Business Entrepreneurship For You?
                        </Heading>
                        <Paragraph big>
                            Although Amazon does resolve many of the issues facing an e-commerce startup (marketing,
                            acquiring sales, managing distribution, etc.), that doesn't make running an Amazon business
                            easy. You must be able to deal with significant competition, be acutely aware of the state
                            of
                            the marketplace, deal with Amazon’s regulations and policies and be a master administrator.
                        </Paragraph>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            The profit margins are also likely to be razor-thin. You need to create, buy inventory,
                            manage
                            and maintain a successful business on small profit margins and against a very competitive
                            landscape. But, if you can make
                            it, the upsides are huge. If your product really gets traction, you could make your way into
                            the
                            upper ranks of sellers who make more than $1,000,000 a year on the platform.
                        </Paragraph>

                        <Heading size={3} style={{fontSize: "20px", textAlign: "left", marginBottom: "24px"}}>
                            What Are the Main Skills, Expertise and Experience to Be a Successful Amazon Entrepreneur?
                        </Heading>
                        <Paragraph big>
                            Being a successful Amazon business owner requires a diverse set of skills:
                        </Paragraph>

                        <CountingTextBoxed number={1}>
                            <div>
                                <Heading size={3} style={{marginBottom: "16px"}}>
                                    Strong research abilities
                                </Heading>
                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                    So you can find the right suppliers, products and customers
                                </Paragraph>
                            </div>
                        </CountingTextBoxed>

                        <CountingTextBoxed number={2}>
                            <div>
                                <Heading size={3} style={{marginBottom: "16px"}}>
                                    Excellent forecasting abilities
                                </Heading>
                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                    So you can understand trends in the market and ensure you have enough stock and
                                    inventory
                                </Paragraph>
                            </div>
                        </CountingTextBoxed>

                        <CountingTextBoxed number={3}>
                            <div>
                                <Heading size={3} style={{marginBottom: "16px"}}>
                                    Great flexibility
                                </Heading>
                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                    So you can adapt to changing requirements and customer needs
                                </Paragraph>
                            </div>
                        </CountingTextBoxed>

                        <CountingTextBoxed number={4}>
                            <div>
                                <Heading size={3} style={{marginBottom: "16px"}}>
                                    Good math skills
                                </Heading>
                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                    So you can work out profit margins, cash flow and foreign currency exchange
                                </Paragraph>
                            </div>
                        </CountingTextBoxed>

                        <CountingTextBoxed number={5}>
                            <div>
                                <Heading size={3} style={{marginBottom: "16px"}}>
                                    Powerful attention to detail
                                </Heading>
                                <Paragraph bottomPadding={0} bottomMargin={0}>
                                    So you can examine top sellers, product specifications and supplier requirements
                                </Paragraph>
                            </div>
                        </CountingTextBoxed>

                        <div style={{marginBottom: "76px"}}>
                            <CountingTextBoxed number={6}>
                                <div>
                                    <Heading size={3} style={{marginBottom: "16px"}}>
                                        Good marketing skills
                                    </Heading>
                                    <Paragraph bottomPadding={0} bottomMargin={0}>
                                        Since often basics such as headline writing, copywriting and call-to-actions can
                                        make or break your Amazon listing
                                    </Paragraph>
                                </div>
                            </CountingTextBoxed>
                        </div>

                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                            What Are the Main Challenges for an Amazon Seller Entrepreneur?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Here are the main issues an Amazon seller entrepreneur is likely to face:
                        </Paragraph>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Running a Successful Business With Thin Profit Margins"
                                text="The Amazon seller space is very competitive. A combination of price pressure, foreign exchange rates and customer expectations means you need to take care of all your business costs from constantly pressurized profit margins. It’s essential to have a deep understanding of the numbers so you can pay all your business costs from those margins."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Cash Flow and Inventory Management"
                                text="Because of these thin profit margins you have to judge cash flow very carefully and balance your cash on hand versus money you have coming in and having enough inventory to meet customer demand. You will also need to bear in mind lead times on getting products from your suppliers and build this into your seasonal demand cycles."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "30px"}}>
                            <Adventages
                                headline="Planning skills to offer the amenities, supplies and services that your guests want"
                                text="Because of these thin profit margins you have to judge cash flow very carefully and balance your cash on hand versus money you have coming in and having enough inventory to meet customer demand. You will also need to bear in mind lead times on getting products from your suppliers and build this into your seasonal demand cycles."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <Adventages
                                headline="Dealing with Competition"
                                text="Competition is ever-present in the Amazon selling space. You need to keep a constant eye on other sellers, look at their product offering and prices. You will need to tweak your stock levels and selling prices so you rank properly."
                                width="100%"
                            />
                        </div>

                        <div style={{marginBottom: "48px"}}>
                            <Adventages
                                headline="Marketing and Promotion"
                                text="Although you will get exposure on Amazon’s marketplace, you also need to market yourself. That could be via buying ads on Amazon itself, social media marketing, going through an affiliate or some other means. The right mix of marketing will make a big difference to your success."
                                width="100%"
                            />
                        </div>

                        <Heading size={2} style={{fontSize: "24px", textAlign: "left"}}>
                            What Does a Day in the Life of a Amazon Seller Entrepreneur Look Like?
                        </Heading>
                        <Paragraph big style={{marginBottom: "48px"}}>
                            Here’s what you can expect in an average day:
                        </Paragraph>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Reviewing sales from the previous day, week and month to see what products are doing
                                    well
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Looking at your current inventory and stock levels and planning for future sales
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Making orders with your suppliers and arranging for payment
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Exploring new opportunities for products and expanding into a different marketplace
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Calculating profit margins and selling prices to ensure you can pay all your
                                    business
                                    expenses
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <div style={{marginBottom: "50px"}}>
                            <TextBoxed>
                                <Paragraph big bottomMargin={0}>
                                    Dealing with any requests or issues flagged by Amazon
                                </Paragraph>
                            </TextBoxed>
                        </div>

                        <Paragraph big style={{textAlign: "right", fontWeight: "bold", marginBottom: "50px"}}>
                            ...and many more
                        </Paragraph>

                        <Paragraph big mixed={true}>
                            Check out our <span className="big blue">additional guidance in understanding if an Amazon business is the right choice for you.</span> If
                            this blog post, we'll help you analyze if your Amazon business idea is a good one, conduct
                            market research and build a business plan.
                        </Paragraph>
                    </PanelWrapper>

                </CollapseWrapper>
            </TabsSection>
        </TabWrapper>

        <BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <AmazonLinks/>

        <ToolsWrapper>
            <ToolsOval>
                <ToolsOvalSvg2 />
            </ToolsOval>
            <ToolsOval2>
                <ToolsOvalSvg />
            </ToolsOval2>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </ToolsWrapper>

        <div style={{marginTop: "200px"}}>
            <Conclusion to="/" buttonTitle="Why delay? Start your Amazon Business with us, today">
                <Heading size={3} style={{fontSize: "40px"}}>
                    Conclusion
                </Heading>
                <Paragraph big>
                    Starting an Amazon business can be both very challenging and very rewarding. Find the right niche,
                    source great products and sell them at a profit and you have the makings of a successful business.
                    Eventually, you could be among the 15 percent who sell more than $1,000,000 worth of products every
                    year.
                </Paragraph>
            </Conclusion>
        </div>
    </Layout>
);

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

const TabWrapper = styled.div`
      margin-top: 120px;
      position: relative;
      @media (min-width: 992px){
          margin-top: 21px;
      }
`;

const TabOval = styled.div`
    position: absolute;
    width: 420px;
    left: 0;
    top: 0;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
    
    svg {
       transform: scaleY(-1); 
    }
`;

const ToolsWrapper = styled.div`
    position: relative;
`;

const ToolsOval = styled.div`
    position: absolute;
    width: 570px;
    right: 0;
    top: 303px;
    transform: rotate(-180deg);
     z-index: -1;
     display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const ToolsOval2 = styled.div`
    position: absolute;
    width: 720px;
    left: 0;
    bottom: 0;
    z-index: -1;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default AmazonBusiness;
