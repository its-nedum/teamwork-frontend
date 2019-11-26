import authReducer from '../reducers/authReducer'
import articlesReducer from '../reducers/articlesReducer'
import gifsReducer from '../reducers/gifsReducer'
import feedReducer from '../reducers/feedReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    article: articlesReducer,
    gif: gifsReducer,
    feed: feedReducer
})

export default rootReducer