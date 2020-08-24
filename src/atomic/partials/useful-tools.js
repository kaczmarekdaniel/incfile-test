import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextCenterLayout from "../partials/heading-center";
import ToolsList from "../organisms/lists/tools-list";

const UsefulTools = ({toolsList, headlineText, description, ...rest}) => (
    <Wrapper {...rest}>
        <TextCenterLayout headline={headlineText}
                          text={description}/>

        <ToolsList tools={toolsList}/>
    </Wrapper>
);

const Wrapper = styled.section`
padding-top: 100px;
`;

UsefulTools.propTypes = {
    toolsList: PropTypes.array.isRequired,
    headlineText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default UsefulTools;
