import React from "react"
import Counter from "../Counter";

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

    handelIncrease = () => {
        this.setState((preState) => ({
            totalNumebr: preState.totalNumebr + 1
        }))
    }

    handelDecreate = () => {
        this.setState((preState) => ({
            totalNumebr: preState.totalNumebr - 1
        }))
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
                    <label>Total number : {this.state.totalNumebr}</label>
                </div>
                <div>
                    {initArray.map(key => <Counter onIncrease={this.handelIncrease} onDecreate={this.handelDecreate} groupSize={this.state.size} key={key} />)}
                </div>
            </div>
        )
    }
}

export default CounterGroup;