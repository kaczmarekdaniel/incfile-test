import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Top from "../../atomic/partials/top";
import Button from "../../components/button";
import ClientDashboardSection from '../../atomic/sections/contact/client-dashboard-introduction';
import SupportFormSection from '../../atomic/sections/contact/support-form';
import ContactInfoSection from '../../atomic/sections/contact/conatact-info';
import Tools from "../../atomic/sections/learning-center-entity/help-center/tools";
// Content
import { newSales } from '../../static/contact.js'; 
import { tools } from "../../static/learning-center-entity/help-center";

const NewSales = () => (
    <Layout>
        <SEO
            title="Help for New & Potential Customers | Incfile"
            description="Have a question about starting a new business or how Incfile can help you? Read common questions or fill out our contact form here."
        />

        <Top imageName="hero-contact-new-sales" heightSM="75vh" ovalColor="yellow" alt="existing clients">
            <h1>We're Here To Help</h1>
            <p>Phone support available Monday - Friday from 
            9am to 6pm CST or submit a question and we'll respond 
            as quickly as possible.</p>
            <Button to="/" theme="primary56" width="250px" arrow>Contact our support</Button>
        </Top>

        <ClientDashboardSection content={newSales} isNewSale={true} />
        <Tools content={tools} bgLinear="to bottom, #f2f6ff, #ffffff"/>
        <SupportFormSection isNewSale={true}/>
        <ContactInfoSection content={newSales.phone} isNewSale={true}/>
    </Layout>
)

export default NewSales;
