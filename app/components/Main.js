import React from 'react'
import {Users} from './Users'


export default class Main extends React.Component {
    render() {
        return (
                <div id='users'>
                    <h1>ALL USERS</h1>
                    <Users />
                </div>
        )
    }
}