import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

const initialState = {
    todos: ["씻기"]
}

const ADD_TODO = 'ADD_TODO';

function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return Object.assign({},state,{
                todos: [...state.todos, action.content]
            });
        default:
            return state;
    }
}

const store = createStore(todos);

console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type: ADD_TODO,
    content : "abc"
})




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
