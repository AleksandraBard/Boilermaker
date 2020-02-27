import axios from 'axios'

const GET_USERS = 'GET_USERS'

const getAllUsers = (users) => ({
    type: GET_USERS,
    users
})

export const allUsersThunk = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/api/users')
            dispatch(getAllUsers(data))
        } catch (error) {
            console.log('Error with fetching of all users!', error)
        }
    }
}


const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users}
        default:
            return state
    }
}

export default usersReducer