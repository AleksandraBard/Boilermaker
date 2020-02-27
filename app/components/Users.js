import React from 'react'
import {connect} from 'react-redux'
import {allUsersThunk} from '../redux/users'

class DisconnectedUsers extends React.Component {

    componentDidMount() {
        this.props.allUsers()
    }

    render() {
        const {users} = this.props
        return (
            <div>
                <ul>
                    {users.users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mSTP = state => ({
    users: state.users
})

const mDTP = dispatch => ({
    allUsers: () => dispatch(allUsersThunk())
})

export const Users = connect(mSTP, mDTP)(DisconnectedUsers)