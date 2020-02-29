//entry point for client

// import '../public/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Main from './components/Main'
import {Router} from 'react-router-dom'



ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)