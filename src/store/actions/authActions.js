export const createUser = (user) => { 
    try{
    return async (dispatch) => {
        //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg'
            },
            body: JSON.stringify(user)
        }
        return await fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/auth/create-user`, configuration)
        .then( (res) => {
            res.json()
            .then( () => {
                dispatch({type: 'USER_CREATED', user})
            });
        }).catch( (err) => {
            dispatch({ type: 'USER_CREATE_ERROR', err });
        })
    }
}catch(err){
    console.log(err)
    } 
}

 
export const loginUser = (user) => { 
    try{
    return (dispatch) => {
        //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
            },
            body: JSON.stringify(user)
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/auth/signin`, configuration)
        .then( (res) => {
            res.json()
            .then( () => {
                dispatch({type: 'USER_LOGIN', user})
            });
        }).catch( (err) => {
            dispatch({ type: 'USER_LOGIN_ERROR', err });
        })
    }
}catch(err){
    console.log(err)
    }
}



