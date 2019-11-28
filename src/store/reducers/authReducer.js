const initState = {
   notification: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_CREATED':
            console.log('user created')
            return {
                ...state,
                notification: 'User created successfully'
            }
        case 'USER_CREATE_ERROR':
            console.log('user create error')
            return {
                ...state,
                notification: 'You must be an Admin to access this service'
            }
        case 'USER_LOGIN':
            console.log('user login')
            return {
                ...state,
                notification: 'Login was successful'
            }
        case 'USER_LOGIN_ERROR':
            console.log('user login error')
            return {
                ...state,
                notification: 'Login failed'
            }
    
        default:
            return state;
    }
    
}

export default authReducer