import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeAddress } from '../redux/userReducer';

class AddressComponent extends Component{
    static defaultProps = {
        address : 'default address'
    }

    render(){
        return <div>
            {this.props.address}
            <button onClick={this.props.changeAddress}>change address</button>
        </div>
    }
}

const mapStateToProps = (state)=>{
    return {
        address: state.user.address
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        changeAddress: ()=>dispatch(changeAddress('new Address'))
    }
} // dispatch를 통해서 state 값을 바꿈

export default connect(mapStateToProps,mapDispatchToProps)(AddressComponent);