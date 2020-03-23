import 'react-app-polyfill/ie11';
import './constants/polyfill.js';
import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import Root from './containers';
import store from './store';

render(<Root store={store} />, document.getElementById('root'));