import React from 'react';
import {
  Router,
  Route,
  // IndexRoute,
  hashHistory
} from 'react-router';

import App from 'components/app';
import PlanIndex from 'routes/plan-index';

let NoMatch = () => <h1>404</h1>

export default () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="plans">
        <Route path=":id" component={PlanIndex} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
