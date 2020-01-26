import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    render() {
        return (
            <div>
               <i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : "" }`} />
            </div>
        )
    }
}
