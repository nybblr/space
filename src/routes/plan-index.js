import React from 'react';
import fuse from 'redux-fusion';

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

  let stateToProps$ = state$
    .pluck('plan')

  return props$.combineLatest(stateToProps$, (props, plan) => ({
    plan,
    moveItem,
    ...props
  }))
}

let enhance = fuse(props$);

export default enhance(PlanIndex);
