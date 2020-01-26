import React, { Component } from 'react'
import Dice from './Dice';
import './RollDice.css';

export default class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {dice1: "one", dice2: "two"};
        this.roll = this.roll.bind(this);
    }
    roll() {
        //pick 2 new rolls
       const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

       const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

       //set state with new dice rolls
       this.setState({dice1: newDice1, dice2: newDice2});
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face={this.state.dice1}/>
                    <Dice face={this.state.dice2}/>
                </div>
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}
