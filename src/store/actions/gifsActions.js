import setAuthToken from '../../helpers/setAuthToken'

export const createGif = (newGif) => {
    try{
    return (dispatch) => {
        //FETCH API call 
    let configuration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': setAuthToken()
        },
        body: JSON.stringify(newGif)
    }
    return fetch('https://its-nedum-teamwork-api.herokuapp.com/api/v1/gifs', configuration)
            .then( (res) => { res.json() })
            .then( () => {
                    dispatch({type: 'CREATE_GIF', newGif})
                })
            .catch( (err) => {
                dispatch({ type: 'CREATE_GIF_ERROR', err });
            })  
    }
}catch(err){
    console.log(err)
    }
}


export const deleteGif = (gifId) => { 
   // console.log(gifId)
    try{
        return (dispatch) => {
            //FETCH API call 
        let configuration = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            }
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/gifs/${gifId}`, configuration)
                .then( (res) => {  res.json() })
                .then( () => {
                        dispatch({type: 'DELETE_GIF', gifId})
                    })
                .catch( (err) => {
                    dispatch({ type: 'DELETE_GIF_ERROR', err });
                })
        }
    }catch(err){
        console.log(err)
        }
}


export const postGifComment = (comment) => {
    
    try{
        return (dispatch) => {
            //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            body: JSON.stringify(comment)
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/gifs/${comment.gifId}/comment`, configuration)
                .then( (res) => { res.json() })
                .then( () => {
                        dispatch({type: 'CREATE_COMMENT', comment})
                    })
                .catch( (err) => {
                    dispatch({ type: 'CREATE_COMMENT_ERROR', err });
                })
        }
    }catch(err){
        console.log(err)
        }
}