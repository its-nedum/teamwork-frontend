import authReducer from '../reducers/authReducer'
import articlesReducer from '../reducers/articlesReducer'
import gifsReducer from '../reducers/gifsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    article: articlesReducer,
    gif: gifsReducer
})

export default rootReducer