import authReducer from '../reducers/authReducer'
import articlesReducer from '../reducers/articlesReducer'
import gifsReducer from '../reducers/gifsReducer'
import tokenReducer from '../reducers/tokenReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    article: articlesReducer,
    gif: gifsReducer,
    token: tokenReducer
})

export default rootReducer