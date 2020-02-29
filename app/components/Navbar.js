import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../redux/user'


const Navbar = props => {
    const {handleCLick, isLoggedIn} = props

    return (
        <div> 
            <h1>Boilermaker</h1>
            <nav>
                {isLoggedIn ? (
                    <div> 
                        <Link to='/home'>Home</Link>
                        <a href='#' onClick={handleCLick}>
                            logout
                        </a>
                    </div>
                ) : (
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                )}
            </nav>
            <hr />
        </div>
    )
}


const mSTP = state => {
    return {
        isLoggedIn: !!state.user.id
    }
}

const mDTP = dispatch => {
    return {
        handleCLick() {
            dispatch(logout())
        }
    }
}

export default connect(mSTP, mDTP)(Navbar)

