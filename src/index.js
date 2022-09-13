import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// reducer receives action reported by dispatch
const feelingReducer = ( state = 0, action ) => { 
    return state;
}

// store to keep track of reducers
const storeInstance = createStore(
    combineReducers({
    feelingReducer
    })
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

