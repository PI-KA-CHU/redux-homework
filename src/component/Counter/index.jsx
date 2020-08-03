import React from 'react'

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {value : 0};
    }

    render() {
        return (
            <div>
                <button onClick = {this.decrescence}>-</button>
                <label >{this.state.value}</label>
                <button onClick = {this.increament}>+</button>
            </div>
        )
    }

    increament = () => {
        this.setState((preState) => ({
            value : preState.value + 1
        }))
    }

    decrescence = () => {
        this.setState((preState) => ({
           value : preState.value - 1 
        }))
    }
}

export default Counter;