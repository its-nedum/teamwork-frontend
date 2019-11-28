const initState = {
    notification: null
}

const gifsReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_GIF':
            console.log('gif created')
            return {
                ...state,
                notification: 'Gif created successfully'
            }
        case 'CREATE_GIF_ERROR':
            console.log('create gif error')
            return {
                ...state,
                notification: 'Gif creation failed'
            }
        case 'DELETE_GIF':
            console.log('gif deleted')
            return {
                ...state,
                notification: 'Gif deleted successfully'
            }
        case 'DELETE_GIF_ERROR':
            console.log('delete gif error')
            return {
                ...state,
                notification: 'Gif deletion failed'
            }
        case 'CREATE_COMMENT':
            console.log('comment created')
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

export default gifsReducer