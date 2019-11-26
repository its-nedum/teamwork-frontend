import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import {setAuthToken} from './helpers/setAuthToken'

if(localStorage.teamworkAuthTK){
    console.log(setAuthToken(localStorage.teamworkAuthTK))
}

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
 

serviceWorker.unregister();
