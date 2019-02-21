import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import routes from './config/routes.js';
import {Router, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';


// <App />, document.getElementById('root'));

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);