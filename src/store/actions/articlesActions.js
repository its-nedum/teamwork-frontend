import setAuthToken from '../../helpers/setAuthToken'

export const createArticle = (article) => {
    try{
    return (dispatch) => {
        //FETCH API call 
    let configuration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': setAuthToken()
        },
        body: JSON.stringify(article)
    }
    return fetch('https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles', configuration)
            .then( (res) => { res.json() })
            .then( () => {
                    dispatch({type: 'CREATE_ARTICLE', article})
                })
            .catch( (err) => {
                dispatch({ type: 'CREATE_ARTICLE_ERROR', err });
            })  
    }
}catch(err){
    console.log(err)
    }
}

export const editArticle = (article) => {
    
    const articleToEdit = {
        title: article.title,
        article: article.article
    }
    //console.log(articleToEdit)
    try{
    return (dispatch) => {
        //FETCH API call 
    let configuration = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': setAuthToken()
        },
        body: JSON.stringify(articleToEdit)
    }
    return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${article.article_id}`, configuration)
            .then( (res) => { res.json() })
            .then( () => {
                    dispatch({type: 'EDIT_ARTICLE', articleToEdit})
                })
            .catch( (err) => {
                dispatch({ type: 'EDIT_ARTICLE_ERROR', err });
            })
    }
}catch(err){
    console.log(err)
    }
}

export const deleteArticle = (articleId) => { 
    console.log(articleId)
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
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${articleId}`, configuration)
                .then( (res) => { res.json() })
                .then( () => {
                        dispatch({type: 'DELETE_ARTICLE', articleId})
                    })
                .catch( (err) => {
                    dispatch({ type: 'DELETE_ARTICLE_ERROR', err });
                })
        }
    }catch(err){
        console.log(err)
        }
}


export const postArticleComment = (comment) => {
    
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
        return fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${comment.articleId}/comment`, configuration)
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


