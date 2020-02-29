import React from 'react'
import {connect} from 'react-redux'

export const UserHome = props => {
    const {email} = props

    return (
        <div>
            <h3>Welcome, {email}!</h3>
        </div>
    )
}

const mSTP = state => ({
    email: state.user.email
})

export default connect (mSTP)(UserHome)