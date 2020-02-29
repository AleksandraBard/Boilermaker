import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {userReducer} from './redux/user'
import thunkMiddleware from 'redux-thunk'


const store = createStore(userReducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))

export default store