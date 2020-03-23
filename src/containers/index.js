import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

const Root = ({ store }) =>
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <App />
        </BrowserRouter>
    </Provider>

export default Root;