import React from 'react';
import Plan from 'components/plan';

import { createEventHandler } from 'recompose';
import fuse from 'redux-fusion';
import itemActions from 'actions/item';

let PlanIndex = ({ plan, moveItem }) =>
  <div className="route plan-index">
    <nav className="picker">Pick from me!</nav>
    <Plan plan={plan} moveItem={moveItem} />
  </div>

let props$ = (state$, dispatch) => props$ => {
  let {
    handler: moveItem,
    stream: moveItem$
  } = createEventHandler();

  moveItem$
    .subscribe(val => dispatch(itemActions.move(val)));

  let mapStateToProps = state$
    .pluck('plan')

  return props$.combineLatest(mapStateToProps, (props, plan) => ({
    plan,
    moveItem,
    ...props
  }))
}

let enhance = fuse(props$);

export default enhance(PlanIndex);
