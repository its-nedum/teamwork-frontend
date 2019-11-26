const initState = {
    user: []
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_CREATED':
            console.log('user created', action.user)
            return state;
        case 'USER_CREATE_ERROR':
            console.log('user create error', action.err)
            return state;
        case 'USER_LOGIN':
            console.log('user login', action.user)
            return state;
        case 'USER_LOGIN_ERROR':
            console.log('user login error', action.err)
            return state;
    
        default:
            return state;
    }
    
}

export default authReducer