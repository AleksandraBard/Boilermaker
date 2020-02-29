import axios from 'axios'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const getUser = (user) => ({
    type: GET_USER,
    user
})
const removeUser = () => ({
    type: REMOVE_USER
})

export const me = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/auth/me')
            dispatch(getUser(data))
        } catch (error) {
            console.log('Error', error)
        }
    }
}

export const auth = (email, password, method) => {
    return async dispatch => {
        try {
            const {data} = await axios.put(`/auth/${method}`, {email, password}) 
            dispatch(getUser(data))
        } catch (error) {
            console.log("error", error)
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            await axios.delete('/auth/logout')
            dispatch(removeUser())
        } catch (error) {
            console.log('Error', error)
        }
    }
}

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return action.user
        case REMOVE_USER: 
            return initialState
        default:
            return state
    }
}

export default userReducer