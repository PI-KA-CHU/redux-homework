import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 , groupSize : 0};
    }

    render() {
        return (
            <div>
                <button onClick={this.decrescence}>-</button>
                <label >{this.state.value}</label>
                <button onClick={this.increament}>+</button>
            </div>
        )
    }

    increament = () => {
        this.setState((preState) => ({
            value: preState.value + 1
        }))
        this.props.onIncrease();
    }

    decrescence = () => {
        this.setState((preState) => ({
            value: preState.value - 1
        }))
        this.props.onDecreate();
    }

    static getDerivedStateFromProps(props, state){

        if (props.groupSize !== state.groupSize) {
            return {
                value: 0,
                groupSize: props.groupSize
            }
        }
        
    }
}

export default Counter;