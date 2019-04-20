import React, {Component} from 'react';

class CountList extends Component{

    constructor(props){
        super(props)
        this.state = {
            number: 0,
            result: 0,
        }
        this.onClick = this.onClick.bind(this); // this 써서 오류나면 이렇게 적기
        this.onNumberChange = this.onNumberChange.bind(this);
    }

    onClick(){
        this.setState({
            result: this.state.number
        })
    }

    onNumberChange(e){
        this.setState({
            number: e.target.value
        })
    }

    render(){

        return (
        <div>
            <div>
                <input value={this.state.number} onChange={this.onNumberChange}></input>
                <button onClick={this.onClick}>Click</button>
            </div>
            <h1>
                {this.state.result}
            </h1>
        </div>
        )

    }
}

export{
    CountList
};
// 위 처럼 작성하면 불러올 때 import {CountList} from './CountList'

//export default CountList;
// 위 처럼 작성하면 불러올 때 import CountList from './CountList'