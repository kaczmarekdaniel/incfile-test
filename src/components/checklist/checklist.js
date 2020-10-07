import React from "react"
import styled from "styled-components"
import Item from "./item"
import _ from 'lodash'
import ShowUncompleted from './show-uncompleted'
import { shadow } from "../styles/shadows"

const description = 'In oculis quidem faciunt, ut labore et via procedat oratio quaerimus igitur, quid bonum esse ratione intellegi posse et molestiae non recusandae itaque negat opus esse appetendum, alterum aspernandum sentiamus alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur verear, ne ferae.';
const baseHeight = 80;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`

const Undone = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
`

const Separator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
    transition: all 0.5s;
`

const Done = styled.div`
    display: flex;
    flex-direction: column;    
    position: relative;
    margin-top: 20px;
    transition: all 0.5s;
`

const ShadowCard = styled.div`
    width: calc(100% - ${props => props.index * 16}px);
    height: ${baseHeight}px;
    position: absolute;
    top: ${props => props.index * 8}px;
    left: ${props => props.index * 8}px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${shadow.white1};
    
    &:last-child {
        box-shadow: none;
    }
`;

class Checklist extends React.Component {
    constructor(props) {
        super(props)
        this.getMeta = this.getMeta.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
        this.stackItems = this.stackItems.bind(this)
        this.state = {
            stack: false,
            completed: 0,
            item: {
                height: 60
            },
            items: [
                {id: 1, name: 'Lorem ipsum 1', isCompleted: false, height: baseHeight, description},
                {id: 2, name: 'Lorem ipsum 2', isCompleted: false, height: baseHeight, description},
                {id: 3, name: 'Lorem ipsum 3', isCompleted: false, height: baseHeight, description},
                {id: 4, name: 'Lorem ipsum 4', isCompleted: false, height: baseHeight, description},
            ],
            shadowCards: 0
        }
    }

    getMeta() {
        const { items } = this.state
        const completed = items.filter(item => item.isCompleted)
        const uncompleted = items.filter(item => !item.isCompleted)
        return {
            completed: {
                items: completed,
                height: this.state.stack ? baseHeight + 20 : completed.length > 0 ? _.sumBy(completed, 'height') : 0,
                length: completed.length
            },
            uncompleted: {
                items: uncompleted,
                height: uncompleted.length > 0 ? _.sumBy(uncompleted, 'height') : 0
            },
        }
    }

    calcShadowCardsCount(stacked, completedCount) {
        return stacked ? Math.max(Math.min(completedCount - 1, 2), 0) : 0
    }

    toggleClass(id) {
        const { items } = this.state
        const updatedItems = items.map(item => ({...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}))
        const completed = updatedItems.filter(item => item.isCompleted);
        this.setState({
            items: updatedItems,
            shadowCards: this.calcShadowCardsCount(this.state.stack, completed.length)
        })
    }

    stackItems(stacked) {
        const { items } = this.state
        const completed = items.filter(item => item.isCompleted);
        this.setState(prevState => ({
            stack: stacked,
            shadowCards: this.calcShadowCardsCount(stacked, completed.length)
        }))
    }

    handleChangeItemHeight = (id, height) => {
        const { items } = this.state
        const updatedItems = items.map(item => ({...item, height: item.id === id ? height : item.height}))
        this.setState({items: updatedItems})
    }

    render() {
        const meta = this.getMeta()
        let uInd = 0, cInd = 0
        const items = this.state.items.map((item, index) => (
            <Item id={item.id}
                  index={item.isCompleted ? cInd++ : uInd++}
                  meta={meta}
                  initHeight={baseHeight}
                  name={item.name}
                  isCompleted={item.isCompleted}
                  toggleClass={() => this.toggleClass(item.id)}
                  isStack={this.state.stack}
                  description={item.description}
                  onChangeHeight={this.handleChangeItemHeight}/>
        ))

        return (
            <Wrapper>
                <Undone style={{height: `${meta.uncompleted.height}px`}}>
                    {items}
                </Undone>
                <Separator>
                    <h4>Done</h4>
                    <ShowUncompleted stackItems={this.stackItems}>showLess</ShowUncompleted>
                </Separator>
                <Done style={{height: `${meta.completed.height}px`}}>
                    {Array.from({length: this.state.shadowCards}, (_, i) => i + 1).reverse().map(index => <ShadowCard {...{index}}/>)}
                </Done>
            </Wrapper>
        )
    }
}

export default Checklist