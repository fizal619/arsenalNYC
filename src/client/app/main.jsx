'use strict'
import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css');

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Link } from 'react-router'

import LoginUser from './LoginUser.jsx'
import NotFound from './NotFound.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={LoginUser} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('container'))
