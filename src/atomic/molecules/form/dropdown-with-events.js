import styled from "styled-components"
import {color} from "../../atoms/styles/colors"
import DropdownSVG from "../../../images/dropdown.inline.svg"
import Label from "../../atoms/text-fields/label";
import Link from "../../atoms/links/link";
import React, {Component} from "react";
import Dropdown from 'react-dropdown';

const Wrapper = styled.div`
    position: relative;
    width: 100%;

    .Dropdown {
        &-root {
            position: relative;
            width: 100%;
            font-family: Avenir, sans-serif;
            font-size: 16px;
            line-height: 24px;
            border-radius: 5px;

            &.is-open {
               
                .Dropdown-control {
                    border-radius: 5px 5px 0 0;
                }
            }
        }

        &-control {
            position: relative;
            overflow: hidden;
            background-color: ${color.grey5};
            border-radius: 5px;
            font-weight: 400;
            color: ${color.black}; 
            outline: none;
            padding: 24px 32px 24px 80px;
            transition: all 200ms ease;
            cursor: pointer;
            border: 1px solid ${color.orange1};
        }

        &-menu {
            background-color: ${color.grey5};
            margin-top: -1px;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            position: absolute;
            -webkit-overflow-scrolling: touch;
            z-index: 2;
            border: 1px solid ${color.grey3};
        }

        &-option {
            color: ${color.grey1};
            cursor: pointer;
            display: block;
            padding: 12px 24px;

            &:hover {
                background-color: ${color.blue3};
                color: ${color.grey1};
            }

            &.is-selected {
                background-color: ${color.blue3};
                color: ${color.grey1};
            }
        }
    }

    svg {
        position: absolute;
        top: 37px;
        right: 18px;
        transform: translateY(-50%);
        pointer-events: none;
    }
    
    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .bottom {
        width: 100%;
        position: relative;
        
        .badge {
            background-color: ${color.orange1};
            border-radius: 20px;
            width: 32px;
            height: 32px;
            line-height: 30px;
            font-size: 16px;
            color: ${color.white};
            z-index: 1;
            text-align: center;
            
            position: absolute;
            top: 21px;
            left: 32px;
            pointer-events: none;
        }
    }
`;

class Dropdown2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props?.selected ?? ""
        };

        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect(option) {
        this.setState({selected: option});

        if(this.props.onSelect != null)
            this.props.onSelect(option);
    }

    render() {
        const defaultOption = this.state.selected;

        return (
            <Wrapper className={this.props.className}>
                <div className="top">
                    {this.props.label && (
                        <Label text={this.props.label}/>
                    )}
                    {this.props.linkText && (
                        <Link linkUrl={this.props.linkUrl} linkText={this.props.linkText}/>
                    )}
                </div>
                <div className="bottom">
                    {this.props.badge && (<span className="badge">{this.props.badge}</span>)}
                    <Dropdown options={this.props.options} onChange={this._onSelect} value={defaultOption}
                              placeholder={this.props.placeholder}/>
                    <DropdownSVG/>
                </div>
            </Wrapper>
        )
    }
}

export default Dropdown2;