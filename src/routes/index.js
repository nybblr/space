import React from 'react';
import {
  Router,
  Route,
  // IndexRoute,
  hashHistory
} from 'react-router';

import App from 'components/app';

let NoMatch = () => <h1>404</h1>

export default () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
