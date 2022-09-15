import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// reducer receives action reported by dispatch
const feelingReducer = ( state = 0, action ) => { 
    if (action.type === 'DISPATCH_FEELING'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = 0;
    }
    return state;
}

const understandingReducer = ( state = 0, action ) => { 
    if (action.type === 'DISPATCH_UNDERSTANDING'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = 0;
    }
    return state;
}

const supportReducer = ( state = 0, action ) => { 
    if (action.type === 'DISPATCH_SUPPORT'){
        return action.payload;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        state = 0;
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

