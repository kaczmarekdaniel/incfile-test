import React, { useState, useRef } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import SearchSVG from "../../../../images/search.inline.svg";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: ${props => (props.contentWidth ? props.contentWidth : "550px")};
  position: relative;
  margin-top: 30px;
  box-shadow: ${shadow.white2};
`

const Box = styled.form`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
  padding: 0 0 0 40px;
  position: relative;
  border-radius: 5px 0 0 5px;
`

const Icon = styled.div`
  height: 16px;
  width: 16px;
  transform: translateY(-2px);
`

const Label = styled.label`
  height: 100%;
  flex-grow: 1;
  position: absolute;
  z-index: -1;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  color: #1e1e1e;
  font-family: Avenir;
  font-size: 16px;
  line-height: 19px;
  margin-left: 16px;
`

const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 80px;
    width: 100px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    background-color: ${color.orange1};
    box-shadow: ${shadow.orange1};

    svg{
        path{
            fill: #fff;
        }
    }
`

const Searchbar = ({ typeSubmit, ...rest }) => {
    const [keyword, setKeyWord] = useState('');
    const searchInput = useRef(null);

    const handleForm = e => {
        e.preventDefault();
        
        if (!keyword) {
            searchInput.current.focus();
            return;
        }

        if (typeSubmit !== 'itself') {
            navigate('/business-name-generator-result/', { state: { keyword } });
        }
        return;
    }
    return (
        <Wrapper {...rest}>
            <Box onSubmit={(e) => handleForm(e)}>
                <Label for="search">searchbar</Label>
                <Input
                    name="search"
                    id="search"
                    type="text"
                    ref={searchInput}
                    onChange={e => setKeyWord(e.target.value)}
                    placeholder="Create New Name" />
                <SearchButton>
                    <Icon>
                        <SearchSVG />
                    </Icon>
                </SearchButton>
            </Box>
        </Wrapper>
    )
};

export default Searchbar;
