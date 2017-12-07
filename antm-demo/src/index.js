import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import './index.css';

import App from './components/HomePage/App';
import Index from './components/Index';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
      <IndexRoute component={Stage1} />
      <Route path="index" component={Stage1} />
      <Route path="s1" component={Stage2} />
      <Route path="s2" component={Stage2} />
    </Route>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
