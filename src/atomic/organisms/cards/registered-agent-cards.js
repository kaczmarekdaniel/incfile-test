import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    padding-bottom: 36px;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
`

const colors = [color.yellow3, color.purple3];
const icons = ["free-business", "free-agent"]

const RegisteredAgentsCards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map((card, i) => (
            <Card content={card} color={colors[i]} image={icons[i]} />
        ))}
    </Wrapper>
  )
}

export default RegisteredAgentsCards;