import React from "react"
import styled from "styled-components"
import Curve from "../images/purple-curve.inline.svg"
import { color } from "./styles/colors"
import { shadow } from "./styles/shadows"
import Label from "./form/label"
import Dropdown from "./form/dropdown"
import Button from "./button"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 470px;
    padding: 64px 40px 48px;
    position: relative;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 5px;

    h3 {
        text-align: center;
        max-width: 320px;
        margin-bottom: 32px;
    }

    label {
        width: 100%;
    }

    .label {
        margin-bottom: 24px;
    }

    .dropdown {
        width: 100%;
    }

    .price {
        font-family: MarkPro, sans-serif;
        font-size: 48px;
        line-height: 56px;
        color: ${color.black};
        margin-bottom: 8px;
    }

    .fee {
        font-family: Avenir, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey2};
        margin-bottom: 40px;
    }
`

const CertificateCard = ({ className }) => {

  return (
    <Wrapper className={className}>
        <h3>Filing Your Certificate of Good Standing</h3>
        <Label className="label">
        Entity Type
        <Dropdown className="dropdown"/>
        </Label>
        <Label className="label">
            State
        <Dropdown className="dropdown"/>
        </Label>
        <span className="price">$88</span>
        <span className="fee">+ $10 State Fee</span>
        <Button theme="primary56" arrow>Order now</Button>
    </Wrapper>
  )
}

export default CertificateCard
