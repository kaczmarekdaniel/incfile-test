import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { color } from "../atomic/atoms/styles/colors";
import Top from "../atomic/partials/blog-top";
import Container from "../atomic/container";
import ArticleCard from "../atomic/organisms/cards/blog-article-card";
import NewsletterCard from "../atomic/organisms/cards/blog-newsletter-card";
import Searchbar from "../atomic/organisms/forms/blog-search-articles";
import FollowUs from "../atomic/organisms/cards/blog-follow-us";
import { articles, followUs } from "../static/blog";

const Wrapper = styled.section`
    padding: 72px 0;
    background-color: ${color.grey5};
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;

    @media(min-width: 769px) {
        grid-template-columns: 2fr 1fr;
    }
`

const Articles = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    
    @media(min-width: 769px) {
        grid-template-columns: 1fr 1fr;
        
    }
`;

const Sidebar = styled.div`
    width: 100%;
`

const Sticky = styled.div`
    position: sticky;
    top: 100px;

    & > div {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
`;

const Blog = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top headline="Where Business Begins. Your Resource to Grow." text="The Incfile Blog" imageName="business-checklist"/>
    <Wrapper>
        <Container>
            <Content>
                <Articles>
                    {articles.map(article => (
                        <ArticleCard content={article}/>
                    ))}
                </Articles>
                <Sidebar>
                    <Sticky>
                        <Searchbar />
                        <NewsletterCard />
                        <FollowUs content={followUs} />
                    </Sticky>
                </Sidebar>
            </Content>
        </Container>
    </Wrapper>
  </Layout>
);

export default Blog;
