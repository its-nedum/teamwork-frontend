const initState = {
    notification: null
}

const articlesReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_ARTICLE':
            console.log('article created')
            return {
                ...state,
                notification: 'Article created successfully'
            }
        case 'CREATE_ARTICLE_ERROR':
            console.log('create article error')
            return {
                ...state,
                notification: 'Article creation failed'
            }
        case 'DELETE_ARTICLE':
            console.log('article deleted')
            return {
                ...state,
                notification: 'Article deleted successfully'
            }
        case 'DELETE_ARTICLE_ERROR':
            console.log('delete article error')
            return {
                ...state,
                notification: 'Article deletion failed'
            }
        case 'EDIT_ARTICLE':
            console.log('article edited')
            return {
                ...state,
                notification: 'Article edited successfully'
            }
        case 'EDIT_ARTICLE_ERROR':
            console.log('edit article error')
            return {
                ...state,
                notification: 'Article edit failed'
            }
        case 'CREATE_COMMENT':
            console.log('comment created')
            window.location.reload()
            return {
                ...state,
                notification: 'Comment created successfully'
            }
        case 'CREATE_COMMENT_ERROR':
            console.log('comment create error')
            return {
                ...state,
                notification: 'Comment creation failed'
            }
        default:
        return state;
    }
   // return state
}

export default articlesReducer