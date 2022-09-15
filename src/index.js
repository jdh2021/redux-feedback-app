import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// reducer receives action reported by dispatch
const feelingReducer = ( state = '', action ) => { 
    if (action.type === 'DISPATCH_FEELING'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = '';
    }
    return state;
}

const understandingReducer = ( state = '', action ) => { 
    if (action.type === 'DISPATCH_UNDERSTANDING'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = '';
    }
    return state;
}

const supportReducer = ( state = '', action ) => { 
    if (action.type === 'DISPATCH_SUPPORT'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = '';
    }
    return state;
}

const commentsReducer = ( state = '', action ) => { 
    if (action.type === 'DISPATCH_COMMENTS'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = '';
    }
    return state;
}

// store keeps track of reducers
const storeInstance = createStore(
    combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

