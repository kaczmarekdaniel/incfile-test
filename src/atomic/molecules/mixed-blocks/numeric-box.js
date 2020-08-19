import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled(ArrowLink)`
    margin-top: 24px;
`;

const NumericBox = ({ className, id, item }) => {
  return (
    <Whitebox className={className}>
        <Circle>
            {id + 1}
        </Circle>
        <TextWrapper>
        {item.header && (
            <Heading size="5" bottomMargin="36">{item.header}</Heading>
        )}
        {item.text && (
            <Paragraph bottomMargin="0">{item.text}</Paragraph>
        )}
        {item.url && (
            <Link content={item.url} bottomMargin="0" />
        )}
        {!item.header && !item.text && !item.url && (
            <Paragraph bottomMargin="0">{item}</Paragraph>
        )}
        </TextWrapper>
    </Whitebox>
  )
}

export default NumericBox;
