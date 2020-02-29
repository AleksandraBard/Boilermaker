import React from 'react'
import {connect} from 'react-redux'
import auth from '../redux/user'

const AuthForm = props => {
    const {name, displayName, handleSubmit, error} = props

    return (
        <div>
            <form onSubmit={handleSubmit} name={name}>
                <div>
                    <label htmlFor='email'>
                        <small>Email</small>
                    </label>
                    <input name='email' type='text' />
                </div>
                <div>
                    <label htmlFor='password'>
                        <small>Password</small>
                    </label>
                    <input name='password' type='password' />
                </div>
                <div>
                    <button type='submit'>displayName</button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
            </form>
            <a href='/auth/google'>{displayName} with Google</a>
        </div>
    )
}

const mapLogin = state => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.user.error
    }
}

const mapSignup = state => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.user.error
    }
}

const mDispatch = dispatch => {
    return {
        handleSubmit(e) {
            e.preventDefault()
            const formName = e.target.name 
            const email = e.target.email.value
            const password = e.target.password.value 
            dispatch(auth(email, password, formName))
        }
    }
}

export const Login = connect(mapLogin, mDispatch)(AuthForm)
export const Signup = connect(mapSignup, mDispatch)(AuthForm)