import setAuthToken from '../../helpers/setAuthToken'

export const createUser = (user) => { 
    try{
    return (dispatch) => {
        //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            body: JSON.stringify(user)
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/auth/create-user`, configuration)
        .then( (res) => { res.json() })
        .then( () => {
                dispatch({type: 'USER_CREATED', user})
            })
        .catch( (err) => {
            dispatch({ type: 'USER_CREATE_ERROR', err });
        })
    }
}catch(err){
    console.log(err)
    } 
}

 
export const loginUser = (user, ownProps) => { 
    try{
    return (dispatch) => {
        //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/auth/signin`, configuration)
        .then( (response) => response.json() )
        .then( (data) => {
                const user = data.data
                localStorage.setItem('teamworkToken', data.data.token)
                dispatch({type: 'USER_LOGIN', user})
                ownProps.history.push('/feed')
            })
        .catch( (err) => {
            dispatch({ type: 'USER_LOGIN_ERROR', err });
        })
    }
}catch(err){
    console.log(err)
    }
}



