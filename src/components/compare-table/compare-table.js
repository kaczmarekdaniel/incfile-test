import React, {useState} from "react";
import styled from "styled-components";
import MinusIcon from "./minus-icon";
import Badge from "./badge";

const Table = styled.div`
    display: flex;
    flex-direction: column;
`;

const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    background-color: #ffffff;
    margin-bottom: 8px;
`;

const TableCell = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: normal;
    color: #1d1d1d;
    width: 24%;
    font-family: ${(props) => (props.header ? `"Avenir", sans-serif` : `"Avenir-Roman", sans-serif`)};
    font-weight: ${(props) => (props.header ? '900' : 'normal')};
    justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const Divider = styled.div`
    width: 1px;
    height: 80px;
    background-color: #f4f4f4;
`;

const BadgeGreen = styled.div`
    background-color: #f1f8f3;
    padding: 8px 26px;
    line-height: 14px;
    border-radius: 32px;
`;

const Button = styled.div`
    padding: 4px 32px;
    color: #fd8550;
    font-family: "MarkPro", sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 24px;
    border: solid 2px #fd945b;
    cursor: pointer;
`;

const StatesList = styled.div`
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: row;
`;

const StatesListCol = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding-left: 80px;
`;

const CompareTable = ({headers, entries}) => {
    let [statesListOpen, setStateListOpen] = useState(false);
    let [statesList, setStateList] = useState(entries);
    let statesInColumn = Math.ceil(statesList.length / 4);
    const stateChanged = (item) => {
        let index = statesList.indexOf(item);
        setStateList(prevState => {
            let newState = [...prevState];
            newState[index].selected = !newState[index].selected;
            return newState;
        });
    };
    return (
        <>
            <Table>
                <TableRow>
                    {headers.map((header, index) => (
                        <>
                            <TableCell header center={index > 0}>{header}</TableCell>
                            {index < (headers.length - 1) && <Divider/>}
                        </>
                    ))}
                </TableRow>
                {statesList.filter(entry => entry.selected).map(entry => (
                    <TableRow>
                        <TableCell>
                            <div onClick={() => stateChanged(entry)}>
                                <MinusIcon/>
                            </div>
                            {entry.state}
                        </TableCell>
                        <Divider/>
                        <TableCell center>{entry.normalProcessingTime}</TableCell>
                        <Divider/>
                        <TableCell center>
                            <BadgeGreen>{entry.expeditedProcessingTime}</BadgeGreen>
                        </TableCell>
                        <Divider/>
                        <TableCell center>
                            <BadgeGreen>{entry.expeditedPrice}</BadgeGreen>
                        </TableCell>
                    </TableRow>
                ))}
                {statesListOpen && <StatesList>
                    {Array(4).fill(0).map((_, i) => (
                        <StatesListCol>
                            {statesList.slice(i * statesInColumn, i * statesInColumn + statesInColumn).map(entry => (
                                <div onClick={() => stateChanged(entry)}>
                                    <Badge selected={entry.selected}>{entry.state}</Badge>
                                </div>
                            ))}
                        </StatesListCol>
                    ))}
                </StatesList>}
                <TableRow>
                    <TableCell>
                        <Button onClick={() => setStateListOpen(!statesListOpen)}>{statesListOpen ? 'Close the states list' : 'Close the states list'}</Button>
                    </TableCell>
                </TableRow>
            </Table>
            <p>See full list of filing times for every state.</p>
        </>
    );
};

export default CompareTable;