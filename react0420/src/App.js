import React, { Component } from 'react';
import {ChatList} from './component/ChatList';

// function HelloworldA(){
//   return <div>Helloworld function</div>
// }
// class HelloworldB extends Component{
//   render(){
//     return <div>Helloworld class</div>
//   }
// }

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ChatList></ChatList>
      </div>
    );
  }
}

export default App;
