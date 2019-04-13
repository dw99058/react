import React from 'react';

export class Content extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count:0
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.reset = this.reset.bind(this);
    }

    increaseCount(){
        const current = this.state.count;
        this.setState({
            count: current+1
        })
        // this.state.count = this.state.count+1;
    }

    decreaseCount(){
        const current = this.state.count;
        this.setState({
            count: current-1
        })
        // this.state.count = this.state.count-1;
    }

    reset(){
        this.setState({
            count: 0
        })
    }

    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.increaseCount}>UP</button>
                <button onClick={this.decreaseCount}>Down</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }

}