import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './src/routes';
import { Router, browserHistory } from 'react-router';

const history = browserHistory;
const dest = document.getElementById('root');

require('./src/scss/app.scss');

render(<Router history={history} routes={routes} />, dest);
