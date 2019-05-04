import {createStore, combineReducers} from 'redux';
import { userReducer } from './userReducer';
import { dataReducer } from './dataReducer';
import { statement } from '@babel/template';

// state.user.name
// state.data.todos

function configureStore(){
    return createStore(combineReducers({
        user: userReducer,
        data: dataReducer,
    }));
} // store 생성

export{
    configureStore
}
