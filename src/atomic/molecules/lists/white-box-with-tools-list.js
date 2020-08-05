import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ToolBox from "../../atoms/boxes/tool-box";
import {shadow} from "../../atoms/styles/shadows";
import {color} from "../../atoms/styles/colors";

const WhiteBoxWithToolsList = ({title, list}) => (
    <BoxWrapper>
        <TitleBox>
            {title}
        </TitleBox>
        <ToolsBox>
            {list.map(item => (
                <ToolBox title={item} />
            ))}
        </ToolsBox>
    </BoxWrapper>
);

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 28px 28px 13px 28px;
    background-color: white;
    box-shadow: ${shadow.white1};
    border-radius: 15px;
    margin-bottom: 15px;
`;

const TitleBox = styled.div`
    font-family: Avenir-Roman, sans-serif;
    width: 220px;
    padding-right: 30px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
    color: ${color.grey1}
`;

const ToolsBox = styled.div`
`;

WhiteBoxWithToolsList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
};

export default WhiteBoxWithToolsList;