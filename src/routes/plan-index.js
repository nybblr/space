import React from 'react';
import fuse from 'redux-fusion';
import { combineLatest } from 'rxjs/observable/combineLatest';

import Plan from 'components/plan';
import itemActions from 'actions/item';
import bindAction from 'lib/bind-action';

let PlanIndex = ({ plan, moveItem }) =>
  <div className="route plan-index">
    <nav className="picker">Pick from me!</nav>
    <Plan plan={plan} moveItem={moveItem} />
  </div>

let props$ = (state$, dispatch) => props$ => {
  let moveItem = bindAction(dispatch, itemActions.move);

  let plan$ = state$
    .pluck('plan')

  return combineLatest(
    props$, plan$,
    (props, plan) => ({
      moveItem, plan, ...props
    })
  )
}

let enhance = fuse(props$);

export default enhance(PlanIndex);
