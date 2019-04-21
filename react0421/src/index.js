import React, {Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// <App/> == <APP></APP> 똑같은거임.

// function Profile(props){
//     const style={
//         backgroundColor : props.bg,
//         color: props.color
//     }
//     return <h1 style={style}>{myName} {myAge}</h1>
// }

// class Profile extends Component{
//     static defaultProps = {
//         bg : "blue",
//         color : "white"
//     }

//     render(){
//         const {bg, color} = this.props;

//         const style = {
//             backgroundColor: bg,
//             color: color
//         }

//         return <h1 style={style}>{myName} {myAge}</h1>
//     }
// }

// Profile.defaultProps = {
//     bg : "blue",
//     color : "white"
// }

// // jsx 문법. html이 아님. 태그는 하나의 태그만 와야함!!! 태그 여러개면 Fragment 로 감싸기
// const myName = "jack";
// const myAge = 20;

// const view = <Fragment>
//     <div className="crimson">Hello world</div>
//     <h1 style={{backgroundColor: "crimson", color:"white"}}>{myName} {myAge}</h1>
//     <Profile bg="crimson" color="white"></Profile>
// </Fragment>

ReactDOM.render(<App/>, document.getElementById('root')); // 최종적으로 public - index.html 에 렌더링시킴. 괄호안에 view : 위에 작성한 view 가 실행, <App/> 이면 App.js 가 실행