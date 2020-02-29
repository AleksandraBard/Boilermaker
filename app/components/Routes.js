import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, Signup} from './auth-form'
import {UserHome} from './UserHome'

import {me} from '../redux/user'


class Routes extends React.Component {
    componentDidMount() {
        this.props.loadInitialData()
    }

    render() {
        const {isLoggedIn} = this.props
        
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                {isLoggedIn && (
                    <Switch>
                        <Route path='/home' component={UserHome} />
                    </Switch>
                )}
                <Route component={Login} />
            </Switch>
        )
    }
}


const mSTP = state => ({
    isLoggedIn: !!state.user.id
})

const mDTP = dispatch => {
    return {
        loadInitialData() {
            dispatch(me())
        }
    }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mSTP, mDTP)(Routes))