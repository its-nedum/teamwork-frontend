export const createArticle = (article) => {
    try{
    return (dispatch) => {
        //FETCH API call 
    let configuration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
        },
        body: JSON.stringify(article)
    }
    return fetch('https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles', configuration)
            .then( (res) => {
                res.json()
                console.log(res)
                .then( () => {
                    dispatch({type: 'CREATE_ARTICLE', article})
                });
            }).catch( (err) => {
                dispatch({ type: 'CREATE_ARTICLE_ERROR', err });
            })  
    }
}catch(err){
    console.log(err)
    }
}

export const editArticle = (article) => {
    try{
    return (dispatch) => {
        //FETCH API call 
    let configuration = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
        },
        body: JSON.stringify(article)
    }
    return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${article.id}`, configuration)
            .then( (res) => {
                res.json()
                .then( () => {
                    dispatch({type: 'EDIT_ARTICLE', article})
                });
            }).catch( (err) => {
                dispatch({ type: 'EDIT_ARTICLE_ERROR', err });
            })
    }
}catch(err){
    console.log(err)
    }
}

export const deleteArticle = (article) => { 
    try{
        return (dispatch) => {
            //FETCH API call 
        let configuration = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
            }
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${article.id}`, configuration)
                .then( (res) => {
                    res.json()
                    .then( () => {
                        dispatch({type: 'DELETE_ARTICLE', article})
                    });
                }).catch( (err) => {
                    dispatch({ type: 'DELETE_ARTICLE_ERROR', err });
                })
        }
    }catch(err){
        console.log(err)
        }
}


export const postArticleComment = (article) => {
    try{
        return (dispatch) => {
            //FETCH API call 
        let configuration = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
            },
            body: JSON.stringify(article)
        }
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${article.id}/comment`, configuration)
                .then( (res) => {
                    res.json()
                    .then( () => {
                        dispatch({type: 'CREATE_COMMENT', article})
                    });
                }).catch( (err) => {
                    dispatch({ type: 'CREATE_COMMENT_ERROR', err });
                })
        }
    }catch(err){
        console.log(err)
        }
}


// export const singleArticle = (article) => {
//     try{
//         return (dispatch) => {
//             //FETCH API call 
//         let configuration = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg',
//             },
//         }
//         return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${article.id}`, configuration)
//                 .then( (res) => {
//                     res.json()
//                     .then( () => {
//                         dispatch({type: 'CREATE_COMMENT', article})
//                     });
//                 }).catch( (err) => {
//                     dispatch({ type: 'CREATE_COMMENT_ERROR', err });
//                 })
//         }
//     }catch(err){
//         console.log(err)
//         }
// }