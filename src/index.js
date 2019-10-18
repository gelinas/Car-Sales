import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("store from src/index.js", store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
