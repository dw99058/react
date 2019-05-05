import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getUser} from './redux/userReducer';

class App extends Component{

  static defaultProps = {
    name : 'default name',
    age : 0,
    address : 'default address'
  }

  componentDidMount(){
    this.props.getUser();
  }

  render(){
    const {name,age,address} = this.props;
    return (
      <div>
        <h1>
          {name}
        </h1>
        <div>
          {age}
        </div>
        <div>
          {address}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    name : state.user.name,
    age : state.user.age,
    address : state.user.address,
  }
} // state를 파라미터로 전달받아서 props 연결해줌

const mapDispatchToProps = (dispatch)=>{
  return {
    getUser : ()=>dispatch(getUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
