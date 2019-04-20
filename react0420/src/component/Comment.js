import React, {Component} from 'react';

class Comment extends Component{
    render(){
        const {content} = this.props;
        //const content = this.props.content;
        return(
            <div>
                {content}
            </div>
        );
    }
}

export {
    Comment
}