const initialState = {
    name : 'jack',
    age : 20,
    address : 'secret',
} // reducer 의 최초 state

function changeAddress(newAddress){
    return {
        type: 'CHANGE_ADDRESS',
        address: newAddress,
    }
}

function userReducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_ADDRESS":
            return Object.assign({}, state, {
                address : action.address
            })
        default:
            return state;
    }
}

export {
    userReducer,
    changeAddress
}