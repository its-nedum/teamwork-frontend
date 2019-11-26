const initState = {
    feeds: [
        {articleId: 1, title:' My first feed', article: 'blah blah blah blah', createdAt: '2019-11-23'},
        {articleId: 2, title:' My second feed', article: 'blah blah blah blah', createdAt: '2019-11-23'},
        {articleId: 3, title:' My third feed', article: 'blah blah blah blah', createdAt: '2019-11-23'}
    ]
}

const articlesReducer = (state = initState, action) => {
    switch (action.type){
        case 'DISPLAY_FEED' :
            console.log('feeds displayed')
    }
    return state
}

export default articlesReducer