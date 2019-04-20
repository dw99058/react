import React, {Component} from 'react';
import {Message} from './Message';

class ChatList extends Component{

    constructor(props){
        super(props);
        this.state = {
            messages: [],
            content: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e){
        this.setState({
            content: e.target.value
        })
    }

    onClick(e){
        const {messages, content} = this.state;
        messages.push(content);
        this.setState({
            messages: messages,
            content: ""
        })
    }

    render(){
        const {content,messages} = this.state;

        const printMessages = messages.map((str)=>{
            return <Message content={str}></Message>
        })

        return(
            <div>
                <div>
                    메세지들
                    {printMessages}
                </div>
                <div>
                    input 필드 들어갈 영역
                    <input value = {content} onChange={this.onChange}></input>
                    <button onClick = {this.onClick}>Click</button>
                </div>
            </div>
        )
    }
}

export{
    ChatList
}