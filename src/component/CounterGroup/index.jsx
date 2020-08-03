import React from "react";
import Counter from "../Counter";
import { unmountCounter } from '../../action';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: 0, totalNumebr: 0 }
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 1,
            totalNumebr: 0
        })
    }

    unmountCounter = (value) => {
        this.props.store.dispatch(unmountCounter(value ? parseInt(value) : 0))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return (
            <div>
                <div>
                    <label>Group size:
                        <input onBlur={this.handleResize} defaultValue={0} />
                    </label>
                </div>
                <div>
                    <label>Total number : {this.props.store.getState()}</label>
                </div>
                <div>
                    {initArray.map(key => <Counter
                        onIncrease={() => this.props.store.dispatch({ type: 'INCREMENT' })}
                        onDecreate={() => this.props.store.dispatch({ type: 'DECREMENT' })}
                        unmountCounter={this.unmountCounter} 
                        key={key} 
                    />)}
                </div>
            </div>
        )
    }
}

export default CounterGroup;