import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import styled from 'styled-components'

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import ContentHeader from '../../atomic/states-llc/taxes-header';
import WrapperContent from '../../atomic/states-llc/wrapper-content'
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import BusinessNames from '../../atomic/states-llc/texas/business-names';

// Content
import { businessNamesContent } from "../../static/states-llc/texas/business-names";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
    }
`

const TexasBusinessNames = () => (
  <Layout>
        <SEO
        title="Texas Business Search | How to Name Your TX LLC"
        description="Learn what you need to know about naming an LLC in Texas with Incfile's helpful resources. Pick your perfect business name today!"
        />
        
        <LinearBgHeader  position="to top" imageMapName="tx-map-2x">
            <ContentHeader content={businessNamesContent.header} />
        </LinearBgHeader>

        <WrapperContent>
            <Wrapper>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <BusinessNames content={businessNamesContent.content} />
                </MainPageContent>
            </Wrapper>
        </WrapperContent>
        
        <Rocket content={rocket} />

  </Layout>
);

export default TexasBusinessNames;