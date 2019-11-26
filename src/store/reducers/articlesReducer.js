const initState = {
    articles: []
}

const articlesReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_ARTICLE':
            console.log('article created', action.article)
            return state;
        case 'CREATE_ARTICLE_ERROR':
            console.log('create article error', action.err)
            return state;
        case 'DELETE_ARTICLE':
            console.log('article deleted', action.article)
            return state;
        case 'DELETE_ARTICLE_ERROR':
            console.log('delete article error', action.err)
            return state;
        case 'EDIT_ARTICLE':
            console.log('article edited', action.article)
            return state;
        case 'EDIT_ARTICLE_ERROR':
            console.log('edit article error', action.err)
            return state;
        case 'CREATE_COMMENT':
            console.log('comment created', action.article)
            return state;
        case 'CREATE_COMMENT_ERROR':
            console.log('comment create error', action.err)
            return state;
        default:
        return state;
    }
    return state
}

export default articlesReducer