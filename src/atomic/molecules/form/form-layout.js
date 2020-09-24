import React from "react";
import FormPageTitle from "./form-page-title";
import Container from "../../container";
import styled from "styled-components";

const FormLayout = ({children, formTitle}) => (
    <Wrapper>
        <Container>
            <FormPageTitle title={formTitle}/>
        </Container>

        <Container>
            <form>
                <GridContent>
                    {children}
                </GridContent>
            </form>
        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
    padding-top: 145px;
    margin-bottom: 100px;
`;

const GridContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 30px;
`;

export default FormLayout;
