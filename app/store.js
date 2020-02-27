import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import appReducer from './redux/appReducer'
import thunkMiddleware from 'redux-thunk'


const store = createStore(appReducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))

export default store